import {BlockHeader, Event} from "@subsquid/substrate-processor";
import {events, storage} from "../types";
import {logStorageError, throwUnsupportedSpec, throwUnsupportedStorageSpec, toCereAddress} from "../utils";

export class DdcBalancesProcessor {
    private state = new Map<string, bigint>

    private async processDdcCustomersBalancesEvents(accountId: string, block: BlockHeader) {
        let accountInStorage
        if (storage.ddcCustomers.ledger.v48013.is(block)) {
            accountInStorage = await storage.ddcCustomers.ledger.v48013.get(block, accountId)
        } else {
            throwUnsupportedStorageSpec(block)
        }
        if (accountInStorage) {
            this.state.set(toCereAddress(accountId), accountInStorage.active)
        } else {
            logStorageError("DDC Customer ledger", accountId, block)
        }
    }

    getState(): Map<string, bigint> {
        return this.state
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
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcCustomers.initiatDepositUnlock.name: {
                if (events.ddcCustomers.initiatDepositUnlock.v48013.is(event)) {
                    const accountId = events.ddcCustomers.initiatDepositUnlock.v48013.decode(event)[0]
                    await this.processDdcCustomersBalancesEvents(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
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
                    throwUnsupportedSpec(event, block)
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
                    throwUnsupportedSpec(event, block)
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
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            default: {
                break
            }
        }
    }
}