import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v282 from '../v282'
import * as v283 from '../v283'
import * as v299 from '../v299'
import * as v47000 from '../v47000'
import * as v48016 from '../v48016'

export const blockHashCount =  {
    /**
     *  The maximum number of blocks to allow in mortal eras.
     */
    v266: new ConstantType(
        'System.BlockHashCount',
        v266.BlockNumber
    ),
}

export const maximumBlockWeight =  {
    /**
     *  The maximum weight of a block.
     */
    v266: new ConstantType(
        'System.MaximumBlockWeight',
        v266.Weight
    ),
}

export const dbWeight =  {
    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    v266: new ConstantType(
        'System.DbWeight',
        v266.RuntimeDbWeight
    ),
}

export const blockExecutionWeight =  {
    /**
     *  The base weight of executing a block, independent of the transactions in the block.
     */
    v266: new ConstantType(
        'System.BlockExecutionWeight',
        v266.Weight
    ),
}

export const extrinsicBaseWeight =  {
    /**
     *  The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
     */
    v266: new ConstantType(
        'System.ExtrinsicBaseWeight',
        v266.Weight
    ),
}

export const maximumBlockLength =  {
    /**
     *  The maximum length of a block (in bytes).
     */
    v266: new ConstantType(
        'System.MaximumBlockLength',
        sts.number()
    ),
}

export const blockWeights =  {
    /**
     *  The weight configuration (limits & base values) for each class of extrinsics and block.
     */
    v282: new ConstantType(
        'System.BlockWeights',
        v282.BlockWeights
    ),
    /**
     *  Block & extrinsics weights: base values and limits.
     */
    v47000: new ConstantType(
        'System.BlockWeights',
        v47000.BlockWeights
    ),
    /**
     *  Block & extrinsics weights: base values and limits.
     */
    v48016: new ConstantType(
        'System.BlockWeights',
        v48016.BlockWeights
    ),
}

export const blockLength =  {
    /**
     *  The maximum length of a block (in bytes).
     */
    v283: new ConstantType(
        'System.BlockLength',
        v283.BlockLength
    ),
}

export const version =  {
    /**
     *  Get the chain's current version.
     */
    v283: new ConstantType(
        'System.Version',
        v283.RuntimeVersion
    ),
    /**
     *  Get the chain's current version.
     */
    v299: new ConstantType(
        'System.Version',
        v299.RuntimeVersion
    ),
}

export const ss58Prefix =  {
    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    v283: new ConstantType(
        'System.SS58Prefix',
        sts.number()
    ),
}
