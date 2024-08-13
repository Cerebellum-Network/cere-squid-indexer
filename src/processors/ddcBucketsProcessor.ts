import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import {
    logStorageError,
    throwUnsupportedSpec,
    throwUnsupportedStorageSpec,
    toCereAddress,
} from '../utils'

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

export class DdcBucketsProcessor {
    private state = new Map<bigint, DdcBucketInfo>()

    private async processDdcBucketsEvents(
        bucketId: bigint,
        block: BlockHeader,
    ) {
        let bucketInfo: DdcBucketInfo | undefined
        if (storage.ddcCustomers.buckets.v48013.is(block)) {
            if (block.specVersion >= 48017) {
                console.log(`Unexpected storage layout version selection. Selected v48013 for spec version ${block._runtime.specVersion} which is higher than the next v48017.`)
            }
            const bucket = await storage.ddcCustomers.buckets.v48013.get(
                block,
                bucketId,
            )
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
        } else if (storage.ddcCustomers.buckets.v48017.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v48017.get(
                block,
                bucketId,
            )
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
        } else if (storage.ddcCustomers.buckets.v50000.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v50000.get(
                block,
                bucketId,
            )
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
        } else if (storage.ddcCustomers.buckets.v54100.is(block)) {
            const bucket = await storage.ddcCustomers.buckets.v54100.get(
                block,
                bucketId,
            )
            if (bucket) {
                bucketInfo = {
                    ownerId: bucket.ownerId,
                    clusterId: bucket.clusterId,
                    bucketId: bucketId,
                    isPublic: bucket.isPublic,
                    isRemoved: bucket.isRemoved,
                    transferredBytes:
                        bucket.totalCustomersUsage?.transferredBytes ?? 0n,
                    storedBytes: bucket.totalCustomersUsage?.storedBytes ?? 0n,
                    numberOfPuts:
                        bucket.totalCustomersUsage?.numberOfPuts ?? 0n,
                    numberOfGets:
                        bucket.totalCustomersUsage?.numberOfGets ?? 0n,
                }
            }
        } else {
            throwUnsupportedStorageSpec(block)
        }
        if (bucketInfo) {
            bucketInfo.ownerId = toCereAddress(bucketInfo.ownerId)
            this.state.set(bucketId, bucketInfo)
        } else {
            logStorageError('bucket', bucketId, block)
        }
    }

    getState(): Map<bigint, DdcBucketInfo> {
        return this.state
    }

    async process(event: Event, block: BlockHeader) {
        switch (event.name) {
            case events.ddcCustomers.bucketCreated.name: {
                if (events.ddcCustomers.bucketCreated.v48013.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketCreated.v48013.decode(event)
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketCreated.v48800.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketCreated.v48800.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketCreated.v54100.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketCreated.v54100.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcCustomers.bucketUpdated.name: {
                if (events.ddcCustomers.bucketUpdated.v48017.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketUpdated.v48017.decode(event)
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketUpdated.v48800.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketUpdated.v48800.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else if (events.ddcCustomers.bucketUpdated.v54100.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketUpdated.v54100.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcCustomers.bucketRemoved.name: {
                if (events.ddcCustomers.bucketRemoved.v50000.is(event)) {
                    const bucketId =
                        events.ddcCustomers.bucketRemoved.v50000.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcCustomers.bucketTotalNodesUsageUpdated.name: {
                if (
                    events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.is(
                        event,
                    )
                ) {
                    const bucketId =
                        events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcCustomers.bucketTotalCustomersUsageUpdated.name: {
                if (
                    events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.is(
                        event,
                    )
                ) {
                    const bucketId =
                        events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.decode(
                            event,
                        ).bucketId
                    await this.processDdcBucketsEvents(bucketId, block)
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
