import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'
import * as v64000 from '../v64000'

export const palletId =  {
    v63002: new ConstantType(
        'DdcPayouts.PalletId',
        v63002.PalletId
    ),
}

export const validatorsQuorum =  {
    v64000: new ConstantType(
        'DdcPayouts.ValidatorsQuorum',
        v64000.Percent
    ),
}
