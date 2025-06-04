import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'
import * as v54100 from '../v54100'
import * as v63002 from '../v63002'
import * as v73047 from '../v73047'

export const deposited =  {
    name: 'DdcCustomers.Deposited',
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v48013: new EventType(
        'DdcCustomers.Deposited',
        sts.struct({
            ownerId: v48013.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v54100: new EventType(
        'DdcCustomers.Deposited',
        sts.struct({
            ownerId: v54100.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v63002: new EventType(
        'DdcCustomers.Deposited',
        sts.struct({
            ownerId: v63002.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v73047: new EventType(
        'DdcCustomers.Deposited',
        sts.struct({
            clusterId: v73047.H160,
            ownerId: v73047.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const initialDepositUnlock =  {
    name: 'DdcCustomers.InitialDepositUnlock',
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v48013: new EventType(
        'DdcCustomers.InitialDepositUnlock',
        sts.struct({
            ownerId: v48013.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v54100: new EventType(
        'DdcCustomers.InitialDepositUnlock',
        sts.struct({
            ownerId: v54100.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v63002: new EventType(
        'DdcCustomers.InitialDepositUnlock',
        sts.struct({
            ownerId: v63002.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v73047: new EventType(
        'DdcCustomers.InitialDepositUnlock',
        sts.struct({
            clusterId: v73047.H160,
            ownerId: v73047.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'DdcCustomers.Withdrawn',
    /**
     * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
     * `Balance` from the unlocking queue. \[owner, amount\]
     */
    v48013: new EventType(
        'DdcCustomers.Withdrawn',
        sts.struct({
            ownerId: v48013.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
     * `Balance` from the unlocking queue. \[owner, amount\]
     */
    v54100: new EventType(
        'DdcCustomers.Withdrawn',
        sts.struct({
            ownerId: v54100.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
     * `Balance` from the unlocking queue. \[owner, amount\]
     */
    v63002: new EventType(
        'DdcCustomers.Withdrawn',
        sts.struct({
            ownerId: v63002.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
     * `Balance` from the unlocking queue. \[owner, amount\]
     */
    v73047: new EventType(
        'DdcCustomers.Withdrawn',
        sts.struct({
            clusterId: v73047.H160,
            ownerId: v73047.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const charged =  {
    name: 'DdcCustomers.Charged',
    /**
     * The account has been charged for the usage
     */
    v48013: new EventType(
        'DdcCustomers.Charged',
        sts.struct({
            ownerId: v48013.AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
    /**
     * The account has been charged for the usage
     */
    v54100: new EventType(
        'DdcCustomers.Charged',
        sts.struct({
            ownerId: v54100.AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
    /**
     * The account has been charged for the usage
     */
    v63002: new EventType(
        'DdcCustomers.Charged',
        sts.struct({
            ownerId: v63002.AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
    /**
     * The account has been charged for the usage
     */
    v73047: new EventType(
        'DdcCustomers.Charged',
        sts.struct({
            clusterId: v73047.H160,
            ownerId: v73047.AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
}

export const bucketCreated =  {
    name: 'DdcCustomers.BucketCreated',
    /**
     * Bucket with specific id created
     */
    v48013: new EventType(
        'DdcCustomers.BucketCreated',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id created
     */
    v54100: new EventType(
        'DdcCustomers.BucketCreated',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id created
     */
    v63002: new EventType(
        'DdcCustomers.BucketCreated',
        sts.struct({
            clusterId: v63002.H160,
            bucketId: sts.bigint(),
        })
    ),
}

export const bucketUpdated =  {
    name: 'DdcCustomers.BucketUpdated',
    /**
     * Bucket with specific id updated
     */
    v48013: new EventType(
        'DdcCustomers.BucketUpdated',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id updated
     */
    v54100: new EventType(
        'DdcCustomers.BucketUpdated',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id updated
     */
    v63002: new EventType(
        'DdcCustomers.BucketUpdated',
        sts.struct({
            clusterId: v63002.H160,
            bucketId: sts.bigint(),
        })
    ),
}

export const bucketTotalNodesUsageUpdated =  {
    name: 'DdcCustomers.BucketTotalNodesUsageUpdated',
    /**
     * Bucket nodes usage with specific id updated
     */
    v63002: new EventType(
        'DdcCustomers.BucketTotalNodesUsageUpdated',
        sts.struct({
            clusterId: v63002.H160,
            bucketId: sts.bigint(),
            transferredBytes: sts.bigint(),
            storedBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
        })
    ),
}

export const bucketTotalCustomersUsageUpdated =  {
    name: 'DdcCustomers.BucketTotalCustomersUsageUpdated',
    /**
     * Bucket customers usage with specific id updated
     */
    v63002: new EventType(
        'DdcCustomers.BucketTotalCustomersUsageUpdated',
        sts.struct({
            clusterId: v63002.H160,
            bucketId: sts.bigint(),
            transferredBytes: sts.bigint(),
            storedBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
        })
    ),
}

export const bucketRemoved =  {
    name: 'DdcCustomers.BucketRemoved',
    /**
     * Bucket with specific id marked as removed
     */
    v48013: new EventType(
        'DdcCustomers.BucketRemoved',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id marked as removed
     */
    v54100: new EventType(
        'DdcCustomers.BucketRemoved',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id marked as removed
     */
    v63002: new EventType(
        'DdcCustomers.BucketRemoved',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
    /**
     * Bucket with specific id marked as removed
     */
    v73047: new EventType(
        'DdcCustomers.BucketRemoved',
        sts.struct({
            clusterId: v73047.H160,
            bucketId: sts.bigint(),
        })
    ),
}
