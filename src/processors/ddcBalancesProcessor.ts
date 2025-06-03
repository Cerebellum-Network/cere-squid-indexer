import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { Block } from '../processor'
import { BaseProcessor } from './processor'

// Updated state to include cluster information
type State = Map<string, { clusterId?: string; balance: bigint }>

export class DdcBalancesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, { clusterId?: string; balance: bigint }>())
    }

    private async processDdcCustomersBalancesEvents(accountId: string, block: Block, clusterId?: string) {
        let accountInStorage

        // Try new cluster-based storage first
        if (clusterId && storage.ddcCustomers.clusterLedger.v54114.is(block)) {
            accountInStorage = await storage.ddcCustomers.clusterLedger.v54114.get(block, clusterId, accountId)
            if (accountInStorage) {
                const key = `${toCereAddress(accountId)}-${clusterId}`
                this._state.set(key, { clusterId, balance: accountInStorage.active })
            } else {
                logEmptyStorage('DdcCustomers.ClusterLedger', `${clusterId}-${accountId}`, block)
            }
        }
        // Fallback to legacy storage
        else if (storage.ddcCustomers.ledger.v48013.is(block)) {
            accountInStorage = await storage.ddcCustomers.ledger.v48013.get(block, accountId)
            if (accountInStorage) {
                this._state.set(toCereAddress(accountId), { balance: accountInStorage.active })
            } else {
                logEmptyStorage('DdcCustomers.Ledger', accountId, block)
            }
        } else {
            logUnsupportedStorageVersion('DdcCustomers.Ledger', block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                if (events.ddcCustomers.deposited.v54114.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v54114.decode(event)
                    await this.processDdcCustomersBalancesEvents(decoded.ownerId, block, decoded.clusterId)
                } else if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const accountId = events.ddcCustomers.deposited.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    const accountId = events.ddcCustomers.deposited.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else {
                    // Fallback: Try to decode as latest known version (v54114)
                    // This handles newer versions that might have the same structure
                    try {
                        const decoded = events.ddcCustomers.deposited.v54114.decode(event)
                        await this.processDdcCustomersBalancesEvents(decoded.ownerId, block, decoded.clusterId)
                        console.warn(`Using fallback decoding for deposited event in block ${block.height}. Consider updating types for newer version.`)
                    } catch (error) {
                        logUnsupportedEventVersion(event)
                        console.error(`Failed to decode deposited event in block ${block.height}:`, error)
                    }
                }
                break
            }
            case events.ddcCustomers.initiatDepositUnlock.name: {
                if (events.ddcCustomers.initiatDepositUnlock.v54114.is(event)) {
                    const decoded = events.ddcCustomers.initiatDepositUnlock.v54114.decode(event)
                    await this.processDdcCustomersBalancesEvents(decoded.ownerId, block, decoded.clusterId)
                } else if (events.ddcCustomers.initiatDepositUnlock.v48013.is(event)) {
                    const accountId = events.ddcCustomers.initiatDepositUnlock.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.withdrawn.name: {
                if (events.ddcCustomers.withdrawn.v54114.is(event)) {
                    const decoded = events.ddcCustomers.withdrawn.v54114.decode(event)
                    await this.processDdcCustomersBalancesEvents(decoded.ownerId, block, decoded.clusterId)
                } else if (events.ddcCustomers.withdrawn.v48013.is(event)) {
                    const accountId = events.ddcCustomers.withdrawn.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else if (events.ddcCustomers.withdrawn.v48800.is(event)) {
                    const accountId = events.ddcCustomers.withdrawn.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.charged.name: {
                if (events.ddcCustomers.charged.v54114.is(event)) {
                    const decoded = events.ddcCustomers.charged.v54114.decode(event)
                    await this.processDdcCustomersBalancesEvents(decoded.ownerId, block, decoded.clusterId)
                } else if (events.ddcCustomers.charged.v48013.is(event)) {
                    // unsupported version, just skip
                } else if (events.ddcCustomers.charged.v48014.is(event)) {
                    const accountId = events.ddcCustomers.charged.v48014.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else if (events.ddcCustomers.charged.v48800.is(event)) {
                    const accountId = events.ddcCustomers.charged.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.initialDepositUnlock.name: {
                if (events.ddcCustomers.initialDepositUnlock.v54114.is(event)) {
                    const decoded = events.ddcCustomers.initialDepositUnlock.v54114.decode(event)
                    await this.processDdcCustomersBalancesEvents(decoded.ownerId, block, decoded.clusterId)
                } else if (events.ddcCustomers.initialDepositUnlock.v48014.is(event)) {
                    const accountId = events.ddcCustomers.initialDepositUnlock.v48014.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
                } else if (events.ddcCustomers.initialDepositUnlock.v48800.is(event)) {
                    const accountId = events.ddcCustomers.initialDepositUnlock.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block, undefined)
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
