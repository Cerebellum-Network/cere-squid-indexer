import {Event} from '@subsquid/substrate-processor'
import {events} from '../types'
import {logUnsupportedEventVersion, toCereAddress} from '../utils'
import {Block} from '../processor'
import {BaseProcessor} from './processor'
import {assertNotNull} from "@subsquid/util-internal";

export interface DdcCustomerDeposit {
    blockHeight?: number
    blockTimestamp?: Date

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
                console.log("Got customer deposited event")
                if (events.ddcCustomers.deposited.v48013.is(event)) {
                    console.log("Event version v48013")
                    const decoded = events.ddcCustomers.deposited.v48013.decode(event)
                    const accountId = decoded[0]
                    const amount = decoded[1]
                    await this._state.set(toCereAddress(accountId), {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount
                    })
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    console.log("Event version v48800")
                    const decoded = events.ddcCustomers.deposited.v48800.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
                    await this._state.set(toCereAddress(accountId), {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
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
