import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { Block } from '../processor'
import { BaseProcessor } from './processor'

type State = Map<string, bigint>

export class CereBalancesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, bigint>())
    }

    private async processCereBalancesEvents(accountId: string, block: Block) {
        let accountInStorage
        if (storage.system.account.v63002.is(block)) {
            accountInStorage = await storage.system.account.v63002.get(block, accountId)
        } else {
            logUnsupportedStorageVersion('System.Account', block)
        }
        if (accountInStorage) {
            this._state.set(toCereAddress(accountId), accountInStorage.data.free)
        } else {
            logEmptyStorage('System.Account', accountId, block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.balances.endowed.name: {
                if (events.balances.endowed.v63002.is(event)) {
                    const decoded = events.balances.endowed.v63002.decode(event)
                    const accountId = decoded.account
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.dustLost.name: {
                if (events.balances.dustLost.v63002.is(event)) {
                    const decoded = events.balances.dustLost.v63002.decode(event)
                    const accountId = decoded.account
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.transfer.name: {
                if (events.balances.transfer.v63002.is(event)) {
                    const decoded = events.balances.transfer.v63002.decode(event)
                    const fromAccountId = decoded.from
                    const toAccountId = decoded.to
                    await this.processCereBalancesEvents(fromAccountId, block)
                    await this.processCereBalancesEvents(toAccountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.balanceSet.name: {
                if (events.balances.balanceSet.v63002.is(event)) {
                    const decoded = events.balances.balanceSet.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.deposit.name: {
                if (events.balances.deposit.v63002.is(event)) {
                    const decoded = events.balances.deposit.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.reserved.name: {
                if (events.balances.reserved.v63002.is(event)) {
                    const decoded = events.balances.reserved.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.unreserved.name: {
                if (events.balances.unreserved.v63002.is(event)) {
                    const decoded = events.balances.unreserved.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.reserveRepatriated.name: {
                if (events.balances.reserveRepatriated.v63002.is(event)) {
                    const decoded = events.balances.reserveRepatriated.v63002.decode(event)
                    const fromAccountId = decoded.from
                    const toAccountId = decoded.to
                    await this.processCereBalancesEvents(fromAccountId, block)
                    await this.processCereBalancesEvents(toAccountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.withdraw.name: {
                if (events.balances.withdraw.v63002.is(event)) {
                    const decoded = events.balances.withdraw.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.slashed.name: {
                if (events.balances.slashed.v63002.is(event)) {
                    const decoded = events.balances.slashed.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.minted.name: {
                if (events.balances.minted.v63002.is(event)) {
                    const decoded = events.balances.minted.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.burned.name: {
                if (events.balances.burned.v63002.is(event)) {
                    const decoded = events.balances.burned.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.suspended.name: {
                if (events.balances.suspended.v63002.is(event)) {
                    const decoded = events.balances.suspended.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.restored.name: {
                if (events.balances.restored.v63002.is(event)) {
                    const decoded = events.balances.restored.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.upgraded.name: {
                if (events.balances.upgraded.v63002.is(event)) {
                    const decoded = events.balances.upgraded.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.locked.name: {
                if (events.balances.locked.v63002.is(event)) {
                    const decoded = events.balances.locked.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.unlocked.name: {
                if (events.balances.unlocked.v63002.is(event)) {
                    const decoded = events.balances.unlocked.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.frozen.name: {
                if (events.balances.frozen.v63002.is(event)) {
                    const decoded = events.balances.frozen.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.balances.thawed.name: {
                if (events.balances.thawed.v63002.is(event)) {
                    const decoded = events.balances.thawed.v63002.decode(event)
                    const accountId = decoded.who
                    await this.processCereBalancesEvents(accountId, block)
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
