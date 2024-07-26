import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface EraRewardPointsPerNode {
    era: number
    points: bigint
}

export const EraRewardPointsPerNode: sts.Type<EraRewardPointsPerNode> = sts.struct(() => {
    return  {
        era: sts.number(),
        points: sts.bigint(),
    }
})

export interface EraRewardPoints {
    total: bigint
    individual: [AccountId32, bigint][]
}

export interface EraRewardsPaid {
    era: number
    reward: bigint
}

export const EraRewardsPaid: sts.Type<EraRewardsPaid> = sts.struct(() => {
    return  {
        era: sts.number(),
        reward: sts.bigint(),
    }
})

export type AccountId32 = Bytes

export const AccountId32 = sts.bytes()

export const EraRewardPoints: sts.Type<EraRewardPoints> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        individual: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
    }
})
