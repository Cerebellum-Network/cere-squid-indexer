import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H160 = Bytes

export interface Cluster {
    clusterId: H160
    managerId: AccountId32
    reserveId: AccountId32
    props: ClusterProps
}

export interface ClusterProps {
    nodeProviderAuthContract?: (AccountId32 | undefined)
    erasureCodingRequired: number
    erasureCodingTotal: number
    replicationTotal: number
}

export type AccountId32 = Bytes

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
        nodeProviderAuthContract: sts.option(() => AccountId32),
        erasureCodingRequired: sts.number(),
        erasureCodingTotal: sts.number(),
        replicationTotal: sts.number(),
    }
})

export const AccountId32 = sts.bytes()

export const H160 = sts.bytes()
