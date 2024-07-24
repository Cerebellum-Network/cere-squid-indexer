import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48201 from '../v48201'
import * as v48602 from '../v48602'

export const deposited =  {
    name: 'DdcCustomers.Deposited',
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v48201: new EventType(
        'DdcCustomers.Deposited',
        sts.tuple([v48201.AccountId32, sts.bigint()])
    ),
    /**
     * An account has deposited this amount. \[owner, amount\]
     * 
     * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v48602: new EventType(
        'DdcCustomers.Deposited',
        sts.struct({
            ownerId: v48602.AccountId32,
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
    v48201: new EventType(
        'DdcCustomers.Withdrawn',
        sts.tuple([v48201.AccountId32, sts.bigint()])
    ),
    /**
     * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
     * `Balance` from the unlocking queue. \[owner, amount\]
     */
    v48602: new EventType(
        'DdcCustomers.Withdrawn',
        sts.struct({
            ownerId: v48602.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const charged =  {
    name: 'DdcCustomers.Charged',
    /**
     * The account has been charged for the usage
     */
    v48201: new EventType(
        'DdcCustomers.Charged',
        sts.tuple([v48201.AccountId32, sts.bigint()])
    ),
    /**
     * The account has been charged for the usage
     */
    v48602: new EventType(
        'DdcCustomers.Charged',
        sts.struct({
            ownerId: v48602.AccountId32,
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
    v48201: new EventType(
        'DdcCustomers.BucketCreated',
        sts.bigint()
    ),
    /**
     * Bucket with specific id created
     */
    v48602: new EventType(
        'DdcCustomers.BucketCreated',
        sts.struct({
            bucketId: sts.bigint(),
        })
    ),
}

export const bucketUpdated =  {
    name: 'DdcCustomers.BucketUpdated',
    /**
     * Bucket with specific id updated
     */
    v48201: new EventType(
        'DdcCustomers.BucketUpdated',
        sts.bigint()
    ),
    /**
     * Bucket with specific id updated
     */
    v48602: new EventType(
        'DdcCustomers.BucketUpdated',
        sts.struct({
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
