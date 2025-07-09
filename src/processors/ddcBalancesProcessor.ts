import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import {
    getClusterIdFromEventOrDefault,
    logEmptyStorage,
    logUnsupportedEventVersion,
    logUnsupportedStorageVersion,
    toCereAddress
} from '../utils'
import { Block } from '../processor'
import { BaseProcessor } from './processor'

export interface DdcCustomerBalance {
    accountId: string
    clusterId?: string
    activeBalance: bigint
}

type State = Map<string, DdcCustomerBalance>

export class DdcBalancesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, DdcCustomerBalance>())
    }

    private async processDdcCustomersBalancesEvents(accountId: string, clusterId: string | undefined, block: Block) {
        let accountInStorage
        let balanceKey: string

        if (clusterId) {
            // New cluster ledger storage
            if (storage.ddcCustomers.clusterLedger && storage.ddcCustomers.clusterLedger.v73160) {
                if (storage.ddcCustomers.clusterLedger.v73160.is(block)) {
                    accountInStorage = await storage.ddcCustomers.clusterLedger.v73160.get(block, clusterId, accountId)
                    balanceKey = `${toCereAddress(accountId)}-${clusterId}`
                } else {
                    logUnsupportedStorageVersion('DdcCustomers.ClusterLedger', block)
                    return
                }
            } else {
                // Fallback to old ledger for compatibility when cluster storage not available
                if (storage.ddcCustomers.ledger.v48013.is(block)) {
                    accountInStorage = await storage.ddcCustomers.ledger.v48013.get(block, accountId)
                    balanceKey = `${toCereAddress(accountId)}-${clusterId}`
                } else {
                    logUnsupportedStorageVersion('DdcCustomers.Ledger', block)
                    return
                }
            }
        } else {
            // Old ledger storage for backward compatibility
            if (storage.ddcCustomers.ledger.v48013.is(block)) {
                accountInStorage = await storage.ddcCustomers.ledger.v48013.get(block, accountId)
                balanceKey = `${toCereAddress(accountId)}`
            } else {
                logUnsupportedStorageVersion('DdcCustomers.Ledger', block)
                return
            }
        }

        if (accountInStorage) {
            this._state.set(balanceKey, {
                accountId: toCereAddress(accountId),
                clusterId: clusterId,
                activeBalance: accountInStorage.active
            })
        } else {
            logEmptyStorage(clusterId ? 'DdcCustomers.ClusterLedger' : 'DdcCustomers.Ledger', `${accountId}${clusterId ? `-${clusterId}` : ''}`, block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const accountId = events.ddcCustomers.deposited.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    const accountId = events.ddcCustomers.deposited.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.deposited.v73160.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v73160.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId =  getClusterIdFromEventOrDefault(decoded);
                    await this.processDdcCustomersBalancesEvents(accountId, clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.depositFor?.name: {
                if (events.ddcCustomers.depositFor.v73013.is(event)) {
                    const decoded = events.ddcCustomers.depositFor.v73013.decode(event)
                    const targetId = decoded.targetId
                    const depositorId = decoded.depositorId
                    const clusterId = getClusterIdFromEventOrDefault(decoded);

                    // Process both target (recipient) and depositor (sender) balances
                    await this.processDdcCustomersBalancesEvents(targetId, clusterId, block)
                    if (targetId !== depositorId) {
                        // Only process depositor separately if it's different from target
                        await this.processDdcCustomersBalancesEvents(depositorId, clusterId, block)
                    }
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.initiatDepositUnlock.name: {
                if (events.ddcCustomers.initiatDepositUnlock.v48013.is(event)) {
                    const accountId = events.ddcCustomers.initiatDepositUnlock.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.withdrawn.name: {
                if (events.ddcCustomers.withdrawn.v48013.is(event)) {
                    const accountId = events.ddcCustomers.withdrawn.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.withdrawn.v48800.is(event)) {
                    const accountId = events.ddcCustomers.withdrawn.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.withdrawn.v73160.is(event)) {
                    const decoded = events.ddcCustomers.withdrawn.v73160.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId =  getClusterIdFromEventOrDefault(decoded);
                    await this.processDdcCustomersBalancesEvents(accountId, clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.charged.name: {
                if (events.ddcCustomers.charged.v48013.is(event)) {
                    // unsupported version, just skip
                } else if (events.ddcCustomers.charged.v48014.is(event)) {
                    const accountId = events.ddcCustomers.charged.v48014.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.charged.v48800.is(event)) {
                    const accountId = events.ddcCustomers.charged.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.charged.v73160.is(event)) {
                    const decoded = events.ddcCustomers.charged.v73160.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId =  getClusterIdFromEventOrDefault(decoded);
                    await this.processDdcCustomersBalancesEvents(accountId, clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.initialDepositUnlock.name: {
                if (events.ddcCustomers.initialDepositUnlock.v48014.is(event)) {
                    const accountId = events.ddcCustomers.initialDepositUnlock.v48014.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.initialDepositUnlock.v48800.is(event)) {
                    const accountId = events.ddcCustomers.initialDepositUnlock.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, undefined, block)
                } else if (events.ddcCustomers.initialDepositUnlock.v73160.is(event)) {
                    const decoded = events.ddcCustomers.initialDepositUnlock.v73160.decode(event)
                    const accountId = decoded.ownerId
                    const clusterId =  getClusterIdFromEventOrDefault(decoded);
                    await this.processDdcCustomersBalancesEvents(accountId, clusterId, block)
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
