import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v54100 from '../v54100'

export const palletId =  {
    /**
     *  The accounts's pallet id, used for deriving its sovereign account ID.
     */
    v54100: new ConstantType(
        'DdcVerification.PalletId',
        v54100.PalletId
    ),
}
