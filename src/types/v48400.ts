import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H160 = Bytes

export interface ClusterGovParams {
    treasuryShare: Perquintill
    validatorsShare: Perquintill
    clusterReserveShare: Perquintill
    storageBondSize: bigint
    storageChillDelay: number
    storageUnbondingDelay: number
    unitPerMbStored: bigint
    unitPerMbStreamed: bigint
    unitPerPutRequest: bigint
    unitPerGetRequest: bigint
}

export type Perquintill = bigint

export const ClusterGovParams: sts.Type<ClusterGovParams> = sts.struct(() => {
    return  {
        treasuryShare: Perquintill,
        validatorsShare: Perquintill,
        clusterReserveShare: Perquintill,
        storageBondSize: sts.bigint(),
        storageChillDelay: sts.number(),
        storageUnbondingDelay: sts.number(),
        unitPerMbStored: sts.bigint(),
        unitPerMbStreamed: sts.bigint(),
        unitPerPutRequest: sts.bigint(),
        unitPerGetRequest: sts.bigint(),
    }
})

export const Perquintill = sts.bigint()

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
        Full: sts.unit(),
        Storage: sts.unit(),
    }
})

export const AccountId32 = sts.bytes()

export const H160 = sts.bytes()
