import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { BaseProcessor } from './processor'

type State = Map<string, bigint>

export class DdcBalancesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, bigint>())
    }

    private async processDdcCustomersBalancesEvents(accountId: string, block: BlockHeader) {
        let accountInStorage
        if (storage.ddcCustomers.ledger.v48013.is(block)) {
            accountInStorage = await storage.ddcCustomers.ledger.v48013.get(block, accountId)
        } else {
            logUnsupportedStorageVersion('DdcCustomers.Ledger', block)
        }
        if (accountInStorage) {
            this._state.set(toCereAddress(accountId), accountInStorage.active)
        } else {
            logEmptyStorage('DdcCustomers.Ledger', accountId, block)
        }
    }

    async process(event: Event, block: BlockHeader) {
        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const accountId = events.ddcCustomers.deposited.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    const accountId = events.ddcCustomers.deposited.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.initiatDepositUnlock.name: {
                if (events.ddcCustomers.initiatDepositUnlock.v48013.is(event)) {
                    const accountId = events.ddcCustomers.initiatDepositUnlock.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.withdrawn.name: {
                if (events.ddcCustomers.withdrawn.v48013.is(event)) {
                    const accountId = events.ddcCustomers.withdrawn.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.withdrawn.v48800.is(event)) {
                    const accountId = events.ddcCustomers.withdrawn.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
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
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.charged.v48800.is(event)) {
                    const accountId = events.ddcCustomers.charged.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.initialDepositUnlock.name: {
                if (events.ddcCustomers.initialDepositUnlock.v48014.is(event)) {
                    const accountId = events.ddcCustomers.initialDepositUnlock.v48014.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else if (events.ddcCustomers.initialDepositUnlock.v48800.is(event)) {
                    const accountId = events.ddcCustomers.initialDepositUnlock.v48800.decode(event).ownerId
                    await this.processDdcCustomersBalancesEvents(accountId, block)
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
