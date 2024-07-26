import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'

export const palletId =  {
    /**
     *  The accounts's pallet id, used for deriving its sovereign account ID.
     */
    v48013: new ConstantType(
        'DdcCustomers.PalletId',
        v48013.PalletId
    ),
}

export const unlockingDelay =  {
    /**
     *  Number of eras that staked funds must remain locked for.
     */
    v48013: new ConstantType(
        'DdcCustomers.UnlockingDelay',
        sts.number()
    ),
}
