import {processor} from "./processor";
import {TypeormDatabase} from "@subsquid/typeorm-store";
import {Account, DdcBucket, DdcCluster, DdcNode} from "./model";
import {CereBalancesProcessor} from "./processors/cereBalancesProcessor";
import {DdcBalancesProcessor} from "./processors/ddcBalancesProcessor";
import {DdcClustersProcessor} from "./processors/ddcClustersProcessor";
import {DdcNodesProcessor} from "./processors/ddcNodesProcessor";
import {DdcBucketsProcessor} from "./processors/ddcBucketsProcessor";
import {In} from "typeorm";
import {assertNotNull} from "@subsquid/util-internal";

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const logger = ctx.log

    // set up processors
    const cereBalancesProcessor = new CereBalancesProcessor()
    const ddcBalancesProcessor = new DdcBalancesProcessor()
    const ddcClustersProcessor = new DdcClustersProcessor()
    const ddcNodesProcessor = new DdcNodesProcessor()
    const ddcBucketsProcessor = new DdcBucketsProcessor()

    // process events
    for (let b of ctx.blocks) {
        const block = b.header
        for (let event of b.events) {
            logger.info(`Received event ${event.name} at block ${block.height} (${block.hash})`)
            await cereBalancesProcessor.process(event, block)
            await ddcBalancesProcessor.process(event, block)
            await ddcClustersProcessor.process(event, block)
            await ddcNodesProcessor.process(event, block)
            await ddcBucketsProcessor.process(event, block)
        }
    }

    // retrieving state from processors
    const accountToCereBalance = cereBalancesProcessor.getState()
    const accountToDdcBalance = ddcBalancesProcessor.getState()
    const ddcClusters = ddcClustersProcessor.getState()
    const ddcNodes = ddcNodesProcessor.getState()
    const ddcBuckets = ddcBucketsProcessor.getState()

    // create missing accounts
    const accounts = new Map<string, Account>

    async function createAccounts(source: string[]) {
        let existingAccounts = await ctx.store.findBy(Account, {id: In(source)})
        existingAccounts.forEach((account) => {
            accounts.set(account.id, account)
        })
        source.forEach((id) => {
            if (!accounts.has(id)) {
                accounts.set(id, new Account({id: id, cereFreeBalance: 0n, ddcActiveBalance: 0n}))
            }
        })
    }

    await createAccounts([...accountToCereBalance.keys()])
    await createAccounts([...accountToDdcBalance.keys()])

    const ddcClusterAccounts = [...ddcClusters.values()].map((c) => c.managerId)
    await createAccounts(ddcClusterAccounts)

    const ddcNodesAccounts = [...ddcNodes.updatedNodes.values()].map((c) => c.providerId)
    await createAccounts(ddcNodesAccounts)

    const ddcBucketsAccounts = [...ddcBuckets.values()].map((c) => c.ownerId)
    await createAccounts(ddcBucketsAccounts)

    // update Cere balances
    accountToCereBalance.forEach((balance, id) => {
        const account = assertNotNull(accounts.get(id))
        account.cereFreeBalance = balance
        accounts.set(id, account)
    })
    // update DDC balances
    accountToCereBalance.forEach((balance, id) => {
        const account = assertNotNull(accounts.get(id))
        account.ddcActiveBalance = balance
        accounts.set(id, account)
    })
    // persist accounts
    await ctx.store.upsert([...accounts.values()])

    const ddcClusterEntities: DdcCluster[] = []
    ddcClusters.forEach((c) => {
        ddcClusterEntities.push(new DdcCluster({
            id: c.id,
            managerId: accounts.get(c.managerId),
            treasuryShare: c.treasuryShare,
            validatorsShare: c.validatorsShare,
            clusterReserveShare: c.clusterReserveShare,
            storageBondSize: c.storageBondSize,
            storageChillDelay: c.storageChillDelay,
            storageUnbondingDelay: c.storageUnbondingDelay,
            unitPerMbStored: c.unitPerMbStored,
            unitPerMbStreamed: c.unitPerMbStreamed,
            unitPerPutRequest: c.unitPerPutRequest,
            unitPerGetRequest: c.unitPerGetRequest,
            erasureCodingRequired: c.erasureCodingRequired,
            erasureCodingTotal: c.erasureCodingTotal,
            replicationTotal: c.replicationTotal,
            status: c.status,
        }))
    })
    // persist DDC Clusters
    await ctx.store.upsert(ddcClusterEntities)

    const clusterIdsToFind = []
    clusterIdsToFind.push([...ddcNodes.updatedNodes.values()].map(node => node.clusterId))
    clusterIdsToFind.push([...ddcBuckets.values()].map(bucket => bucket.clusterId))

    const existingClusters = await ctx.store.findBy(DdcCluster, {id: In(clusterIdsToFind)})
    const ddcNodeClustersMap = new Map<string, DdcCluster>
    existingClusters.forEach(c => {
        ddcNodeClustersMap.set(c.id, c)
    })

    const ddcNodeEntities: DdcNode[] = []
    ddcNodes.updatedNodes.forEach((node) => {
        const cluster = ddcNodeClustersMap.get(node.clusterId)
        if (!cluster) {
            logger.warn(`No DDC cluster with id ${node.clusterId} found. Skipping DDC node ${node.id} for persistence`)
            return
        }
        ddcNodeEntities.push(new DdcNode({
            id: node.id,
            providerId: accounts.get(node.providerId),
            clusterId: cluster,
            host: node.host,
            domain: node.domain,
            ssl: node.ssl,
            httpPort: node.httpPort,
            grpcPort: node.grpcPort,
            p2pPort: node.p2pPort,
            mode: node.mode,
        }))
    })

    // persist DDC Nodes
    await ctx.store.upsert(ddcNodeEntities)

    // remove DDC Nodes
    const toRemove = await ctx.store.findBy(DdcNode, {id: In([...ddcNodes.removedNodes.values()])})
    await ctx.store.remove(toRemove)

    const ddcBucketEntities: DdcBucket[] = []
    ddcBuckets.forEach((bucket) => {
        const cluster = ddcNodeClustersMap.get(bucket.clusterId)
        if (!cluster) {
            logger.warn(`No DDC cluster with id ${bucket.clusterId} found. Skipping bucket ${bucket.bucketId} for persistence`)
            return
        }
        ddcBucketEntities.push(new DdcBucket({
            id: bucket.bucketId.toString(),
            bucketId: bucket.bucketId,
            ownerId: accounts.get(bucket.ownerId),
            clusterId: cluster,
            isPublic: bucket.isPublic,
            isRemoved: bucket.isRemoved,
            transferredBytes: bucket.transferredBytes,
            storedBytes: bucket.storedBytes,
            numberOfPuts: bucket.numberOfPuts,
            numberOfGets: bucket.numberOfGets,
        }))
    })

    // persist DDC Buckets
    await ctx.store.upsert(ddcBucketEntities)
})