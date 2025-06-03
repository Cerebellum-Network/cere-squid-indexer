import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'

export const bonded =  {
    name: 'DdcStaking.Bonded',
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v63002: new EventType(
        'DdcStaking.Bonded',
        sts.tuple([v63002.AccountId32, sts.bigint()])
    ),
}

export const unbonded =  {
    name: 'DdcStaking.Unbonded',
    /**
     * An account has unbonded this amount. \[stash, amount\]
     */
    v63002: new EventType(
        'DdcStaking.Unbonded',
        sts.tuple([v63002.AccountId32, sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'DdcStaking.Withdrawn',
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue. \[stash, amount\]
     */
    v63002: new EventType(
        'DdcStaking.Withdrawn',
        sts.tuple([v63002.AccountId32, sts.bigint()])
    ),
}

export const chilled =  {
    name: 'DdcStaking.Chilled',
    /**
     * An account has stopped participating as DDC network participant.
     * \[stash\]
     */
    v63002: new EventType(
        'DdcStaking.Chilled',
        v63002.AccountId32
    ),
}

export const chillSoon =  {
    name: 'DdcStaking.ChillSoon',
    /**
     * An account has declared desire to stop participating in DDC network soon.
     * \[stash, cluster, block\]
     */
    v63002: new EventType(
        'DdcStaking.ChillSoon',
        sts.tuple([v63002.AccountId32, v63002.H160, sts.number()])
    ),
}

export const activated =  {
    name: 'DdcStaking.Activated',
    /**
     * An account that started participating as DDC network participant.
     * \[stash\]
     */
    v63002: new EventType(
        'DdcStaking.Activated',
        v63002.AccountId32
    ),
}

export const leaveSoon =  {
    name: 'DdcStaking.LeaveSoon',
    /**
     * An account that started unbonding tokens below the minimum value set for the cluster
     * his DDC node is assigned to \[stash\]
     */
    v63002: new EventType(
        'DdcStaking.LeaveSoon',
        v63002.AccountId32
    ),
}

export const left =  {
    name: 'DdcStaking.Left',
    /**
     * An account that unbonded tokens below the minimum value set for the cluster his
     * DDC node was assigned to \[stash\]
     */
    v63002: new EventType(
        'DdcStaking.Left',
        v63002.AccountId32
    ),
}
