import {Event} from '@subsquid/substrate-processor'
import {events} from '../types'
import {logUnsupportedEventVersion, toCereAddress} from '../utils'
import {Block} from '../processor'
import {BaseProcessor} from './processor'
import {assertNotNull} from "@subsquid/util-internal";

export interface DdcCustomerDeposit {
    blockHeight?: number
    blockTimestamp?: Date

    clusterId: string
    amount: bigint
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
                // Check newer version first
                if (events.ddcCustomers.deposited.v73047.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v73047.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId = decoded.clusterId
                    const amount = decoded.amount
                    // Use combination of accountId, clusterId and blockHeight for unique key
                    const key = `${toCereAddress(accountId)}-${clusterId}-${block.height}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        clusterId: clusterId,
                        amount: amount
                    })
                } else if (events.ddcCustomers.deposited.v63002.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v63002.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
                    // Use combination of accountId and blockHeight for unique key since there's no cluster
                    const key = `${toCereAddress(accountId)}-${block.height}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        clusterId: '0x0000000000000000000000000000000000000000', // Default cluster for legacy events
                        amount: amount
                    })
                } else if (events.ddcCustomers.deposited.v54100.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v54100.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
                    // Use combination of accountId and blockHeight for unique key since there's no cluster
                    const key = `${toCereAddress(accountId)}-${block.height}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        clusterId: '0x0000000000000000000000000000000000000000', // Default cluster for legacy events
                        amount: amount
                    })
                } else if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48013.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
                    // Use combination of accountId and blockHeight for unique key since there's no cluster
                    const key = `${toCereAddress(accountId)}-${block.height}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        clusterId: '0x0000000000000000000000000000000000000000', // Default cluster for legacy events
                        amount: amount
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
