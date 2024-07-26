import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface Bucket {
    bucketId: bigint
    ownerId: AccountId32
    clusterId: H160
    isPublic: boolean
}

export const Bucket: sts.Type<Bucket> = sts.struct(() => {
    return  {
        bucketId: sts.bigint(),
        ownerId: AccountId32,
        clusterId: H160,
        isPublic: sts.boolean(),
    }
})

export interface ClusterGovParams {
    treasuryShare: Perbill
    validatorsShare: Perbill
    clusterReserveShare: Perbill
    storageBondSize: bigint
    storageChillDelay: number
    storageUnbondingDelay: number
    unitPerMbStored: bigint
    unitPerMbStreamed: bigint
    unitPerPutRequest: bigint
    unitPerGetRequest: bigint
}

export type Perbill = number

export const ClusterGovParams: sts.Type<ClusterGovParams> = sts.struct(() => {
    return  {
        treasuryShare: Perbill,
        validatorsShare: Perbill,
        clusterReserveShare: Perbill,
        storageBondSize: sts.bigint(),
        storageChillDelay: sts.number(),
        storageUnbondingDelay: sts.number(),
        unitPerMbStored: sts.bigint(),
        unitPerMbStreamed: sts.bigint(),
        unitPerPutRequest: sts.bigint(),
        unitPerGetRequest: sts.bigint(),
    }
})

export const Perbill = sts.number()

export type H160 = Bytes

export interface StorageNode {
    pubKey: AccountId32
    providerId: AccountId32
    clusterId?: (H160 | undefined)
    props: StorageNodeProps
}

export interface StorageNodeProps {
    host: Bytes
    httpPort: number
    grpcPort: number
    p2PPort: number
    mode: StorageNodeMode
}

export type StorageNodeMode = StorageNodeMode_Cache | StorageNodeMode_Full | StorageNodeMode_Storage

export interface StorageNodeMode_Cache {
    __kind: 'Cache'
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
        httpPort: sts.number(),
        grpcPort: sts.number(),
        p2PPort: sts.number(),
        mode: StorageNodeMode,
    }
})

export const StorageNodeMode: sts.Type<StorageNodeMode> = sts.closedEnum(() => {
    return  {
        Cache: sts.unit(),
        Full: sts.unit(),
        Storage: sts.unit(),
    }
})

export type NodePubKey = NodePubKey_StoragePubKey

export interface NodePubKey_StoragePubKey {
    __kind: 'StoragePubKey'
    value: AccountId32
}

export type AccountId32 = Bytes

export const AccountId32 = sts.bytes()

export const H160 = sts.bytes()

export const NodePubKey: sts.Type<NodePubKey> = sts.closedEnum(() => {
    return  {
        StoragePubKey: AccountId32,
    }
})
