import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v295 from '../v295'
import * as v297 from '../v297'

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     * Transfer succeeded. \[from, to, value\]
     */
    v295: new EventType(
        'Balances.Transfer',
        sts.tuple([v295.AccountId32, v295.AccountId32, sts.bigint()])
    ),
    /**
     * Transfer succeeded.
     */
    v297: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v297.AccountId32,
            to: v297.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
