import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface Bucket {
    bucketId: bigint
    ownerId: AccountId32
    clusterId: H160
    isPublic: boolean
    isRemoved: boolean
    totalCustomersUsage?: (CustomerUsage | undefined)
}

export interface CustomerUsage {
    transferredBytes: bigint
    storedBytes: bigint
    numberOfPuts: bigint
    numberOfGets: bigint
}

export type H160 = Bytes

export const Bucket: sts.Type<Bucket> = sts.struct(() => {
    return  {
        bucketId: sts.bigint(),
        ownerId: AccountId32,
        clusterId: H160,
        isPublic: sts.boolean(),
        isRemoved: sts.boolean(),
        totalCustomersUsage: sts.option(() => CustomerUsage),
    }
})

export const CustomerUsage: sts.Type<CustomerUsage> = sts.struct(() => {
    return  {
        transferredBytes: sts.bigint(),
        storedBytes: sts.bigint(),
        numberOfPuts: sts.bigint(),
        numberOfGets: sts.bigint(),
    }
})

export type AccountId32 = Bytes

export interface StorageNode {
    pubKey: AccountId32
    providerId: AccountId32
    clusterId?: (H160 | undefined)
    props: StorageNodeProps
}

export interface StorageNodeProps {
    host: Bytes
    domain: Bytes
    ssl: boolean
    httpPort: number
    grpcPort: number
    p2PPort: number
    mode: StorageNodeMode
}

export type StorageNodeMode = StorageNodeMode_Cache | StorageNodeMode_DAC | StorageNodeMode_Full | StorageNodeMode_Storage

export interface StorageNodeMode_Cache {
    __kind: 'Cache'
}

export interface StorageNodeMode_DAC {
    __kind: 'DAC'
}

export interface StorageNodeMode_Full {
    __kind: 'Full'
}

export interface StorageNodeMode_Storage {
    __kind: 'Storage'
}

export const StorageNode: sts.Type<StorageNode> = sts.struct(() => {
    return  {
        pubKey: AccountId32,
        providerId: AccountId32,
        clusterId: sts.option(() => H160),
        props: StorageNodeProps,
    }
})

export const StorageNodeProps: sts.Type<StorageNodeProps> = sts.struct(() => {
    return  {
        host: sts.bytes(),
        domain: sts.bytes(),
        ssl: sts.boolean(),
        httpPort: sts.number(),
        grpcPort: sts.number(),
        p2PPort: sts.number(),
        mode: StorageNodeMode,
    }
})

export const StorageNodeMode: sts.Type<StorageNodeMode> = sts.closedEnum(() => {
    return  {
        Cache: sts.unit(),
        DAC: sts.unit(),
        Full: sts.unit(),
        Storage: sts.unit(),
    }
})

export const AccountId32 = sts.bytes()

export const H160 = sts.bytes()
