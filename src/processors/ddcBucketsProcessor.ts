import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { Block } from '../processor'
import { BaseProcessor } from './processor'

export interface BucketUsage {
    block: number
    timestamp: Date

    transferredBytes: bigint
    storedBytes: bigint
    numberOfPuts: bigint
    numberOfGets: bigint
}

export interface DdcBucketInfo {
    createdAtBlockHeight?: number
    ownerId: string
    clusterId: string
    bucketId: bigint
    isPublic: boolean
    isRemoved: boolean
    usage?: BucketUsage
}

type State = Map<bigint, DdcBucketInfo>

export class DdcBucketsProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<bigint, DdcBucketInfo>())
    }

    private async processDdcBucketsEvents(bucketId: bigint, block: Block, event: Event) {
        let createdAtBlockHeight
        if (event.name === events.ddcCustomers.bucketCreated.name) {
            createdAtBlockHeight = block.height
        }

        // TODO(khssnv)
        // We can return to ascending versions check here and in the other processors when
        // https://github.com/subsquid/squid-sdk/issues/334 fixed, possibly with
        // https://github.com/subsquid/squid-sdk/pull/337.

        let bucketInfo: DdcBucketInfo | undefined
        if (storage.ddcCustomers.buckets.v54100.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v54100.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    createdAtBlockHeight: createdAtBlockHeight,
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: bucket.isRemoved,
                }
            }
        } else if (storage.ddcCustomers.buckets.v50000.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v50000.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    createdAtBlockHeight: createdAtBlockHeight,
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: bucket.isRemoved,
                }
            }
        } else if (storage.ddcCustomers.buckets.v48017.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v48017.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    createdAtBlockHeight: createdAtBlockHeight,
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: false,
                }
            }
        } else if (storage.ddcCustomers.buckets.v48013.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v48013.get(block, bucketId)
            if (bucket) {
                bucketInfo = {
                    createdAtBlockHeight: createdAtBlockHeight,
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: true,
                    isRemoved: false,
                }
            }
        } else {
            logUnsupportedStorageVersion('DdcCustomers.Buckets', block)
        }
        if (bucketInfo) {
            bucketInfo.ownerId = toCereAddress(bucketInfo.ownerId)
            this._state.set(bucketId, bucketInfo)
        } else {
            logEmptyStorage('DdcCustomers.Buckets', bucketId.toString(), block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcCustomers.bucketCreated.name: {
                if (events.ddcCustomers.bucketCreated.v48013.is(event)) {
                    const bucketId = events.ddcCustomers.bucketCreated.v48013.decode(event)
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else if (events.ddcCustomers.bucketCreated.v48800.is(event)) {
                    const bucketId = events.ddcCustomers.bucketCreated.v48800.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else if (events.ddcCustomers.bucketCreated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketCreated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketUpdated.name: {
                if (events.ddcCustomers.bucketUpdated.v48017.is(event)) {
                    const bucketId = events.ddcCustomers.bucketUpdated.v48017.decode(event)
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else if (events.ddcCustomers.bucketUpdated.v48800.is(event)) {
                    const bucketId = events.ddcCustomers.bucketUpdated.v48800.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else if (events.ddcCustomers.bucketUpdated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketUpdated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketRemoved.name: {
                if (events.ddcCustomers.bucketRemoved.v50000.is(event)) {
                    const bucketId = events.ddcCustomers.bucketRemoved.v50000.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketTotalNodesUsageUpdated.name: {
                if (events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketTotalCustomersUsageUpdated.name: {
                if (events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.is(event)) {
                    const bucketId = events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.decode(event).bucketId
                    await this.processDdcBucketsEvents(bucketId, block, event)
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
