import {sts, Result, Option, Bytes, BitSequence} from './support'

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
    nodeProviderAuthContract?: (AccountId32 | undefined)
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
        nodeProviderAuthContract: sts.option(() => AccountId32),
    }
})

export type AccountId32 = Bytes

export type H160 = Bytes

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()
