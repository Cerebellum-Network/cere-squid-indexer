import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const minErasureCodingRequiredLimit =  {
    v53003: new ConstantType(
        'DdcClusters.MinErasureCodingRequiredLimit',
        sts.number()
    ),
}

export const minErasureCodingTotalLimit =  {
    v53003: new ConstantType(
        'DdcClusters.MinErasureCodingTotalLimit',
        sts.number()
    ),
}

export const minReplicationTotalLimit =  {
    v53003: new ConstantType(
        'DdcClusters.MinReplicationTotalLimit',
        sts.number()
    ),
}
