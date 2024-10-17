import { processor } from './processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { Account, DdcCustomerUsage, DdcBucket, DdcBucketUsage, DdcCluster, DdcNode } from './model'
import { CereBalancesProcessor } from './processors/cereBalancesProcessor'
import { DdcBalancesProcessor } from './processors/ddcBalancesProcessor'
import { DdcClustersProcessor } from './processors/ddcClustersProcessor'
import { DdcNodesProcessor } from './processors/ddcNodesProcessor'
import { DdcBucketsProcessor } from './processors/ddcBucketsProcessor'
import { In } from 'typeorm'
import { assertNotNull } from '@subsquid/util-internal'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
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
            logger.debug(`Received event ${event.name} at block ${block.height} (${block.hash})`)

            await Promise.all([
                cereBalancesProcessor.process(event, block),
                ddcBalancesProcessor.process(event, block),
                ddcClustersProcessor.process(event, block),
                ddcNodesProcessor.process(event, block),
                ddcBucketsProcessor.process(event, block),
            ])
        }
    }

    // retrieving state from processors
    const accountToCereBalance = cereBalancesProcessor.state
    const accountToDdcBalance = ddcBalancesProcessor.state
    const ddcClusters = ddcClustersProcessor.state
    const ddcNodes = ddcNodesProcessor.state
    const ddcBuckets = ddcBucketsProcessor.state

    // create missing accounts
    const accounts = new Map<string, Account>()

    async function createAccounts(source: string[]) {
        const existingAccounts = await ctx.store.findBy(Account, {
            id: In(source),
        })
        existingAccounts.forEach((account) => {
            accounts.set(account.id, account)
        })
        source.forEach((id) => {
            if (!accounts.has(id)) {
                accounts.set(
                    id,
                    new Account({
                        id: id,
                        cereFreeBalance: 0n,
                        ddcActiveBalance: 0n,
                    }),
                )
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
    accountToDdcBalance.forEach((balance, id) => {
        const account = assertNotNull(accounts.get(id))
        account.ddcActiveBalance = balance
        accounts.set(id, account)
    })
    // persist accounts
    await ctx.store.upsert([...accounts.values()])

    // map DDC Clusters to entities
    const ddcClusterEntities: DdcCluster[] = []
    ddcClusters.forEach((c) => {
        ddcClusterEntities.push(
            new DdcCluster({
                id: c.id,
                createdAtBlockHeight: c.createdAtBlockHeight,
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
            }),
        )
    })
    // persist DDC Clusters
    await ctx.store.upsert(ddcClusterEntities)

    // Find clusters for nodes and buckets mapping
    const clusterIdsToFind: Set<String> = new Set<String>()
    ddcNodes.addedToCluster.forEach((_, clusterId) => {
        clusterIdsToFind.add(clusterId)
    })
    ddcBuckets.forEach((bucket) => {
        clusterIdsToFind.add(bucket.clusterId)
    })

    const existingClusters = await ctx.store.findBy(DdcCluster, {
        id: In([...clusterIdsToFind.values()]),
    })
    const ddcClustersMap = new Map<string, DdcCluster>()
    existingClusters.forEach((c) => {
        ddcClustersMap.set(c.id, c)
    })

    // Find existing DDC Nodes
    const allModifiedDdcNodes = new Set<string>()
    ddcNodes.addedToCluster.forEach((nodes) => {
        nodes.forEach((node) => {
            allModifiedDdcNodes.add(node)
        })
    })
    ddcNodes.removedFromCluster.forEach((nodes) => {
        nodes.forEach((node) => {
            allModifiedDdcNodes.add(node)
        })
    })
    ddcNodes.updatedNodes.forEach((_, nodeId) => {
        allModifiedDdcNodes.add(nodeId)
    })
    ddcNodes.removedNodes.forEach((nodeId) => {
        allModifiedDdcNodes.add(nodeId)
    })
    const existingDdcNodes = await ctx.store.findBy(DdcNode, {
        id: In([...allModifiedDdcNodes.values()]),
    })
    const ddcNodesMap = new Map<string, DdcNode>()
    existingDdcNodes.forEach((node) => {
        ddcNodesMap.set(node.id, node)
    })
    // update DDC nodes
    ddcNodes.updatedNodes.forEach((node) => {
        const nodeEntity =
            ddcNodesMap.get(node.id) ??
            new DdcNode({
                id: node.id,
                createdAtBlockHeight: node.createdAtBlockHeight,
                providerId: accounts.get(node.providerId),
            })
        nodeEntity.host = node.host
        nodeEntity.domain = node.domain
        nodeEntity.ssl = node.ssl
        nodeEntity.httpPort = node.httpPort
        nodeEntity.grpcPort = node.grpcPort
        nodeEntity.p2pPort = node.p2pPort
        nodeEntity.mode = node.mode
        ddcNodesMap.set(node.id, nodeEntity)
    })
    // add to cluster
    ddcNodes.addedToCluster.forEach((nodes, clusterId) => {
        nodes.forEach((node) => {
            const nodeEntity = ddcNodesMap.get(node)
            if (nodeEntity) {
                nodeEntity.clusterId = ddcClustersMap.get(clusterId)
            }
        })
    })
    // remove from cluster
    ddcNodes.removedFromCluster.forEach((nodes) => {
        nodes.forEach((node) => {
            const nodeEntity = ddcNodesMap.get(node)
            if (nodeEntity) {
                nodeEntity.clusterId = null
            }
        })
    })
    // persist DDC Nodes
    await ctx.store.upsert([...ddcNodesMap.values()])
    // remove deleted nodes
    const ddcNodesToRemove: DdcNode[] = []
    ddcNodes.removedNodes.forEach((nodeId) => {
        const toRemove = ddcNodesMap.get(nodeId)
        if (toRemove) {
            ddcNodesToRemove.push(toRemove)
        }
    })
    await ctx.store.remove(ddcNodesToRemove)

    const ddcBucketEntities: DdcBucket[] = []
    const ddcBucketUsageEntities: DdcBucketUsage[] = []
    ddcBuckets.forEach((bucketInfo) => {
        const cluster = ddcClustersMap.get(bucketInfo.clusterId)
        if (!cluster) {
            logger.warn(
                `No DDC cluster with id ${bucketInfo.clusterId} found. Skipping bucket ${bucketInfo.bucketId} for persistence`,
            )
            return
        }
        const bucketEntity = new DdcBucket({
            id: bucketInfo.bucketId.toString(),
            createdAtBlockHeight: bucketInfo.createdAtBlockHeight,
            createdAtBlockTimestamp: bucketInfo.createdAtBlockTimestamp,
            ownerId: accounts.get(bucketInfo.ownerId),
            clusterId: cluster,
            isPublic: bucketInfo.isPublic,
            isRemoved: bucketInfo.isRemoved,
        })
        ddcBucketEntities.push(bucketEntity)

        if (!bucketInfo.usage) {
            return
        }
        ddcBucketUsageEntities.push(
            new DdcBucketUsage({
                id: `${bucketInfo.usage.block}-${bucketInfo.bucketId}`,
                blockHeight: bucketInfo.usage.block,
                blockTimestamp: bucketInfo.usage.timestamp,
                bucketId: bucketEntity,
                transferredBytes: bucketInfo.usage.transferredBytes,
                storedBytes: bucketInfo.usage.storedBytes,
                numberOfPuts: bucketInfo.usage.numberOfPuts,
                numberOfGets: bucketInfo.usage.numberOfGets,
            })
        )
    })

    // persist DDC Buckets
    await ctx.store.upsert(ddcBucketEntities)
    await ctx.store.insert(ddcBucketUsageEntities)

    // Update customer's buckets usage.
    const ddcCustomerUsageEntities = new Map<[number, string], DdcCustomerUsage>()
    for (let bucketUsage of ddcBucketUsageEntities) {
        const key: [number, string] = [bucketUsage.blockHeight, bucketUsage.bucketId.ownerId.id]

        let accountUsage = ddcCustomerUsageEntities.get(key)
        if (!accountUsage) {
            accountUsage = new DdcCustomerUsage({
                id: `${bucketUsage.blockHeight}-${bucketUsage.bucketId.ownerId.id}`,
                blockHeight: bucketUsage.blockHeight,
                blockTimestamp: bucketUsage.blockTimestamp,
                accountId: bucketUsage.bucketId.ownerId,
                transferredBytes: bucketUsage.transferredBytes,
                storedBytes: bucketUsage.storedBytes,
                numberOfPuts: bucketUsage.numberOfPuts,
                numberOfGets: bucketUsage.numberOfGets,
            })
            ddcCustomerUsageEntities.set(key, accountUsage)
            return
        }

        accountUsage.transferredBytes += bucketUsage.transferredBytes
        accountUsage.storedBytes += bucketUsage.storedBytes
        accountUsage.numberOfPuts += bucketUsage.numberOfPuts
        accountUsage.numberOfGets += bucketUsage.numberOfGets
    }
    await ctx.store.insert(Array.from(ddcCustomerUsageEntities.values()))
})
