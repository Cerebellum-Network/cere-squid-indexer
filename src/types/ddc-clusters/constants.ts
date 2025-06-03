import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const minErasureCodingRequiredLimit =  {
    v63002: new ConstantType(
        'DdcClusters.MinErasureCodingRequiredLimit',
        sts.number()
    ),
}

export const minErasureCodingTotalLimit =  {
    v63002: new ConstantType(
        'DdcClusters.MinErasureCodingTotalLimit',
        sts.number()
    ),
}

export const minReplicationTotalLimit =  {
    v63002: new ConstantType(
        'DdcClusters.MinReplicationTotalLimit',
        sts.number()
    ),
}
