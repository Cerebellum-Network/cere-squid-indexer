import { Event } from '@subsquid/substrate-processor'
import { assertNotNull } from '@subsquid/util-internal'
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
    createdAtBlockTimestamp?: Date
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

    private async processBucketInfo(bucketId: bigint, block: Block) {
        let bucket
        if (storage.ddcCustomers.buckets.v73047.is(block)) {
            bucket = await storage.ddcCustomers.buckets.v73047.get(block, bucketId)
        } else if (storage.ddcCustomers.buckets.v63002.is(block)) {
            bucket = await storage.ddcCustomers.buckets.v63002.get(block, bucketId)
        } else if (storage.ddcCustomers.buckets.v54100.is(block)) {
            bucket = await storage.ddcCustomers.buckets.v54100.get(block, bucketId)
        } else if (storage.ddcCustomers.buckets.v48013.is(block)) {
            bucket = await storage.ddcCustomers.buckets.v48013.get(block, bucketId)
        } else {
            logUnsupportedStorageVersion('DdcCustomers.Buckets', block)
        }
        
        if (bucket) {
            const bucketInfo: DdcBucketInfo = {
                bucketId: bucketId,
                createdAtBlockHeight: block.height,
                createdAtBlockTimestamp: new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`)),
                ownerId: toCereAddress(bucket.ownerId),
                clusterId: bucket.clusterId || '0x0000000000000000000000000000000000000000', // Default cluster for legacy buckets
                isPublic: bucket.isPublic,
                isRemoved: bucket.isRemoved,
            }
            this._state.set(bucketId, bucketInfo)
        } else {
            logEmptyStorage('DdcCustomers.Buckets', bucketId.toString(), block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcCustomers.bucketCreated.name: {
                if (events.ddcCustomers.bucketCreated.v63002.is(event)) {
                    const decoded = events.ddcCustomers.bucketCreated.v63002.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketCreated.v54100.is(event)) {
                    const decoded = events.ddcCustomers.bucketCreated.v54100.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketCreated.v48013.is(event)) {
                    const decoded = events.ddcCustomers.bucketCreated.v48013.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketUpdated.name: {
                if (events.ddcCustomers.bucketUpdated.v63002.is(event)) {
                    const decoded = events.ddcCustomers.bucketUpdated.v63002.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketUpdated.v54100.is(event)) {
                    const decoded = events.ddcCustomers.bucketUpdated.v54100.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketUpdated.v48013.is(event)) {
                    const decoded = events.ddcCustomers.bucketUpdated.v48013.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketRemoved.name: {
                if (events.ddcCustomers.bucketRemoved.v63002.is(event)) {
                    const decoded = events.ddcCustomers.bucketRemoved.v63002.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketRemoved.v73047.is(event)) {
                    const decoded = events.ddcCustomers.bucketRemoved.v73047.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketRemoved.v54100.is(event)) {
                    const decoded = events.ddcCustomers.bucketRemoved.v54100.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else if (events.ddcCustomers.bucketRemoved.v48013.is(event)) {
                    const decoded = events.ddcCustomers.bucketRemoved.v48013.decode(event)
                    const bucketId = decoded.bucketId
                    await this.processBucketInfo(bucketId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketTotalNodesUsageUpdated.name: {
                if (events.ddcCustomers.bucketTotalNodesUsageUpdated.v63002.is(event)) {
                    const decoded = events.ddcCustomers.bucketTotalNodesUsageUpdated.v63002.decode(event)
                    const bucketId = decoded.bucketId
                    const bucketInfo = this._state.get(bucketId)
                    if (bucketInfo) {
                        bucketInfo.usage = {
                            block: block.height,
                            timestamp: new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`)),
                            transferredBytes: decoded.transferredBytes,
                            storedBytes: decoded.storedBytes,
                            numberOfPuts: decoded.numberOfPuts,
                            numberOfGets: decoded.numberOfGets,
                        }
                    }
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcCustomers.bucketTotalCustomersUsageUpdated.name: {
                if (events.ddcCustomers.bucketTotalCustomersUsageUpdated.v63002.is(event)) {
                    const decoded = events.ddcCustomers.bucketTotalCustomersUsageUpdated.v63002.decode(event)
                    const bucketId = decoded.bucketId
                    const bucketInfo = this._state.get(bucketId)
                    if (bucketInfo) {
                        bucketInfo.usage = {
                            block: block.height,
                            timestamp: new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`)),
                            transferredBytes: decoded.transferredBytes,
                            storedBytes: decoded.storedBytes,
                            numberOfPuts: decoded.numberOfPuts,
                            numberOfGets: decoded.numberOfGets,
                        }
                    }
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
