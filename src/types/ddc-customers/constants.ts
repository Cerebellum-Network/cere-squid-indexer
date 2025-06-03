import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'

export const palletId =  {
    /**
     *  The accounts's pallet id, used for deriving its sovereign account ID.
     */
    v63002: new ConstantType(
        'DdcCustomers.PalletId',
        v63002.PalletId
    ),
}

export const unlockingDelay =  {
    /**
     *  Number of eras that staked funds must remain locked for.
     */
    v63002: new ConstantType(
        'DdcCustomers.UnlockingDelay',
        sts.number()
    ),
}
