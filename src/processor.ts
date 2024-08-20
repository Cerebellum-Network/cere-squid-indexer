import { assertNotNull } from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    Event as _Event,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
} from '@subsquid/substrate-processor'
import { events } from './types'

export const processor = new SubstrateBatchProcessor()
    .setRpcEndpoint({
        url: assertNotNull(process.env.RPC_CERE_HTTP, 'No RPC endpoint supplied'),
        rateLimit: parseInt(process.env.SQD_RATE_LIMIT || '500'),
        capacity: parseInt(process.env.SQD_CAPACITY || '10'),
    })
    .setBlockRange({
        from: parseInt(process.env.SQD_FIRST_BLOCK || '0'),
        to: parseInt(process.env.SQD_LAST_BLOCK || '0') || undefined,
    })
    .setTypesBundle(process.env.TYPES_BUNDLE || '../specs/cere-types-bundle.json')
    .addEvent({
        name: [
            events.balances.endowed.name,
            events.balances.dustLost.name,
            events.balances.transfer.name,
            events.balances.balanceSet.name,
            events.balances.deposit.name,
            events.balances.reserved.name,
            events.balances.unreserved.name,
            events.balances.reserveRepatriated.name,
            events.balances.withdraw.name,
            events.balances.slashed.name,
            events.balances.minted.name,
            events.balances.burned.name,
            events.balances.suspended.name,
            events.balances.restored.name,
            events.balances.upgraded.name,
            events.balances.issued.name,
            events.balances.rescinded.name,
            events.balances.locked.name,
            events.balances.unlocked.name,
            events.balances.frozen.name,
            events.balances.thawed.name,

            events.ddcClusters.clusterCreated.name,
            events.ddcClusters.clusterNodeAdded.name,
            events.ddcClusters.clusterNodeRemoved.name,
            events.ddcClusters.clusterParamsSet.name,
            events.ddcClusters.clusterGovParamsSet.name,
            events.ddcClusters.clusterProtocolParamsSet.name,
            events.ddcClusters.clusterActivated.name,
            events.ddcClusters.clusterBonded.name,
            events.ddcClusters.clusterUnbonded.name,
            events.ddcClusters.clusterNodeValidated.name,
            events.ddcClusters.clusterUnbonding.name,

            events.ddcCustomers.deposited.name,
            events.ddcCustomers.initiatDepositUnlock.name,
            events.ddcCustomers.withdrawn.name,
            events.ddcCustomers.charged.name,
            events.ddcCustomers.bucketCreated.name,
            events.ddcCustomers.initialDepositUnlock.name,
            events.ddcCustomers.bucketUpdated.name,
            events.ddcCustomers.bucketRemoved.name,
            events.ddcCustomers.bucketTotalNodesUsageUpdated.name,
            events.ddcCustomers.bucketTotalCustomersUsageUpdated.name,

            events.ddcNodes.nodeCreated.name,
            events.ddcNodes.nodeDeleted.name,
            events.ddcNodes.nodeParamsChanged.name,
        ],
        extrinsic: true,
    })
    .setFields({
        event: {
            args: true,
        },
        block: {
            timestamp: true,
        },
    })

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
