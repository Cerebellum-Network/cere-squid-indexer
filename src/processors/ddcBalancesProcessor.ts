import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { Block } from '../processor'
import { BaseProcessor } from './processor'

type State = Map<string, bigint>

export class DdcBalancesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, bigint>())
    }

    private async processDdcCustomersBalancesEvents(accountId: string, block: Block, clusterId?: string) {
        let accountInStorage
        
        if (clusterId && storage.ddcCustomers.clusterLedger.v73047.is(block)) {
            // Use new clusterLedger storage for v73047+
            accountInStorage = await storage.ddcCustomers.clusterLedger.v73047.get(block, clusterId, accountId)
        } else if (storage.ddcCustomers.ledger.v63002.is(block)) {
            // Use old ledger storage for older versions
            accountInStorage = await storage.ddcCustomers.ledger.v63002.get(block, accountId)
        } else {
            logUnsupportedStorageVersion('DdcCustomers.Ledger/ClusterLedger', block)
            return
        }
        
        if (accountInStorage) {
            // Create unique key for account+cluster combination
            const stateKey = clusterId ? `${toCereAddress(accountId)}-${clusterId}` : toCereAddress(accountId)
            this._state.set(stateKey, accountInStorage.active)
        } else {
            logEmptyStorage('DdcCustomers.Ledger/ClusterLedger', accountId, block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                if (events.ddcCustomers.deposited.v63002.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v63002.decode(event)
                    const accountId = decoded.ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.deposited.v73047.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v73047.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId = decoded.clusterId
                    await this.processDdcCustomersBalancesEvents(accountId, block, clusterId)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.initialDepositUnlock.name: {
                if (events.ddcCustomers.initialDepositUnlock.v63002.is(event)) {
                    const decoded = events.ddcCustomers.initialDepositUnlock.v63002.decode(event)
                    const accountId = decoded.ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.initialDepositUnlock.v73047.is(event)) {
                    const decoded = events.ddcCustomers.initialDepositUnlock.v73047.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId = decoded.clusterId
                    await this.processDdcCustomersBalancesEvents(accountId, block, clusterId)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.withdrawn.name: {
                if (events.ddcCustomers.withdrawn.v63002.is(event)) {
                    const decoded = events.ddcCustomers.withdrawn.v63002.decode(event)
                    const accountId = decoded.ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.withdrawn.v73047.is(event)) {
                    const decoded = events.ddcCustomers.withdrawn.v73047.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId = decoded.clusterId
                    await this.processDdcCustomersBalancesEvents(accountId, block, clusterId)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.charged.name: {
                if (events.ddcCustomers.charged.v63002.is(event)) {
                    const decoded = events.ddcCustomers.charged.v63002.decode(event)
                    const accountId = decoded.ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.charged.v73047.is(event)) {
                    const decoded = events.ddcCustomers.charged.v73047.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId = decoded.clusterId
                    await this.processDdcCustomersBalancesEvents(accountId, block, clusterId)
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
