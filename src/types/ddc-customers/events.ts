import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

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
