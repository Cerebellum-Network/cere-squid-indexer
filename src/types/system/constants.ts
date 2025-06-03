import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'
import * as v73038 from '../v73038'

export const blockWeights =  {
    /**
     *  Block & extrinsics weights: base values and limits.
     */
    v63002: new ConstantType(
        'System.BlockWeights',
        v63002.BlockWeights
    ),
}

export const blockLength =  {
    /**
     *  The maximum length of a block (in bytes).
     */
    v63002: new ConstantType(
        'System.BlockLength',
        v63002.BlockLength
    ),
}

export const blockHashCount =  {
    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    v63002: new ConstantType(
        'System.BlockHashCount',
        sts.number()
    ),
}

export const dbWeight =  {
    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    v63002: new ConstantType(
        'System.DbWeight',
        v63002.RuntimeDbWeight
    ),
}

export const version =  {
    /**
     *  Get the chain's current version.
     */
    v63002: new ConstantType(
        'System.Version',
        v63002.RuntimeVersion
    ),
    /**
     *  Get the chain's in-code version.
     */
    v73038: new ConstantType(
        'System.Version',
        v73038.RuntimeVersion
    ),
}

export const ss58Prefix =  {
    /**
     *  The designated SS58 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    v63002: new ConstantType(
        'System.SS58Prefix',
        sts.number()
    ),
}
