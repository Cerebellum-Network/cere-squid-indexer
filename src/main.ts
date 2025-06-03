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
    DdcCustomerBalance
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

    // Create missing accounts - now include accounts from DDC balances
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
                    }),
                )
            }
        })
    }

    await createAccounts([...accountToCereBalance.keys()])
    
    // Extract account IDs from DDC balance keys (which may include cluster info)
    const ddcBalanceAccountIds = [...accountToDdcBalance.keys()].map(key => {
        // Key format can be "accountId" or "accountId-clusterId"
        return key.split('-')[0] // Always take the first part as account ID
    })
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
    
    // persist accounts first
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

    // Find clusters for nodes, buckets, deposits, charges and balances mapping
    const clusterIdsToFind: Set<String> = new Set<String>()
    ddcNodes.addedToCluster.forEach((_, clusterId) => {
        clusterIdsToFind.add(clusterId)
    })
    ddcBuckets.forEach((bucket) => {
        clusterIdsToFind.add(bucket.clusterId)
    })
    // Add cluster IDs from deposits and charges
    ddcCustomerDeposits.forEach((deposit) => {
        if (deposit.clusterId !== '0x0000000000000000000000000000000000000000') {
            clusterIdsToFind.add(deposit.clusterId)
        }
    })
    ddcCustomerCharges.forEach((charge) => {
        if (charge.clusterId !== '0x0000000000000000000000000000000000000000') {
            clusterIdsToFind.add(charge.clusterId)
        }
    })
    // Add cluster IDs from DDC balances
    accountToDdcBalance.forEach((_, key) => {
        const keyParts = key.split('-')
        if (keyParts.length > 1) {
            // Has cluster ID in the key
            const clusterId = keyParts.slice(1).join('-') // Rejoin in case cluster ID has dashes
            if (clusterId !== '0x0000000000000000000000000000000000000000') {
                clusterIdsToFind.add(clusterId)
            }
        }
    })

    const existingClusters = await ctx.store.findBy(DdcCluster, {
        id: In([...clusterIdsToFind.values()]),
    })
    const ddcClustersMap = new Map<string, DdcCluster>()
    existingClusters.forEach((c) => {
        ddcClustersMap.set(c.id, c)
    })
    
    // Add default cluster if needed for legacy events
    if (!ddcClustersMap.has('0x0000000000000000000000000000000000000000')) {
        const defaultCluster = new DdcCluster({
            id: '0x0000000000000000000000000000000000000000',
            createdAtBlockHeight: 0,
            managerId: accounts.get('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM') || accounts.values().next().value, // Use first account as manager for default cluster
            treasuryShare: 0n,
            validatorsShare: 0n,
            clusterReserveShare: 0n,
            storageBondSize: 0n,
            storageChillDelay: 0,
            storageUnbondingDelay: 0,
            unitPerMbStored: 0n,
            unitPerMbStreamed: 0n,
            unitPerPutRequest: 0n,
            unitPerGetRequest: 0n,
            erasureCodingRequired: 0,
            erasureCodingTotal: 0,
            replicationTotal: 0,
            status: 'Activated' as any
        })
        ddcClustersMap.set('0x0000000000000000000000000000000000000000', defaultCluster)
        await ctx.store.upsert([defaultCluster])
    }

    // Create DDC Customer Balance entities
    const ddcCustomerBalanceEntities: DdcCustomerBalance[] = []
    accountToDdcBalance.forEach((balance, key) => {
        const keyParts = key.split('-')
        let accountId: string
        let clusterId: string
        
        if (keyParts.length === 1) {
            // Legacy format: just accountId
            accountId = keyParts[0]
            clusterId = '0x0000000000000000000000000000000000000000'
        } else {
            // New format: accountId-clusterId
            accountId = keyParts[0]
            clusterId = keyParts.slice(1).join('-') // Rejoin in case cluster ID has dashes
        }
        
        const cluster = ddcClustersMap.get(clusterId)
        if (!cluster) {
            logger.warn(`No DDC cluster with id ${clusterId} found. Skipping balance for persistence`)
            return
        }
        
        ddcCustomerBalanceEntities.push(new DdcCustomerBalance({
            id: key,
            accountId: accounts.get(accountId),
            clusterId: cluster,
            activeBalance: balance
        }))
    })
    await ctx.store.upsert(ddcCustomerBalanceEntities)

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
    ddcCustomerDeposits.forEach((deposit, depositKey) => {
        // Extract account ID from the key (format: accountId-clusterId-blockHeight or accountId-blockHeight)
        const keyParts = depositKey.split('-')
        let accountId: string
        if (keyParts.length === 3) {
            // New format: accountId-clusterId-blockHeight
            accountId = keyParts[0]
        } else {
            // Legacy format: accountId-blockHeight
            accountId = keyParts.slice(0, -1).join('-') // Join all parts except the last one (blockHeight)
        }
        
        const cluster = ddcClustersMap.get(deposit.clusterId)
        if (!cluster) {
            logger.warn(`No DDC cluster with id ${deposit.clusterId} found. Skipping deposit for persistence`)
            return
        }
        
        ddcCustomerDepositEntities.push(new DdcCustomerDeposit({
            id: depositKey,
            accountId: accounts.get(accountId),
            clusterId: cluster,
            blockTimestamp: deposit.blockTimestamp,
            amount: deposit.amount
        }))
    })
    await ctx.store.insert(ddcCustomerDepositEntities)

    const ddcCustomerChargeEntities: DdcCustomerCharge[] = []
    ddcCustomerCharges.forEach((charge, chargeKey) => {
        // Extract account ID from the key (format: accountId-clusterId-blockHeight or accountId-blockHeight)
        const keyParts = chargeKey.split('-')
        let accountId: string
        if (keyParts.length === 3) {
            // New format: accountId-clusterId-blockHeight
            accountId = keyParts[0]
        } else {
            // Legacy format: accountId-blockHeight
            accountId = keyParts.slice(0, -1).join('-') // Join all parts except the last one (blockHeight)
        }
        
        const cluster = ddcClustersMap.get(charge.clusterId)
        if (!cluster) {
            logger.warn(`No DDC cluster with id ${charge.clusterId} found. Skipping charge for persistence`)
            return
        }
        
        ddcCustomerChargeEntities.push(new DdcCustomerCharge({
            id: chargeKey,
            accountId: accounts.get(accountId),
            clusterId: cluster,
            blockTimestamp: charge.blockTimestamp,
            amount: charge.amount,
            expectedToCharge: charge.expectedToCharge
        }))
    })
    await ctx.store.insert(ddcCustomerChargeEntities)
})
