import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48001 from '../v48001'
import * as v48003 from '../v48003'
import * as v48008 from '../v48008'
import * as v48014 from '../v48014'
import * as v48015 from '../v48015'
import * as v48016 from '../v48016'
import * as v48200 from '../v48200'

export const bonded =  {
    name: 'DdcStaking.Bonded',
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v48001: new EventType(
        'DdcStaking.Bonded',
        sts.tuple([v48001.AccountId32, sts.bigint()])
    ),
}

export const unbonded =  {
    name: 'DdcStaking.Unbonded',
    /**
     * An account has unbonded this amount. \[stash, amount\]
     */
    v48001: new EventType(
        'DdcStaking.Unbonded',
        sts.tuple([v48001.AccountId32, sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'DdcStaking.Withdrawn',
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue. \[stash, amount\]
     */
    v48001: new EventType(
        'DdcStaking.Withdrawn',
        sts.tuple([v48001.AccountId32, sts.bigint()])
    ),
}

export const chilled =  {
    name: 'DdcStaking.Chilled',
    /**
     * An account has stopped participating as either a storage network or CDN participant.
     * \[stash\]
     */
    v48001: new EventType(
        'DdcStaking.Chilled',
        v48001.AccountId32
    ),
}

export const chillSoon =  {
    name: 'DdcStaking.ChillSoon',
    /**
     * An account has declared desire to stop participating in CDN or storage network soon.
     * \[stash, cluster, era\]
     */
    v48001: new EventType(
        'DdcStaking.ChillSoon',
        sts.tuple([v48001.AccountId32, sts.number(), sts.number()])
    ),
    /**
     * An account has declared desire to stop participating in CDN or storage network soon.
     * \[stash, cluster, era\]
     */
    v48008: new EventType(
        'DdcStaking.ChillSoon',
        sts.tuple([v48008.AccountId32, v48008.H160, sts.number()])
    ),
    /**
     * An account has declared desire to stop participating in CDN or storage network soon.
     * \[stash, cluster, era\]
     */
    v48200: new EventType(
        'DdcStaking.ChillSoon',
        sts.tuple([v48200.AccountId32, sts.number(), sts.number()])
    ),
    /**
     * An account has declared desire to stop participating in CDN or storage network soon.
     * \[stash, cluster, block\]
     */
    v48015: new EventType(
        'DdcStaking.ChillSoon',
        sts.tuple([v48015.AccountId32, v48015.H160, sts.number()])
    ),
}

export const payoutNodes =  {
    name: 'DdcStaking.PayoutNodes',
    v48003: new EventType(
        'DdcStaking.PayoutNodes',
        sts.tuple([sts.number(), v48003.EraRewardPoints, sts.bigint()])
    ),
}

export const activated =  {
    name: 'DdcStaking.Activated',
    /**
     * An account that started participating as either a storage network or CDN participant.
     * \[stash\]
     */
    v48014: new EventType(
        'DdcStaking.Activated',
        v48014.AccountId32
    ),
}

export const leaveSoon =  {
    name: 'DdcStaking.LeaveSoon',
    /**
     * An account that started unbonding tokens below the minimum value set for the cluster
     * his CDN or Storage node is assigned to \[stash\]
     */
    v48016: new EventType(
        'DdcStaking.LeaveSoon',
        v48016.AccountId32
    ),
}

export const left =  {
    name: 'DdcStaking.Left',
    /**
     * An account that unbonded tokens below the minimum value set for the cluster his
     * CDN or Storage node was assigned to \[stash\]
     */
    v48016: new EventType(
        'DdcStaking.Left',
        v48016.AccountId32
    ),
}
