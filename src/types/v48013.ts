import {sts, Result, Option, Bytes, BitSequence} from './support'

export const PalletId = sts.bytes()

export interface Bucket {
    bucketId: bigint
    ownerId: AccountId32
    clusterId: H160
}

export const Bucket: sts.Type<Bucket> = sts.struct(() => {
    return  {
        bucketId: sts.bigint(),
        ownerId: AccountId32,
        clusterId: H160,
    }
})

export interface AccountsLedger {
    owner: AccountId32
    total: bigint
    active: bigint
    unlocking: Type_568[]
}

export interface Type_568 {
    value: bigint
    block: number
}

export const AccountsLedger: sts.Type<AccountsLedger> = sts.struct(() => {
    return  {
        owner: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        unlocking: sts.array(() => Type_568),
    }
})

export const Type_568: sts.Type<Type_568> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        block: sts.number(),
    }
})

export interface ClusterGovParams {
    treasuryShare: Perbill
    validatorsShare: Perbill
    clusterReserveShare: Perbill
    cdnBondSize: bigint
    cdnChillDelay: number
    cdnUnbondingDelay: number
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
        cdnBondSize: sts.bigint(),
        cdnChillDelay: sts.number(),
        cdnUnbondingDelay: sts.number(),
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

export interface Cluster {
    clusterId: H160
    managerId: AccountId32
    reserveId: AccountId32
    props: ClusterProps
}

export interface ClusterProps {
    nodeProviderAuthContract: AccountId32
}

export const Cluster: sts.Type<Cluster> = sts.struct(() => {
    return  {
        clusterId: H160,
        managerId: AccountId32,
        reserveId: AccountId32,
        props: ClusterProps,
    }
})

export const ClusterProps: sts.Type<ClusterProps> = sts.struct(() => {
    return  {
        nodeProviderAuthContract: AccountId32,
    }
})

export interface CDNNode {
    pubKey: AccountId32
    providerId: AccountId32
    clusterId?: (H160 | undefined)
    props: CDNNodeProps
}

export interface CDNNodeProps {
    host: Bytes
    httpPort: number
    grpcPort: number
    p2PPort: number
}

export const CDNNode: sts.Type<CDNNode> = sts.struct(() => {
    return  {
        pubKey: AccountId32,
        providerId: AccountId32,
        clusterId: sts.option(() => H160),
        props: CDNNodeProps,
    }
})

export const CDNNodeProps: sts.Type<CDNNodeProps> = sts.struct(() => {
    return  {
        host: sts.bytes(),
        httpPort: sts.number(),
        grpcPort: sts.number(),
        p2PPort: sts.number(),
    }
})

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
    }
})

export type NodePubKey = NodePubKey_CDNPubKey | NodePubKey_StoragePubKey

export interface NodePubKey_CDNPubKey {
    __kind: 'CDNPubKey'
    value: AccountId32
}

export interface NodePubKey_StoragePubKey {
    __kind: 'StoragePubKey'
    value: AccountId32
}

export const NodePubKey: sts.Type<NodePubKey> = sts.closedEnum(() => {
    return  {
        CDNPubKey: AccountId32,
        StoragePubKey: AccountId32,
    }
})

export type H160 = Bytes

export type AccountId32 = Bytes

export interface Type_561 {
    stash: AccountId32
    total: bigint
    active: bigint
    chilling?: (number | undefined)
    unlocking: Type_563[]
}

export interface Type_563 {
    value: bigint
    block: number
}

export const Type_561: sts.Type<Type_561> = sts.struct(() => {
    return  {
        stash: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        chilling: sts.option(() => sts.number()),
        unlocking: sts.array(() => Type_563),
    }
})

export const Type_563: sts.Type<Type_563> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        block: sts.number(),
    }
})

export const AccountId32 = sts.bytes()

export const H160 = sts.bytes()
