import { Event } from '@subsquid/substrate-processor'
import { events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'
import { Block } from '../processor'
import { BaseProcessor } from './processor'
import { assertNotNull } from '@subsquid/util-internal'

export interface DdcCustomerDeposit {
    blockHeight: number
    blockTimestamp: Date
    amount: bigint
    clusterId?: string
    // For DepositedFor events
    from?: string
    to?: string
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
                if (events.ddcCustomers.deposited.v54114.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v54114.decode(event)
                    const key = `${decoded.clusterId}-${decoded.ownerId}`
                    this._state.set(key, {
                        blockHeight: block.height,
                        blockTimestamp: blockTimestamp,
                        amount: decoded.amount,
                        clusterId: decoded.clusterId,
                    })
                } else if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48013.decode(event)
                    const accountId = decoded[0]
                    const amount = decoded[1]
                    this._state.set(accountId, {
                        blockHeight: block.height,
                        blockTimestamp: blockTimestamp,
                        amount: amount,
                    })
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48800.decode(event)
                    this._state.set(decoded.ownerId, {
                        blockHeight: block.height,
                        blockTimestamp: blockTimestamp,
                        amount: decoded.amount,
                    })
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.depositedFor.name: {
                if (events.ddcCustomers.depositedFor.v54114.is(event)) {
                    const decoded = events.ddcCustomers.depositedFor.v54114.decode(event)
                    const key = `${decoded.clusterId}-${decoded.to}-depositedFor`
                    this._state.set(key, {
                        blockHeight: block.height,
                        blockTimestamp: blockTimestamp,
                        amount: decoded.amount,
                        clusterId: decoded.clusterId,
                        from: decoded.from,
                        to: decoded.to,
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
