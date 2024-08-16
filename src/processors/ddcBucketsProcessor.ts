import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { BaseProcessor } from './processor'

export interface DdcBucketInfo {
    ownerId: string
    clusterId: string
    bucketId: bigint
    isPublic: boolean
    isRemoved: boolean
    transferredBytes: bigint
    storedBytes: bigint
    numberOfPuts: bigint
    numberOfGets: bigint
}

type State = Map<bigint, DdcBucketInfo>

export class DdcBucketsProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<bigint, DdcBucketInfo>())
    }

    private async processDdcBucketsEvents(bucketId: bigint, block: BlockHeader) {
        // TODO(khssnv)
        // The `blockSpecVersion` is added because previously the following
        // `storage.ddcCustomers.buckets.v48013.is(block)` returned `true` when `v54100` is
        // expected. Remove it and return back to the `.is(block)` version selector when
        // the problem is fixed. With `blockSpecVersion` we can't detect if incoming block has an
        // unsupported future version of the storage.
        const blockSpecVersion = block._runtime.specVersion

        let bucketInfo: DdcBucketInfo | undefined
        // if (storage.ddcCustomers.buckets.v48013.is(block)) {
        if (blockSpecVersion >= 48013 && blockSpecVersion < 48017) {
            const bucket = await storage.ddcCustomers.buckets.v48013.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: true,
                    isRemoved: false,
                    transferredBytes: 0n,
                    storedBytes: 0n,
                    numberOfPuts: 0n,
                    numberOfGets: 0n,
                }
            }
            // } else if (storage.ddcCustomers.buckets.v48017.is(block)) {
        } else if (blockSpecVersion <= 48017 && blockSpecVersion < 50000) {
            const bucket = await storage.ddcCustomers.buckets.v48017.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: false,
                    transferredBytes: 0n,
                    storedBytes: 0n,
                    numberOfPuts: 0n,
                    numberOfGets: 0n,
                }
            }
            // } else if (storage.ddcCustomers.buckets.v50000.is(block)) {
        } else if (blockSpecVersion >= 50000 && blockSpecVersion < 54100) {
            const bucket = await storage.ddcCustomers.buckets.v50000.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: bucket.isRemoved,
                    transferredBytes: 0n,
                    storedBytes: 0n,
                    numberOfPuts: 0n,
                    numberOfGets: 0n,
                }
            }
            // } else if (storage.ddcCustomers.buckets.v54100.is(block)) {
        } else if (blockSpecVersion >= 54100) {
            const bucket = await storage.ddcCustomers.buckets.v54100.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: bucket.isRemoved,
                    transferredBytes: bucket.totalCustomersUsage?.transferredBytes ?? 0n,
                    storedBytes: bucket.totalCustomersUsage?.storedBytes ?? 0n,
                    numberOfPuts: bucket.totalCustomersUsage?.numberOfPuts ?? 0n,
                    numberOfGets: bucket.totalCustomersUsage?.numberOfGets ?? 0n,
                }
            }
        } else {
            logUnsupportedStorageVersion('DdcCustomers.Buckets', block)
        }
        if (bucketInfo) {
            bucketInfo.ownerId = toCereAddress(bucketInfo.ownerId)
            this._state.set(bucketId, bucketInfo)
        } else {
            logEmptyStorage('bucket', bucketId.toString(), block)
        }
    }

    async process(event: Event, block: BlockHeader) {
        switch (event.name) {
            case events.ddcCustomers.bucketCreated.name: {
                if (events.ddcCustomers.bucketCreated.v48013.is(event)) {
                    const bucketId = events.ddcCustomers.bucketCreated.v48013.decode(event)
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketCreated.v48800.is(event)) {
                    const bucketId = events.ddcCustomers.bucketCreated.v48800.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketCreated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketCreated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketUpdated.name: {
                if (events.ddcCustomers.bucketUpdated.v48017.is(event)) {
                    const bucketId = events.ddcCustomers.bucketUpdated.v48017.decode(event)
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketUpdated.v48800.is(event)) {
                    const bucketId = events.ddcCustomers.bucketUpdated.v48800.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketUpdated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketUpdated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketRemoved.name: {
                if (events.ddcCustomers.bucketRemoved.v50000.is(event)) {
                    const bucketId = events.ddcCustomers.bucketRemoved.v50000.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketTotalNodesUsageUpdated.name: {
                if (events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketTotalCustomersUsageUpdated.name: {
                if (events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
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
