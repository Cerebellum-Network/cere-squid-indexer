import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'
import * as v48014 from '../v48014'
import * as v48800 from '../v48800'
import * as v54100 from '../v54100'

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
        sts.tuple([v48013.AccountId32, sts.bigint()])
    ),
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v48800: new EventType(
        'DdcCustomers.Deposited',
        sts.struct({
            ownerId: v48800.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const initiatDepositUnlock =  {
    name: 'DdcCustomers.InitiatDepositUnlock',
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v48013: new EventType(
        'DdcCustomers.InitiatDepositUnlock',
        sts.tuple([v48013.AccountId32, sts.bigint()])
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
        sts.tuple([v48013.AccountId32, sts.bigint()])
    ),
    /**
     * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
     * `Balance` from the unlocking queue. \[owner, amount\]
     */
    v48800: new EventType(
        'DdcCustomers.Withdrawn',
        sts.struct({
            ownerId: v48800.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const charged =  {
    name: 'DdcCustomers.Charged',
    /**
     * Total amount charged from all accounts to pay CDN nodes
     */
    v48013: new EventType(
        'DdcCustomers.Charged',
        sts.bigint()
    ),
    /**
     * The account has been charged for the usage
     */
    v48014: new EventType(
        'DdcCustomers.Charged',
        sts.tuple([v48014.AccountId32, sts.bigint()])
    ),
    /**
     * The account has been charged for the usage
     */
    v48800: new EventType(
        'DdcCustomers.Charged',
        sts.struct({
            ownerId: v48800.AccountId32,
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
        sts.bigint()
    ),
    /**
     * Bucket with specific id created
     */
    v48800: new EventType(
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
            clusterId: v54100.H160,
            bucketId: sts.bigint(),
        })
    ),
}

export const initialDepositUnlock =  {
    name: 'DdcCustomers.InitialDepositUnlock',
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v48014: new EventType(
        'DdcCustomers.InitialDepositUnlock',
        sts.tuple([v48014.AccountId32, sts.bigint()])
    ),
    /**
     * An account has initiated unlock for amount. \[owner, amount\]
     */
    v48800: new EventType(
        'DdcCustomers.InitialDepositUnlock',
        sts.struct({
            ownerId: v48800.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const bucketUpdated =  {
    name: 'DdcCustomers.BucketUpdated',
    /**
     * Bucket with specific id updated
     */
    v48017: new EventType(
        'DdcCustomers.BucketUpdated',
        sts.bigint()
    ),
    /**
     * Bucket with specific id updated
     */
    v48800: new EventType(
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
            clusterId: v54100.H160,
            bucketId: sts.bigint(),
        })
    ),
}

export const bucketRemoved =  {
    name: 'DdcCustomers.BucketRemoved',
    /**
     * Bucket with specific id marked as removed
     */
    v50000: new EventType(
        'DdcCustomers.BucketRemoved',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
}

export const bucketTotalNodesUsageUpdated =  {
    name: 'DdcCustomers.BucketTotalNodesUsageUpdated',
    /**
     * Bucket nodes usage with specific id updated
     */
    v54100: new EventType(
        'DdcCustomers.BucketTotalNodesUsageUpdated',
        sts.struct({
            clusterId: v54100.H160,
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
    v54100: new EventType(
        'DdcCustomers.BucketTotalCustomersUsageUpdated',
        sts.struct({
            clusterId: v54100.H160,
            bucketId: sts.bigint(),
            transferredBytes: sts.bigint(),
            storedBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
        })
    ),
}
