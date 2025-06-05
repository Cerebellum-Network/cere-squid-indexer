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

export interface DdcCustomerDeposit {
    blockHeight?: number
    blockTimestamp?: Date

    amount: bigint
    clusterId?: string
}

type State = Map<string, DdcCustomerDeposit>

export class DdcCustomerDepositsProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, DdcCustomerDeposit>())
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48013.decode(event)
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
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48800.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
                    // Use default cluster for old events
                    const key = `${block.height}-${toCereAddress(accountId)}-${DEFAULT_CLUSTER_ID}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: DEFAULT_CLUSTER_ID
                    })
                } else if (events.ddcCustomers.deposited.v73013.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v73013.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
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
            case events.ddcCustomers.depositFor?.name: {
                if (events.ddcCustomers.depositFor.v73013.is(event)) {
                    const decoded = events.ddcCustomers.depositFor.v73013.decode(event)
                    const targetId = decoded.targetId
                    const amount = decoded.amount
                    const clusterId = decoded.clusterId
                    const key = `${block.height}-${toCereAddress(targetId)}-${clusterId}`
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
