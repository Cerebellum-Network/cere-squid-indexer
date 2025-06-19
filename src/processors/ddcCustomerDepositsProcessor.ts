import {Event} from '@subsquid/substrate-processor'
import {events} from '../types'
import {logUnsupportedEventVersion, toCereAddress, getClusterIdFromEventOrDefault, getDefaultClusterId, logLegacyEventClusterIdWarning} from '../utils'
import {Block} from '../processor'
import {BaseProcessor} from './processor'
import {assertNotNull} from "@subsquid/util-internal";

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
                    const clusterId = getDefaultClusterId() // Legacy events don't have clusterId
                    
                    // Log warning when using default cluster ID
                    logLegacyEventClusterIdWarning(block.height, 'deposited')
                    
                    const key = `${block.height}-${toCereAddress(accountId)}-${clusterId}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: clusterId
                    })
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48800.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
                    const clusterId = getDefaultClusterId() // Legacy events don't have clusterId
                    
                    // Log warning when using default cluster ID
                    logLegacyEventClusterIdWarning(block.height, 'deposited')
                    
                    const key = `${block.height}-${toCereAddress(accountId)}-${clusterId}`
                    await this._state.set(key, {
                        blockTimestamp: blockTimestamp,
                        blockHeight: block.height,
                        amount: amount,
                        clusterId: clusterId
                    })
                } else if (events.ddcCustomers.deposited.v73013.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v73013.decode(event)
                    const accountId = decoded.ownerId
                    const amount = decoded.amount
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
            case events.ddcCustomers.depositFor?.name: {
                if (events.ddcCustomers.depositFor.v73013.is(event)) {
                    const decoded = events.ddcCustomers.depositFor.v73013.decode(event)
                    const targetId = decoded.targetId
                    const amount = decoded.amount
                    const clusterId = getClusterIdFromEventOrDefault(decoded)
                    
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
