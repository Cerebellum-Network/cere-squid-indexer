import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface Bucket {
    bucketId: bigint
    ownerId: AccountId32
    clusterId: H160
    isPublic: boolean
}

export type H160 = Bytes

export type AccountId32 = Bytes

export const Bucket: sts.Type<Bucket> = sts.struct(() => {
    return  {
        bucketId: sts.bigint(),
        ownerId: AccountId32,
        clusterId: H160,
        isPublic: sts.boolean(),
    }
})

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()
