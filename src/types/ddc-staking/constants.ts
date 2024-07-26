import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const defaultEdgeBondSize =  {
    /**
     *  Default bond size for a CDN participant.
     */
    v48001: new ConstantType(
        'DdcStaking.DefaultEdgeBondSize',
        sts.bigint()
    ),
}

export const defaultEdgeChillDelay =  {
    /**
     *  Default number or DDC eras required to pass before a CDN participant can chill.
     */
    v48001: new ConstantType(
        'DdcStaking.DefaultEdgeChillDelay',
        sts.number()
    ),
}

export const defaultStorageBondSize =  {
    /**
     *  Default bond size for a storage network participant.
     */
    v48001: new ConstantType(
        'DdcStaking.DefaultStorageBondSize',
        sts.bigint()
    ),
}

export const defaultStorageChillDelay =  {
    /**
     *  Default number or DDC eras required to pass before a storage participant can chill.
     */
    v48001: new ConstantType(
        'DdcStaking.DefaultStorageChillDelay',
        sts.number()
    ),
}

export const bondingDuration =  {
    /**
     *  Number of eras that staked funds must remain bonded for.
     */
    v48001: new ConstantType(
        'DdcStaking.BondingDuration',
        sts.number()
    ),
}
