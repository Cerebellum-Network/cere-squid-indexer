import {sts, Result, Option, Bytes, BitSequence} from './support'

export type AccountId32 = Bytes

export type H160 = Bytes

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()

export interface AccountsLedger {
    total: bigint
    active: bigint
    unlocking: UnlockChunk[]
}

export interface UnlockChunk {
    amount: bigint
    unlockHeight: number
}

export const AccountsLedger: sts.Type<AccountsLedger> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        active: sts.bigint(),
        unlocking: sts.array(() => UnlockChunk),
    }
})

export const UnlockChunk: sts.Type<UnlockChunk> = sts.struct(() => {
    return  {
        amount: sts.bigint(),
        unlockHeight: sts.number(),
    }
})

// DdcCustomers Events with cluster_id support
export type DdcCustomersEvent = DdcCustomersEvent_BucketCreated | DdcCustomersEvent_BucketRemoved | DdcCustomersEvent_BucketTotalCustomersUsageUpdated | DdcCustomersEvent_BucketTotalNodesUsageUpdated | DdcCustomersEvent_BucketUpdated | DdcCustomersEvent_Charged | DdcCustomersEvent_Deposited | DdcCustomersEvent_InitialDepositUnlock | DdcCustomersEvent_Withdrawn

export interface DdcCustomersEvent_BucketCreated {
    __kind: 'BucketCreated'
}

export interface DdcCustomersEvent_BucketRemoved {
    __kind: 'BucketRemoved'
}

export interface DdcCustomersEvent_BucketTotalCustomersUsageUpdated {
    __kind: 'BucketTotalCustomersUsageUpdated'
}

export interface DdcCustomersEvent_BucketTotalNodesUsageUpdated {
    __kind: 'BucketTotalNodesUsageUpdated'
}

export interface DdcCustomersEvent_BucketUpdated {
    __kind: 'BucketUpdated'
}

export interface DdcCustomersEvent_Charged {
    __kind: 'Charged'
}

/**
 * An account has deposited this amount to a specific cluster. [cluster_id, owner, amount]
 * 
 * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface DdcCustomersEvent_Deposited {
    __kind: 'Deposited'
}

/**
 * An account has initiated unlock for amount. [cluster_id, owner, amount]
 */
export interface DdcCustomersEvent_InitialDepositUnlock {
    __kind: 'InitialDepositUnlock'
}

/**
 * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
 * `Balance` from the unlocking queue. [cluster_id, owner, amount]
 */
export interface DdcCustomersEvent_Withdrawn {
    __kind: 'Withdrawn'
}

export const DdcCustomersEvent: sts.Type<DdcCustomersEvent> = sts.closedEnum(() => {
    return  {
        BucketCreated: sts.struct({
            clusterId: H160,
            bucketId: sts.bigint(),
        }),
        BucketRemoved: sts.struct({
            bucketId: sts.bigint(),
        }),
        BucketTotalCustomersUsageUpdated: sts.struct({
            clusterId: H160,
            bucketId: sts.bigint(),
            transferredBytes: sts.bigint(),
            storedBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
        }),
        BucketTotalNodesUsageUpdated: sts.struct({
            clusterId: H160,
            bucketId: sts.bigint(),
            transferredBytes: sts.bigint(),
            storedBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
        }),
        BucketUpdated: sts.struct({
            clusterId: H160,
            bucketId: sts.bigint(),
        }),
        Charged: sts.struct({
            clusterId: H160,
            ownerId: AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        }),
        Deposited: sts.struct({
            clusterId: H160,
            ownerId: AccountId32,
            amount: sts.bigint(),
        }),
        InitialDepositUnlock: sts.struct({
            clusterId: H160,
            ownerId: AccountId32,
            amount: sts.bigint(),
        }),
        Withdrawn: sts.struct({
            clusterId: H160,
            ownerId: AccountId32,
            amount: sts.bigint(),
        }),
    }
}) 
