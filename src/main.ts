import 'dotenv/config'
import { processor } from './processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import {
    Account,
    DdcCustomerUsage,
    DdcBucket,
    DdcBucketUsage,
    DdcCluster,
    DdcNode,
    DdcCustomerDeposit,
    DdcCustomerCharge,
    DdcCustomerBalance,
    DdcClusterStatus
} from './model'
import { CereBalancesProcessor } from './processors/cereBalancesProcessor'
import { DdcBalancesProcessor } from './processors/ddcBalancesProcessor'
import { DdcClustersProcessor } from './processors/ddcClustersProcessor'
import { DdcNodesProcessor } from './processors/ddcNodesProcessor'
import { DdcBucketsProcessor } from './processors/ddcBucketsProcessor'
import { In } from 'typeorm'
import { assertNotNull } from '@subsquid/util-internal'
import {DdcCustomerDepositsProcessor} from "./processors/ddcCustomerDepositsProcessor";
import {DdcCustomerChargesProcessor} from "./processors/ddcCustomerChargesProcessor";

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    const logger = ctx.log

    // set up processors
    const cereBalancesProcessor = new CereBalancesProcessor()
    const ddcBalancesProcessor = new DdcBalancesProcessor()
    const ddcClustersProcessor = new DdcClustersProcessor()
    const ddcNodesProcessor = new DdcNodesProcessor()
    const ddcBucketsProcessor = new DdcBucketsProcessor()
    const ddcCustomerDepositsProcessor = new DdcCustomerDepositsProcessor()
    const ddcCustomerChargesProcessor = new DdcCustomerChargesProcessor()

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
                ddcCustomerDepositsProcessor.process(event, block),
                ddcCustomerChargesProcessor.process(event, block),
            ])
        }
    }

    // retrieving state from processors
    const accountToCereBalance = cereBalancesProcessor.state
    const accountToDdcBalance = ddcBalancesProcessor.state
    const ddcClusters = ddcClustersProcessor.state
    const ddcNodes = ddcNodesProcessor.state
    const ddcBuckets = ddcBucketsProcessor.state
    const ddcCustomerDeposits = ddcCustomerDepositsProcessor.state
    const ddcCustomerCharges = ddcCustomerChargesProcessor.state

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
    
    // Extract account IDs from DDC balances
    const ddcBalanceAccountIds = [...accountToDdcBalance.values()].map(balance => balance.accountId)
    await createAccounts(ddcBalanceAccountIds)

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
    
    // Update DDC active balance for backward compatibility (use first balance found)
    const ddcActiveBalances = new Map<string, bigint>()
    accountToDdcBalance.forEach((balance) => {
        if (!ddcActiveBalances.has(balance.accountId)) {
            ddcActiveBalances.set(balance.accountId, balance.activeBalance)
        }
    })
    ddcActiveBalances.forEach((balance, accountId) => {
        const account = assertNotNull(accounts.get(accountId))
        account.ddcActiveBalance = balance
        accounts.set(accountId, account)
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

    // Find clusters for deposits, charges and balances mapping
    const clusterIdsToFind: Set<String> = new Set<String>()
    ddcNodes.addedToCluster.forEach((_, clusterId) => {
        clusterIdsToFind.add(clusterId)
    })
    ddcBuckets.forEach((bucket) => {
        clusterIdsToFind.add(bucket.clusterId)
    })
    
    // Add cluster IDs from deposits and charges
    ddcCustomerDeposits.forEach((deposit) => {
        if (deposit.clusterId) {
            clusterIdsToFind.add(deposit.clusterId)
        }
    })
    ddcCustomerCharges.forEach((charge) => {
        if (charge.clusterId) {
            clusterIdsToFind.add(charge.clusterId)
        }
    })
    accountToDdcBalance.forEach((balance) => {
        if (balance.clusterId) {
            clusterIdsToFind.add(balance.clusterId)
        }
    })

    // Create default clusters for legacy events if they don't exist
    const DEFAULT_CLUSTERS = {
        DEVNET: '0x7f82864e4f097e63d04cc279e4d8d2eb45a42ffa',
        TESTNET: '0x825c4b2352850de9986d9d28568db6f0c023a1e3', 
        QANET: '0xb1242a78440e20f50841ffa399fd9d607a2e93b8',
        MAINNET: '0x0059f5ada35eee46802d80750d5ca4a490640511'
    }

    const existingClusters = await ctx.store.findBy(DdcCluster, {
        id: In([...clusterIdsToFind.values()]),
    })
    const ddcClustersMap = new Map<string, DdcCluster>()
    existingClusters.forEach((c) => {
        ddcClustersMap.set(c.id, c)
    })

    // Create missing default clusters (for legacy events)
    const clustersToCreate: DdcCluster[] = []
    clusterIdsToFind.forEach(clusterId => {
        if (!ddcClustersMap.has(clusterId as string)) {
            // This is a default cluster for legacy events
            if (Object.values(DEFAULT_CLUSTERS).includes(clusterId as string)) {
                const defaultCluster = new DdcCluster({
                    id: clusterId as string,
                    createdAtBlockHeight: 0, // Default for legacy
                    managerId: undefined, // Will be set later or remain undefined for legacy
                    treasuryShare: 10n,
                    validatorsShare: 20n,
                    clusterReserveShare: 5n,
                    storageBondSize: 1000000000000n,
                    storageChillDelay: 100,
                    storageUnbondingDelay: 200,
                    unitPerMbStored: 1000000n,
                    unitPerMbStreamed: 2000000n,
                    unitPerPutRequest: 100000n,
                    unitPerGetRequest: 50000n,
                    erasureCodingRequired: 2,
                    erasureCodingTotal: 3,
                    replicationTotal: 3,
                    status: DdcClusterStatus.Activated
                })
                clustersToCreate.push(defaultCluster)
                ddcClustersMap.set(clusterId as string, defaultCluster)
                logger.info(`Created default cluster for legacy events: ${clusterId}`)
            }
        }
    })

    // Persist default clusters
    if (clustersToCreate.length > 0) {
        await ctx.store.upsert(clustersToCreate)
    }

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
            continue
        }

        accountUsage.transferredBytes += bucketUsage.transferredBytes
        accountUsage.storedBytes += bucketUsage.storedBytes
        accountUsage.numberOfPuts += bucketUsage.numberOfPuts
        accountUsage.numberOfGets += bucketUsage.numberOfGets
    }
    await ctx.store.insert(Array.from(ddcCustomerUsageEntities.values()))

    const ddcCustomerDepositEntities: DdcCustomerDeposit[] = []
    ddcCustomerDeposits.forEach((deposit, key) => {
        const keyParts = key.split('-')
        const accountId = keyParts[1] // blockHeight-accountId or blockHeight-accountId-clusterId
        ddcCustomerDepositEntities.push(new DdcCustomerDeposit({
            id: key,
            accountId: accounts.get(accountId),
            clusterId: deposit.clusterId ? ddcClustersMap.get(deposit.clusterId) : undefined,
            blockTimestamp: deposit.blockTimestamp,
            amount: deposit.amount
        }))
    })
    await ctx.store.insert(ddcCustomerDepositEntities)

    const ddcCustomerChargeEntities: DdcCustomerCharge[] = []
    ddcCustomerCharges.forEach((charge, key) => {
        const keyParts = key.split('-')
        const accountId = keyParts[1] // blockHeight-accountId or blockHeight-accountId-clusterId
        ddcCustomerChargeEntities.push(new DdcCustomerCharge({
            id: key,
            accountId: accounts.get(accountId),
            clusterId: charge.clusterId ? ddcClustersMap.get(charge.clusterId) : undefined,
            blockTimestamp: charge.blockTimestamp,
            amount: charge.amount
        }))
    })
    await ctx.store.insert(ddcCustomerChargeEntities)

    const ddcCustomerBalanceEntities: DdcCustomerBalance[] = []
    accountToDdcBalance.forEach((balance, key) => {
        const cluster = balance.clusterId ? ddcClustersMap.get(balance.clusterId) : undefined
        ddcCustomerBalanceEntities.push(new DdcCustomerBalance({
            id: key,
            accountId: accounts.get(balance.accountId),
            clusterId: cluster,
            activeBalance: balance.activeBalance
        }))
    })
    await ctx.store.upsert(ddcCustomerBalanceEntities)
})
