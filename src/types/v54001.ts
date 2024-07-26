import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface ClusterNodesStats {
    awaitValidation: number
    validationSucceeded: number
    validationFailed: number
}

export const ClusterNodesStats: sts.Type<ClusterNodesStats> = sts.struct(() => {
    return  {
        awaitValidation: sts.number(),
        validationSucceeded: sts.number(),
        validationFailed: sts.number(),
    }
})

export type NodePubKey = NodePubKey_StoragePubKey

export interface NodePubKey_StoragePubKey {
    __kind: 'StoragePubKey'
    value: AccountId32
}

export interface ClusterNodeState {
    kind: ClusterNodeKind
    status: ClusterNodeStatus
    addedAt: number
}

export type ClusterNodeStatus = ClusterNodeStatus_AwaitsValidation | ClusterNodeStatus_ValidationFailed | ClusterNodeStatus_ValidationSucceeded

export interface ClusterNodeStatus_AwaitsValidation {
    __kind: 'AwaitsValidation'
}

export interface ClusterNodeStatus_ValidationFailed {
    __kind: 'ValidationFailed'
}

export interface ClusterNodeStatus_ValidationSucceeded {
    __kind: 'ValidationSucceeded'
}

export type ClusterNodeKind = ClusterNodeKind_External | ClusterNodeKind_Genesis

export interface ClusterNodeKind_External {
    __kind: 'External'
}

export interface ClusterNodeKind_Genesis {
    __kind: 'Genesis'
}

export const ClusterNodeState: sts.Type<ClusterNodeState> = sts.struct(() => {
    return  {
        kind: ClusterNodeKind,
        status: ClusterNodeStatus,
        addedAt: sts.number(),
    }
})

export const ClusterNodeStatus: sts.Type<ClusterNodeStatus> = sts.closedEnum(() => {
    return  {
        AwaitsValidation: sts.unit(),
        ValidationFailed: sts.unit(),
        ValidationSucceeded: sts.unit(),
    }
})

export const ClusterNodeKind: sts.Type<ClusterNodeKind> = sts.closedEnum(() => {
    return  {
        External: sts.unit(),
        Genesis: sts.unit(),
    }
})

export type H160 = Bytes

export interface Cluster {
    clusterId: H160
    managerId: AccountId32
    reserveId: AccountId32
    props: ClusterProps
    status: ClusterStatus
}

export type ClusterStatus = ClusterStatus_Activated | ClusterStatus_Bonded | ClusterStatus_Unbonded | ClusterStatus_Unbonding

export interface ClusterStatus_Activated {
    __kind: 'Activated'
}

export interface ClusterStatus_Bonded {
    __kind: 'Bonded'
}

export interface ClusterStatus_Unbonded {
    __kind: 'Unbonded'
}

export interface ClusterStatus_Unbonding {
    __kind: 'Unbonding'
}

export interface ClusterProps {
    nodeProviderAuthContract?: (AccountId32 | undefined)
    erasureCodingRequired: number
    erasureCodingTotal: number
    replicationTotal: number
}

export const Cluster: sts.Type<Cluster> = sts.struct(() => {
    return  {
        clusterId: H160,
        managerId: AccountId32,
        reserveId: AccountId32,
        props: ClusterProps,
        status: ClusterStatus,
    }
})

export const ClusterStatus: sts.Type<ClusterStatus> = sts.closedEnum(() => {
    return  {
        Activated: sts.unit(),
        Bonded: sts.unit(),
        Unbonded: sts.unit(),
        Unbonding: sts.unit(),
    }
})

export const ClusterProps: sts.Type<ClusterProps> = sts.struct(() => {
    return  {
        nodeProviderAuthContract: sts.option(() => AccountId32),
        erasureCodingRequired: sts.number(),
        erasureCodingTotal: sts.number(),
        replicationTotal: sts.number(),
    }
})

export interface Type_550 {
    stash: AccountId32
    total: bigint
    active: bigint
    chilling?: (number | undefined)
    unlocking: Type_552[]
}

export interface Type_552 {
    value: bigint
    block: number
}

export const Type_550: sts.Type<Type_550> = sts.struct(() => {
    return  {
        stash: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        chilling: sts.option(() => sts.number()),
        unlocking: sts.array(() => Type_552),
    }
})

export const Type_552: sts.Type<Type_552> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        block: sts.number(),
    }
})

export type AccountId32 = Bytes

export const AccountId32 = sts.bytes()

export const NodePubKey: sts.Type<NodePubKey> = sts.closedEnum(() => {
    return  {
        StoragePubKey: AccountId32,
    }
})

export const H160 = sts.bytes()
