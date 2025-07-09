import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v48015 from '../v48015'
import * as v73160 from '../v73160'

export const palletId =  {
    v48015: new ConstantType(
        'DdcPayouts.PalletId',
        v48015.PalletId
    ),
}

export const validatorsQuorum =  {
    v73160: new ConstantType(
        'DdcPayouts.ValidatorsQuorum',
        v73160.Percent
    ),
}

export const unsignedPriority =  {
    v73160: new ConstantType(
        'DdcPayouts.UnsignedPriority',
        sts.bigint()
    ),
}
