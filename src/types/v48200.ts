import {sts, Result, Option, Bytes, BitSequence} from './support'

export type AccountId32 = Bytes

export interface Type_550 {
    stash: AccountId32
    total: bigint
    active: bigint
    chilling?: (number | undefined)
    unlocking: Type_552[]
}

export interface Type_552 {
    value: bigint
    era: number
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
        era: sts.number(),
    }
})

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

export const AccountId32 = sts.bytes()
