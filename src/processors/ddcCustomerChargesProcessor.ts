import {Event} from '@subsquid/substrate-processor'
import {events} from '../types'
import {logUnsupportedEventVersion, toCereAddress} from '../utils'
import {Block} from '../processor'
import {BaseProcessor} from './processor'
import {assertNotNull} from "@subsquid/util-internal";

// Default cluster IDs for different networks
const DEFAULT_CLUSTERS = {
    DEVNET: '0x7f82864e4f097e63d04cc279e4d8d2eb45a42ffa',
    TESTNET: '0x825c4b2352850de9986d9d28568db6f0c023a1e3', 
    QANET: '0xb1242a78440e20f50841ffa399fd9d607a2e93b8',
    MAINNET: '0x0059f5ada35eee46802d80750d5ca4a490640511'
}

// For now, using DEVNET as default - this should be configurable via environment
const DEFAULT_CLUSTER_ID = DEFAULT_CLUSTERS.DEVNET

export interface DdcCustomerCharge {
    blockHeight?: number
    blockTimestamp?: Date

    amount: bigint
    clusterId?: string
}

type State = Map<string, DdcCustomerCharge>

export class DdcCustomerChargesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, DdcCustomerCharge>())
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case events.ddcCustomers.charged.name: {
                if (events.ddcCustomers.charged.v48013.is(event)) {
                    // v48013 is just total amount charged (bigint), not per-account
                    // Skip this event type as it's not per-account charge
                    console.log(`Skipping v48013 charged event - total charge only: ${events.ddcCustomers.charged.v48013.decode(event)}`)
                } else if (events.ddcCustomers.charged.v48014.is(event)) {
                    const decoded = events.ddcCustomers.charged.v48014.decode(event)
                    const accountId = decoded[0]
                    const amount = decoded[1]
                    // Use default cluster for old events
                    const key = `${block.height}-${toCereAddress(accountId)}-${DEFAULT_CLUSTER_ID}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: DEFAULT_CLUSTER_ID
                    })
                } else if (events.ddcCustomers.charged.v48800.is(event)) {
                    const decoded = events.ddcCustomers.charged.v48800.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.charged  // v48800 has 'charged' field, not 'amount'
                    // Use default cluster for old events
                    const key = `${block.height}-${toCereAddress(accountId)}-${DEFAULT_CLUSTER_ID}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: DEFAULT_CLUSTER_ID
                    })
                } else if (events.ddcCustomers.charged.v73013.is(event)) {
                    const decoded = events.ddcCustomers.charged.v73013.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.charged
                    const clusterId = decoded.clusterId
                    const key = `${block.height}-${toCereAddress(accountId)}-${clusterId}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: clusterId
                    })
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            default: {
                break
            }
        }
    }
}
