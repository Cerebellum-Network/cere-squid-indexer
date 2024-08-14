import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logStorageError, throwUnsupportedSpec, throwUnsupportedStorageSpec, toCereAddress } from '../utils'
import { BaseProcessor } from './processor'

type State = Map<string, bigint>

export class CereBalancesProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, bigint>())
    }

    private async processBalancesEvent(accountId: string, block: BlockHeader) {
        try {
            let accountInStorage
            if (storage.system.account.v266.is(block)) {
                accountInStorage = await storage.system.account.v266.get(block, accountId)
            } else if (storage.system.account.v295.is(block)) {
                accountInStorage = await storage.system.account.v295.get(block, accountId)
            } else if (storage.system.account.v48900.is(block)) {
                accountInStorage = await storage.system.account.v48900.get(block, accountId)
            } else {
                throwUnsupportedStorageSpec(block)
            }
            if (accountInStorage) {
                this._state.set(toCereAddress(accountId), accountInStorage.data.free)
            } else {
                logStorageError('account', accountId, block)
            }
        } catch (error) {
            if (error?.toString() === 'Error: Unexpected EOF' || error?.toString() === 'Error: Unprocessed data left') {
                // some accounts in old blocks can not be parsed, just ignore them
            } else {
                throw error
            }
        }
    }

    async process(event: Event, block: BlockHeader) {
        switch (event.name) {
            case events.balances.endowed.name: {
                if (events.balances.endowed.v266.is(event)) {
                    const accountId = events.balances.endowed.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.endowed.v297.is(event)) {
                    const accountId = events.balances.endowed.v297.decode(event).account
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.dustLost.name: {
                if (events.balances.dustLost.v266.is(event)) {
                    const accountId = events.balances.dustLost.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.dustLost.v297.is(event)) {
                    const accountId = events.balances.dustLost.v297.decode(event).account
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.transfer.name: {
                if (events.balances.transfer.v266.is(event)) {
                    const accountId = events.balances.transfer.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.transfer.v297.is(event)) {
                    const accountId = events.balances.transfer.v297.decode(event).from
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.balanceSet.name: {
                if (events.balances.balanceSet.v266.is(event)) {
                    const accountId = events.balances.balanceSet.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.balanceSet.v297.is(event)) {
                    const accountId = events.balances.balanceSet.v297.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.balanceSet.v48900.is(event)) {
                    const accountId = events.balances.balanceSet.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.deposit.name: {
                if (events.balances.deposit.v266.is(event)) {
                    const accountId = events.balances.deposit.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.deposit.v297.is(event)) {
                    const accountId = events.balances.deposit.v297.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.reserved.name: {
                if (events.balances.reserved.v266.is(event)) {
                    const accountId = events.balances.reserved.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.reserved.v297.is(event)) {
                    const accountId = events.balances.reserved.v297.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.unreserved.name: {
                if (events.balances.unreserved.v266.is(event)) {
                    const accountId = events.balances.unreserved.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.unreserved.v297.is(event)) {
                    const accountId = events.balances.unreserved.v297.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.reserveRepatriated.name: {
                if (events.balances.reserveRepatriated.v266.is(event)) {
                    const accountId = events.balances.reserveRepatriated.v266.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.reserveRepatriated.v297.is(event)) {
                    const accountId = events.balances.reserveRepatriated.v297.decode(event).from
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.withdraw.name: {
                if (events.balances.withdraw.v296.is(event)) {
                    const accountId = events.balances.withdraw.v296.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.withdraw.v297.is(event)) {
                    const accountId = events.balances.withdraw.v297.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.slashed.name: {
                if (events.balances.slashed.v296.is(event)) {
                    const accountId = events.balances.slashed.v296.decode(event)[0]
                    await this.processBalancesEvent(accountId, block)
                } else if (events.balances.slashed.v297.is(event)) {
                    const accountId = events.balances.slashed.v297.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.minted.name: {
                if (events.balances.minted.v48900.is(event)) {
                    const accountId = events.balances.minted.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.burned.name: {
                if (events.balances.burned.v48900.is(event)) {
                    const accountId = events.balances.burned.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.suspended.name: {
                if (events.balances.suspended.v48900.is(event)) {
                    const accountId = events.balances.suspended.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.restored.name: {
                if (events.balances.restored.v48900.is(event)) {
                    const accountId = events.balances.restored.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.upgraded.name: {
                if (events.balances.upgraded.v48900.is(event)) {
                    const accountId = events.balances.upgraded.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.locked.name: {
                if (events.balances.locked.v48900.is(event)) {
                    const accountId = events.balances.locked.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.unlocked.name: {
                if (events.balances.unlocked.v48900.is(event)) {
                    const accountId = events.balances.unlocked.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.frozen.name: {
                if (events.balances.frozen.v48900.is(event)) {
                    const accountId = events.balances.frozen.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.balances.thawed.name: {
                if (events.balances.thawed.v48900.is(event)) {
                    const accountId = events.balances.thawed.v48900.decode(event).who
                    await this.processBalancesEvent(accountId, block)
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
