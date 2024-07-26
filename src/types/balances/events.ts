import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v296 from '../v296'
import * as v297 from '../v297'
import * as v48900 from '../v48900'

export const endowed =  {
    name: 'Balances.Endowed',
    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    v266: new EventType(
        'Balances.Endowed',
        sts.tuple([v266.AccountId, v266.Balance])
    ),
    /**
     * An account was created with some free balance.
     */
    v297: new EventType(
        'Balances.Endowed',
        sts.struct({
            account: v297.AccountId32,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Balances.DustLost',
    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    v266: new EventType(
        'Balances.DustLost',
        sts.tuple([v266.AccountId, v266.Balance])
    ),
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    v297: new EventType(
        'Balances.DustLost',
        sts.struct({
            account: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    v266: new EventType(
        'Balances.Transfer',
        sts.tuple([v266.AccountId, v266.AccountId, v266.Balance])
    ),
    /**
     * Transfer succeeded.
     */
    v297: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v297.AccountId32,
            to: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Balances.BalanceSet',
    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    v266: new EventType(
        'Balances.BalanceSet',
        sts.tuple([v266.AccountId, v266.Balance, v266.Balance])
    ),
    /**
     * A balance was set by root.
     */
    v297: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v297.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v48900: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v48900.AccountId32,
            free: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Balances.Deposit',
    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    v266: new EventType(
        'Balances.Deposit',
        sts.tuple([v266.AccountId, v266.Balance])
    ),
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    v297: new EventType(
        'Balances.Deposit',
        sts.struct({
            who: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Balances.Reserved',
    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    v266: new EventType(
        'Balances.Reserved',
        sts.tuple([v266.AccountId, v266.Balance])
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v297: new EventType(
        'Balances.Reserved',
        sts.struct({
            who: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Balances.Unreserved',
    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    v266: new EventType(
        'Balances.Unreserved',
        sts.tuple([v266.AccountId, v266.Balance])
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v297: new EventType(
        'Balances.Unreserved',
        sts.struct({
            who: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Balances.ReserveRepatriated',
    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    v266: new EventType(
        'Balances.ReserveRepatriated',
        sts.tuple([v266.AccountId, v266.AccountId, v266.Balance, v266.BalanceStatus])
    ),
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    v297: new EventType(
        'Balances.ReserveRepatriated',
        sts.struct({
            from: v297.AccountId32,
            to: v297.AccountId32,
            amount: sts.bigint(),
            destinationStatus: v297.BalanceStatus,
        })
    ),
}

export const withdraw =  {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    v296: new EventType(
        'Balances.Withdraw',
        sts.tuple([v296.AccountId32, sts.bigint()])
    ),
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    v297: new EventType(
        'Balances.Withdraw',
        sts.struct({
            who: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Balances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    v296: new EventType(
        'Balances.Slashed',
        sts.tuple([v296.AccountId32, sts.bigint()])
    ),
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    v297: new EventType(
        'Balances.Slashed',
        sts.struct({
            who: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'Balances.Minted',
    /**
     * Some amount was minted into an account.
     */
    v48900: new EventType(
        'Balances.Minted',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const burned =  {
    name: 'Balances.Burned',
    /**
     * Some amount was burned from an account.
     */
    v48900: new EventType(
        'Balances.Burned',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const suspended =  {
    name: 'Balances.Suspended',
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    v48900: new EventType(
        'Balances.Suspended',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const restored =  {
    name: 'Balances.Restored',
    /**
     * Some amount was restored into an account.
     */
    v48900: new EventType(
        'Balances.Restored',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const upgraded =  {
    name: 'Balances.Upgraded',
    /**
     * An account was upgraded.
     */
    v48900: new EventType(
        'Balances.Upgraded',
        sts.struct({
            who: v48900.AccountId32,
        })
    ),
}

export const issued =  {
    name: 'Balances.Issued',
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    v48900: new EventType(
        'Balances.Issued',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const rescinded =  {
    name: 'Balances.Rescinded',
    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    v48900: new EventType(
        'Balances.Rescinded',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const locked =  {
    name: 'Balances.Locked',
    /**
     * Some balance was locked.
     */
    v48900: new EventType(
        'Balances.Locked',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Balances.Unlocked',
    /**
     * Some balance was unlocked.
     */
    v48900: new EventType(
        'Balances.Unlocked',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const frozen =  {
    name: 'Balances.Frozen',
    /**
     * Some balance was frozen.
     */
    v48900: new EventType(
        'Balances.Frozen',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const thawed =  {
    name: 'Balances.Thawed',
    /**
     * Some balance was thawed.
     */
    v48900: new EventType(
        'Balances.Thawed',
        sts.struct({
            who: v48900.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
