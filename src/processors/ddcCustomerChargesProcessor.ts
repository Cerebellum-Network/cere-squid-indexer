import {Event} from '@subsquid/substrate-processor'
import {events} from '../types'
import {logUnsupportedEventVersion, toCereAddress, getClusterIdFromEventOrDefault, getDefaultClusterId, logLegacyEventClusterIdWarning} from '../utils'
import {Block} from '../processor'
import {BaseProcessor} from './processor'
import {assertNotNull} from "@subsquid/util-internal";

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
                    const clusterId = getDefaultClusterId() // Legacy events don't have clusterId
                    
                    // Log warning when using default cluster ID
                    logLegacyEventClusterIdWarning(block.height, 'charged')
                    
                    const key = `${block.height}-${toCereAddress(accountId)}-${clusterId}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: clusterId
                    })
                } else if (events.ddcCustomers.charged.v48800.is(event)) {
                    const decoded = events.ddcCustomers.charged.v48800.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.charged  // v48800 has 'charged' field, not 'amount'
                    const clusterId = getDefaultClusterId() // Legacy events don't have clusterId
                    
                    // Log warning when using default cluster ID
                    logLegacyEventClusterIdWarning(block.height, 'charged')
                    
                    const key = `${block.height}-${toCereAddress(accountId)}-${clusterId}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: clusterId
                    })
                } else if (events.ddcCustomers.charged.v73013.is(event)) {
                    const decoded = events.ddcCustomers.charged.v73013.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.charged
                    const clusterId = getClusterIdFromEventOrDefault(decoded)
                    
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
