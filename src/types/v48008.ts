import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface Cluster {
    clusterId: H160
    managerId: AccountId32
    props: ClusterProps
}

export interface ClusterProps {
    params: Bytes
    nodeProviderAuthContract: AccountId32
}

export const Cluster: sts.Type<Cluster> = sts.struct(() => {
    return  {
        clusterId: H160,
        managerId: AccountId32,
        props: ClusterProps,
    }
})

export const ClusterProps: sts.Type<ClusterProps> = sts.struct(() => {
    return  {
        params: sts.bytes(),
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
    params: Bytes
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
        params: sts.bytes(),
    }
})

export interface StorageNode {
    pubKey: AccountId32
    providerId: AccountId32
    clusterId?: (H160 | undefined)
    props: StorageNodeProps
}

export interface StorageNodeProps {
    params: Bytes
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
        params: sts.bytes(),
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

export type AccountId32 = Bytes

export type H160 = Bytes

export interface ClusterSettings {
    edgeBondSize: bigint
    edgeChillDelay: number
    storageBondSize: bigint
    storageChillDelay: number
}

export const ClusterSettings: sts.Type<ClusterSettings> = sts.struct(() => {
    return  {
        edgeBondSize: sts.bigint(),
        edgeChillDelay: sts.number(),
        storageBondSize: sts.bigint(),
        storageChillDelay: sts.number(),
    }
})

export const NodePubKey: sts.Type<NodePubKey> = sts.closedEnum(() => {
    return  {
        CDNPubKey: AccountId32,
        StoragePubKey: AccountId32,
    }
})

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()
