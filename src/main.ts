import { In } from 'typeorm'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { assertNotNull } from '@subsquid/util-internal'
import { processor } from './processor'
import {
    Account,
    DdcBillingReportFinalized,
    DdcBucket,
    DdcBucketUsage,
    DdcCluster,
    DdcClusterReserveFeesCollected,
    DdcCustomerCharge,
    DdcCustomerDeposit,
    DdcCustomerUsage,
    DdcEraValidationRootsPosted,
    DdcNode,
    DdcRewarded,
    DdcTokenUtilityDashboardView,
    DdcTreasuryFeesCollected,
    DdcValidatorRewarded,
} from './model'
import { CereBalancesProcessor } from './processors/cereBalancesProcessor'
import { DdcBalancesProcessor } from './processors/ddcBalancesProcessor'
import { DdcBucketsProcessor } from './processors/ddcBucketsProcessor'
import { DdcClustersProcessor } from './processors/ddcClustersProcessor'
import { DdcClusterReserveFeesCollectedProcessor } from './processors/ddcClusterReserveFeesCollectedProcessor'
import { DdcCustomerChargesProcessor } from './processors/ddcCustomerChargesProcessor'
import { DdcCustomerDepositsProcessor } from './processors/ddcCustomerDepositsProcessor'
import { DdcNodesProcessor } from './processors/ddcNodesProcessor'
import { DdcBillingReportFinalizedProcessor } from './processors/ddcBillingReportFinalizedProcessor'
import { DdcTreasuryFeesCollectedProcessor } from './processors/ddcTreasuryFeesCollectedProcessor'
import { DdcEraValidationRootsPostedProcessor } from './processors/ddcEraValidationRootsPostedProcessor'
import { DdcRewardedProcessor } from './processors/ddcRewardedProcessor'
import { DdcValidatorRewardedProcessor } from './processors/ddcValidatorRewardedProcessor'
import { createDefaultMap } from './utils/defaultMap'

export const getDefaultDdcTokenUtilityDashboardView = () => ({
    cluserId: '',
    eraId: 0,
    startTime: null as Date | null,
    endTime: null as Date | null,
    dataStored: BigInt(0),
    dataStreamed: BigInt(0),
    numberOfPuts: BigInt(0),
    numberOfGets: BigInt(0),
    nodesRewards: BigInt(0),
    validatorsRewards: BigInt(0),
    cmRewards: BigInt(0),
    treasuryRewards: BigInt(0),
    status: null,
})

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    const logger = ctx.log

    // set up processors
    // TODO: Solve TS problem with deriving state from the processor to avoid repeating vars
    const cereBalancesProcessor = new CereBalancesProcessor()
    const ddcBalancesProcessor = new DdcBalancesProcessor()
    const ddcClustersProcessor = new DdcClustersProcessor()
    const ddcNodesProcessor = new DdcNodesProcessor()
    const ddcBucketsProcessor = new DdcBucketsProcessor()
    const ddcCustomerDepositsProcessor = new DdcCustomerDepositsProcessor()
    const ddcCustomerChargesProcessor = new DdcCustomerChargesProcessor()
    const ddcClusterReserveFeesCollectedProcessor = new DdcClusterReserveFeesCollectedProcessor()
    const ddcBillingReportFinalizedProcessor = new DdcBillingReportFinalizedProcessor()
    const ddcTreasuryFeesCollectedProcessor = new DdcTreasuryFeesCollectedProcessor()
    const ddcEraValidationRootsPostedProcessor = new DdcEraValidationRootsPostedProcessor()
    const ddcRewardedProcessor = new DdcRewardedProcessor()
    const ddcValidatorRewardedProcessor = new DdcValidatorRewardedProcessor()

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
                ddcClusterReserveFeesCollectedProcessor.process(event, block),
                ddcBillingReportFinalizedProcessor.process(event, block),
                ddcTreasuryFeesCollectedProcessor.process(event, block),
                ddcEraValidationRootsPostedProcessor.process(event, block),
                ddcRewardedProcessor.process(event, block),
                ddcValidatorRewardedProcessor.process(event, block),
            ])
        }
    }

    const accountToCereBalance = cereBalancesProcessor.state
    const accountToDdcBalance = ddcBalancesProcessor.state
    const ddcClusters = ddcClustersProcessor.state
    const ddcNodes = ddcNodesProcessor.state
    const ddcBuckets = ddcBucketsProcessor.state
    const ddcCustomerDeposits = ddcCustomerDepositsProcessor.state
    const ddcCustomerCharges = ddcCustomerChargesProcessor.state
    const ddcRewarded = ddcRewardedProcessor.state
    const ddcValidatorRewarded = ddcValidatorRewardedProcessor.state
    const ddcClusterReserveFeesCollected = ddcClusterReserveFeesCollectedProcessor.state
    const ddcTreasuryFeesCollected = ddcTreasuryFeesCollectedProcessor.state
    const ddcEraValidationRootsPosted = ddcEraValidationRootsPostedProcessor.state
    const ddcBillingReportFinalized = ddcBillingReportFinalizedProcessor.state

    const tokenUtilityDashoboardAggregate = createDefaultMap<
        string,
        ReturnType<typeof getDefaultDdcTokenUtilityDashboardView>
    >(getDefaultDdcTokenUtilityDashboardView)

    const getKey = (entity: any) => `${entity.clusterId}-${entity.eraId}`

    const aggregateByEntity = (entity: any) => tokenUtilityDashoboardAggregate.getOrCreate(getKey(entity))

    const ddcRewardedEntities = ddcRewarded.map((entity) => {
        const aggregate = aggregateByEntity(entity)
        aggregate.nodesRewards += entity.rewarded ?? 0n

        return new DdcRewarded({ ...entity })
    })

    const ddcValidatorRewardedEntities = ddcValidatorRewarded.map((entity) => {
        const aggregate = aggregateByEntity(entity)
        aggregate.validatorsRewards += entity.amount

        return new DdcValidatorRewarded({ ...entity })
    })

    const ddcClusterReserveFeesCollectedEntities = ddcClusterReserveFeesCollected.map((entity) => {
        const aggregate = aggregateByEntity(entity)
        aggregate.cmRewards += entity.amount

        return new DdcClusterReserveFeesCollected({ ...entity })
    })

    const ddcTreasuryFeesCollectedEntities = ddcTreasuryFeesCollected.map((entity) => {
        const aggregate = aggregateByEntity(entity)
        aggregate.treasuryRewards += entity.amount

        return new DdcTreasuryFeesCollected({ ...entity })
    })

    const ddcEraValidationRootsPostedEntities = ddcEraValidationRootsPosted.map((entity) => {
        const aggregate = aggregateByEntity(entity)
        if (aggregate.startTime === null || aggregate.startTime > entity.blockTimestamp) {
            aggregate.startTime = entity.blockTimestamp
        }

        return new DdcEraValidationRootsPosted({ ...entity })
    })

    const ddcBillingReportFinalizedEntities = ddcBillingReportFinalized.map((entity) => {
        const aggregate = aggregateByEntity(entity)
        if (aggregate.endTime === null || aggregate.endTime < entity.blockTimestamp) {
            aggregate.endTime = entity.blockTimestamp
        }

        return new DdcBillingReportFinalized({ ...entity })
    })

    await ctx.store.insert(ddcRewardedEntities)
    await ctx.store.insert(ddcValidatorRewardedEntities)
    await ctx.store.insert(ddcClusterReserveFeesCollectedEntities)
    await ctx.store.insert(ddcTreasuryFeesCollectedEntities)
    await ctx.store.insert(ddcEraValidationRootsPostedEntities)
    await ctx.store.insert(ddcBillingReportFinalizedEntities)

    const existingTokenUtilityDashboardEntities = await ctx.store.findBy(DdcTokenUtilityDashboardView, {
        id: In([...tokenUtilityDashoboardAggregate.keys()]),
    })

    const updatedTokenUtilityDashboardEntities = existingTokenUtilityDashboardEntities.map((entity) => {
        const aggregate = tokenUtilityDashoboardAggregate.get(entity.id)
        if (aggregate) {
            entity.startTime = aggregate.startTime ?? entity.startTime
            entity.endTime = aggregate.endTime ?? entity.endTime
            entity.dataStored += aggregate.dataStored
            entity.dataStreamed += aggregate.dataStreamed
            entity.numberOfPuts += aggregate.numberOfPuts
            entity.numberOfGets += aggregate.numberOfGets
            entity.nodesRewards += aggregate.nodesRewards
            entity.validatorsRewards += aggregate.validatorsRewards
            entity.cmRewards += aggregate.cmRewards
            entity.treasuryRewards += aggregate.treasuryRewards
            entity.status = aggregate.status
        }

        return entity
    })

    const newTokenUtilityDashboardEntities = [...tokenUtilityDashoboardAggregate.entries()]
        .filter(([id]) => !existingTokenUtilityDashboardEntities.some((entity) => entity.id === id))
        .map(([id, aggregate]) => {
            const [clusterId, eraId] = id.split('-')

            return new DdcTokenUtilityDashboardView({
                id,
                clusterId,
                eraId: parseInt(eraId),
                startTime: aggregate.startTime,
                endTime: aggregate.endTime,
                dataStored: aggregate.dataStored,
                dataStreamed: aggregate.dataStreamed,
                numberOfPuts: aggregate.numberOfPuts,
                numberOfGets: aggregate.numberOfGets,
                nodesRewards: aggregate.nodesRewards,
                validatorsRewards: aggregate.validatorsRewards,
                cmRewards: aggregate.cmRewards,
                treasuryRewards: aggregate.treasuryRewards,
                status: aggregate.status,
            })
        })

    await ctx.store.upsert([...updatedTokenUtilityDashboardEntities, ...newTokenUtilityDashboardEntities])

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
            }),
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
    ddcCustomerDeposits.forEach((deposit, accountId) => {
        ddcCustomerDepositEntities.push(
            new DdcCustomerDeposit({
                id: `${deposit.blockHeight}-${accountId}`,
                accountId: accounts.get(accountId),
                blockTimestamp: deposit.blockTimestamp,
                amount: deposit.amount,
            }),
        )
    })
    await ctx.store.insert(ddcCustomerDepositEntities)

    const ddcCustomerChargeEntities: DdcCustomerCharge[] = []
    ddcCustomerCharges.forEach((charge, accountId) => {
        ddcCustomerChargeEntities.push(new DdcCustomerCharge({
            id: `${charge.blockHeight}-${accountId}`,
            accountId: accounts.get(accountId),
            blockTimestamp: charge.blockTimestamp,
            amount: charge.amount
        }))
    })
    await ctx.store.insert(ddcCustomerChargeEntities)
})
