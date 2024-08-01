import { assertNotNull } from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'

import { events } from './types'

export const processor = new SubstrateBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/substrate-indexing/supported-networks/
    // .setGateway('https://v2.archive.subsquid.io/network/kusama')
    // Chain RPC endpoint is required on Substrate for metadata and real-time updates
    .setRpcEndpoint({
        // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
        // https://docs.subsquid.io/deploy-squid/env-variables/
        url: assertNotNull(process.env.RPC_CERE_HTTP, 'No RPC endpoint supplied'),
        // More RPC connection options at https://docs.subsquid.io/substrate-indexing/setup/general/#set-data-source
        rateLimit: parseInt(process.env.SQD_RATE_LIMIT || "500"),
        capacity: parseInt(process.env.SQD_CAPACITY || "10"),
        //maxBatchCallSize: 1000,
    })
    .setBlockRange({ from: parseInt(process.env.SQD_FIRST_BLOCK || "1") })
    .addEvent({
        name: [
            events.balances.transfer.name,
            events.ddcCustomers.bucketCreated.name,
            events.ddcCustomers.bucketUpdated.name,
            events.ddcCustomers.bucketRemoved.name,
            events.ddcCustomers.deposited.name,
            events.ddcCustomers.withdrawn.name,
            events.ddcCustomers.charged.name,
        ],
        extrinsic: true
    })
    .setFields({
        event: {
            args: true
        },
        extrinsic: {
            hash: true,
            fee: true
        },
        block: {
            timestamp: true
        }
    })

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
