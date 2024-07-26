import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48001 from '../v48001'
import * as v48003 from '../v48003'
import * as v48008 from '../v48008'
import * as v48013 from '../v48013'
import * as v48015 from '../v48015'
import * as v48016 from '../v48016'
import * as v48017 from '../v48017'
import * as v48200 from '../v48200'
import * as v54001 from '../v54001'

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    v48001: new StorageType('DdcStaking.Bonded', 'Optional', [v48001.AccountId32], v48001.AccountId32) as BondedV48001,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface BondedV48001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48001.AccountId32): Promise<(v48001.AccountId32 | undefined)>
    getMany(block: Block, keys: v48001.AccountId32[]): Promise<(v48001.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v48001.AccountId32[]>
    getKeys(block: Block, key: v48001.AccountId32): Promise<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<v48001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48001.AccountId32, v: (v48001.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v48001.AccountId32): Promise<[k: v48001.AccountId32, v: (v48001.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48001.AccountId32, v: (v48001.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<[k: v48001.AccountId32, v: (v48001.AccountId32 | undefined)][]>
}

export const settings =  {
    /**
     *  DDC clusters staking settings.
     */
    v48001: new StorageType('DdcStaking.Settings', 'Default', [sts.number()], v48001.ClusterSettings) as SettingsV48001,
    /**
     *  DDC clusters staking settings.
     */
    v48008: new StorageType('DdcStaking.Settings', 'Default', [v48008.H160], v48008.ClusterSettings) as SettingsV48008,
    /**
     *  DDC clusters staking settings.
     */
    v48200: new StorageType('DdcStaking.Settings', 'Default', [sts.number()], v48200.ClusterSettings) as SettingsV48200,
}

/**
 *  DDC clusters staking settings.
 */
export interface SettingsV48001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48001.ClusterSettings
    get(block: Block, key: number): Promise<(v48001.ClusterSettings | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v48001.ClusterSettings | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v48001.ClusterSettings | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v48001.ClusterSettings | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v48001.ClusterSettings | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v48001.ClusterSettings | undefined)][]>
}

/**
 *  DDC clusters staking settings.
 */
export interface SettingsV48008  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48008.ClusterSettings
    get(block: Block, key: v48008.H160): Promise<(v48008.ClusterSettings | undefined)>
    getMany(block: Block, keys: v48008.H160[]): Promise<(v48008.ClusterSettings | undefined)[]>
    getKeys(block: Block): Promise<v48008.H160[]>
    getKeys(block: Block, key: v48008.H160): Promise<v48008.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.H160): AsyncIterable<v48008.H160[]>
    getPairs(block: Block): Promise<[k: v48008.H160, v: (v48008.ClusterSettings | undefined)][]>
    getPairs(block: Block, key: v48008.H160): Promise<[k: v48008.H160, v: (v48008.ClusterSettings | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.H160, v: (v48008.ClusterSettings | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.H160): AsyncIterable<[k: v48008.H160, v: (v48008.ClusterSettings | undefined)][]>
}

/**
 *  DDC clusters staking settings.
 */
export interface SettingsV48200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48200.ClusterSettings
    get(block: Block, key: number): Promise<(v48200.ClusterSettings | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v48200.ClusterSettings | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v48200.ClusterSettings | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v48200.ClusterSettings | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v48200.ClusterSettings | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v48200.ClusterSettings | undefined)][]>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v48001: new StorageType('DdcStaking.Ledger', 'Optional', [v48001.AccountId32], v48001.Type_550) as LedgerV48001,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v48013: new StorageType('DdcStaking.Ledger', 'Optional', [v48013.AccountId32], v48013.Type_561) as LedgerV48013,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v48200: new StorageType('DdcStaking.Ledger', 'Optional', [v48200.AccountId32], v48200.Type_550) as LedgerV48200,
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v48015: new StorageType('DdcStaking.Ledger', 'Optional', [v48015.AccountId32], v48015.Type_570) as LedgerV48015,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV48001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48001.AccountId32): Promise<(v48001.Type_550 | undefined)>
    getMany(block: Block, keys: v48001.AccountId32[]): Promise<(v48001.Type_550 | undefined)[]>
    getKeys(block: Block): Promise<v48001.AccountId32[]>
    getKeys(block: Block, key: v48001.AccountId32): Promise<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<v48001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48001.AccountId32, v: (v48001.Type_550 | undefined)][]>
    getPairs(block: Block, key: v48001.AccountId32): Promise<[k: v48001.AccountId32, v: (v48001.Type_550 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48001.AccountId32, v: (v48001.Type_550 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<[k: v48001.AccountId32, v: (v48001.Type_550 | undefined)][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v48013.Type_561 | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v48013.Type_561 | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v48013.Type_561 | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v48013.Type_561 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v48013.Type_561 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v48013.Type_561 | undefined)][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV48200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48200.AccountId32): Promise<(v48200.Type_550 | undefined)>
    getMany(block: Block, keys: v48200.AccountId32[]): Promise<(v48200.Type_550 | undefined)[]>
    getKeys(block: Block): Promise<v48200.AccountId32[]>
    getKeys(block: Block, key: v48200.AccountId32): Promise<v48200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48200.AccountId32): AsyncIterable<v48200.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48200.AccountId32, v: (v48200.Type_550 | undefined)][]>
    getPairs(block: Block, key: v48200.AccountId32): Promise<[k: v48200.AccountId32, v: (v48200.Type_550 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48200.AccountId32, v: (v48200.Type_550 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48200.AccountId32): AsyncIterable<[k: v48200.AccountId32, v: (v48200.Type_550 | undefined)][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV48015  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48015.AccountId32): Promise<(v48015.Type_570 | undefined)>
    getMany(block: Block, keys: v48015.AccountId32[]): Promise<(v48015.Type_570 | undefined)[]>
    getKeys(block: Block): Promise<v48015.AccountId32[]>
    getKeys(block: Block, key: v48015.AccountId32): Promise<v48015.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48015.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48015.AccountId32): AsyncIterable<v48015.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48015.AccountId32, v: (v48015.Type_570 | undefined)][]>
    getPairs(block: Block, key: v48015.AccountId32): Promise<[k: v48015.AccountId32, v: (v48015.Type_570 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48015.AccountId32, v: (v48015.Type_570 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48015.AccountId32): AsyncIterable<[k: v48015.AccountId32, v: (v48015.Type_570 | undefined)][]>
}

export const edges =  {
    /**
     *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
     *  participate into.
     */
    v48001: new StorageType('DdcStaking.Edges', 'Optional', [v48001.AccountId32], sts.number()) as EdgesV48001,
    /**
     *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
     *  participate into.
     */
    v48008: new StorageType('DdcStaking.Edges', 'Optional', [v48008.AccountId32], v48008.H160) as EdgesV48008,
    /**
     *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
     *  participate into.
     */
    v48200: new StorageType('DdcStaking.Edges', 'Optional', [v48200.AccountId32], sts.number()) as EdgesV48200,
}

/**
 *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
 *  participate into.
 */
export interface EdgesV48001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48001.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v48001.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v48001.AccountId32[]>
    getKeys(block: Block, key: v48001.AccountId32): Promise<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<v48001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48001.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v48001.AccountId32): Promise<[k: v48001.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48001.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<[k: v48001.AccountId32, v: (number | undefined)][]>
}

/**
 *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
 *  participate into.
 */
export interface EdgesV48008  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48008.AccountId32): Promise<(v48008.H160 | undefined)>
    getMany(block: Block, keys: v48008.AccountId32[]): Promise<(v48008.H160 | undefined)[]>
    getKeys(block: Block): Promise<v48008.AccountId32[]>
    getKeys(block: Block, key: v48008.AccountId32): Promise<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<v48008.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
    getPairs(block: Block, key: v48008.AccountId32): Promise<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
}

/**
 *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
 *  participate into.
 */
export interface EdgesV48200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48200.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v48200.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v48200.AccountId32[]>
    getKeys(block: Block, key: v48200.AccountId32): Promise<v48200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48200.AccountId32): AsyncIterable<v48200.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48200.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v48200.AccountId32): Promise<[k: v48200.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48200.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48200.AccountId32): AsyncIterable<[k: v48200.AccountId32, v: (number | undefined)][]>
}

export const storages =  {
    /**
     *  The map of (wannabe) storage network participants stash keys to the DDC cluster ID they wish
     *  to participate into..
     */
    v48001: new StorageType('DdcStaking.Storages', 'Optional', [v48001.AccountId32], sts.number()) as StoragesV48001,
    /**
     *  The map of (wannabe) storage network participants stash keys to the DDC cluster ID they wish
     *  to participate into.
     */
    v48008: new StorageType('DdcStaking.Storages', 'Optional', [v48008.AccountId32], v48008.H160) as StoragesV48008,
    /**
     *  The map of (wannabe) storage network participants stash keys to the DDC cluster ID they wish
     *  to participate into..
     */
    v48200: new StorageType('DdcStaking.Storages', 'Optional', [v48200.AccountId32], sts.number()) as StoragesV48200,
    /**
     *  The map of (wannabe) Storage nodes participants stash keys to the DDC cluster ID they
     *  wish to participate into.
     */
    v48015: new StorageType('DdcStaking.Storages', 'Optional', [v48015.AccountId32], v48015.H160) as StoragesV48015,
}

/**
 *  The map of (wannabe) storage network participants stash keys to the DDC cluster ID they wish
 *  to participate into..
 */
export interface StoragesV48001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48001.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v48001.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v48001.AccountId32[]>
    getKeys(block: Block, key: v48001.AccountId32): Promise<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<v48001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48001.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v48001.AccountId32): Promise<[k: v48001.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48001.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48001.AccountId32): AsyncIterable<[k: v48001.AccountId32, v: (number | undefined)][]>
}

/**
 *  The map of (wannabe) storage network participants stash keys to the DDC cluster ID they wish
 *  to participate into.
 */
export interface StoragesV48008  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48008.AccountId32): Promise<(v48008.H160 | undefined)>
    getMany(block: Block, keys: v48008.AccountId32[]): Promise<(v48008.H160 | undefined)[]>
    getKeys(block: Block): Promise<v48008.AccountId32[]>
    getKeys(block: Block, key: v48008.AccountId32): Promise<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<v48008.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
    getPairs(block: Block, key: v48008.AccountId32): Promise<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<[k: v48008.AccountId32, v: (v48008.H160 | undefined)][]>
}

/**
 *  The map of (wannabe) storage network participants stash keys to the DDC cluster ID they wish
 *  to participate into..
 */
export interface StoragesV48200  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48200.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v48200.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v48200.AccountId32[]>
    getKeys(block: Block, key: v48200.AccountId32): Promise<v48200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48200.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48200.AccountId32): AsyncIterable<v48200.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48200.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v48200.AccountId32): Promise<[k: v48200.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48200.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48200.AccountId32): AsyncIterable<[k: v48200.AccountId32, v: (number | undefined)][]>
}

/**
 *  The map of (wannabe) Storage nodes participants stash keys to the DDC cluster ID they
 *  wish to participate into.
 */
export interface StoragesV48015  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48015.AccountId32): Promise<(v48015.H160 | undefined)>
    getMany(block: Block, keys: v48015.AccountId32[]): Promise<(v48015.H160 | undefined)[]>
    getKeys(block: Block): Promise<v48015.AccountId32[]>
    getKeys(block: Block, key: v48015.AccountId32): Promise<v48015.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48015.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48015.AccountId32): AsyncIterable<v48015.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48015.AccountId32, v: (v48015.H160 | undefined)][]>
    getPairs(block: Block, key: v48015.AccountId32): Promise<[k: v48015.AccountId32, v: (v48015.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48015.AccountId32, v: (v48015.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48015.AccountId32): AsyncIterable<[k: v48015.AccountId32, v: (v48015.H160 | undefined)][]>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    v48001: new StorageType('DdcStaking.CurrentEra', 'Optional', [], sts.number()) as CurrentEraV48001,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV48001  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const rewards =  {
    /**
     *  Map from all "stash" accounts to the total paid out rewards
     * 
     *  P.S. Not part of Mainnet
     */
    v48003: new StorageType('DdcStaking.Rewards', 'Default', [v48003.AccountId32], sts.bigint()) as RewardsV48003,
}

/**
 *  Map from all "stash" accounts to the total paid out rewards
 * 
 *  P.S. Not part of Mainnet
 */
export interface RewardsV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v48003.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v48003.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v48003.AccountId32[]>
    getKeys(block: Block, key: v48003.AccountId32): Promise<v48003.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48003.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48003.AccountId32): AsyncIterable<v48003.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48003.AccountId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v48003.AccountId32): Promise<[k: v48003.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48003.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48003.AccountId32): AsyncIterable<[k: v48003.AccountId32, v: (bigint | undefined)][]>
}

export const paidErasPerNode =  {
    /**
     *  Map from all "stash" accounts to the paid out rewards per era
     * 
     *  P.S. Not part of Mainnet
     */
    v48003: new StorageType('DdcStaking.PaidErasPerNode', 'Default', [v48003.AccountId32], sts.array(() => v48003.EraRewardsPaid)) as PaidErasPerNodeV48003,
}

/**
 *  Map from all "stash" accounts to the paid out rewards per era
 * 
 *  P.S. Not part of Mainnet
 */
export interface PaidErasPerNodeV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48003.EraRewardsPaid[]
    get(block: Block, key: v48003.AccountId32): Promise<(v48003.EraRewardsPaid[] | undefined)>
    getMany(block: Block, keys: v48003.AccountId32[]): Promise<(v48003.EraRewardsPaid[] | undefined)[]>
    getKeys(block: Block): Promise<v48003.AccountId32[]>
    getKeys(block: Block, key: v48003.AccountId32): Promise<v48003.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48003.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48003.AccountId32): AsyncIterable<v48003.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48003.AccountId32, v: (v48003.EraRewardsPaid[] | undefined)][]>
    getPairs(block: Block, key: v48003.AccountId32): Promise<[k: v48003.AccountId32, v: (v48003.EraRewardsPaid[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48003.AccountId32, v: (v48003.EraRewardsPaid[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48003.AccountId32): AsyncIterable<[k: v48003.AccountId32, v: (v48003.EraRewardsPaid[] | undefined)][]>
}

export const paidEras =  {
    /**
     *  Map to check if CDN participants received payments for specific era
     * 
     *  Used to avoid double-spend in method [payout_stakers]
     */
    v48003: new StorageType('DdcStaking.PaidEras', 'Default', [sts.number()], sts.boolean()) as PaidErasV48003,
}

/**
 *  Map to check if CDN participants received payments for specific era
 * 
 *  Used to avoid double-spend in method [payout_stakers]
 */
export interface PaidErasV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: number): Promise<(boolean | undefined)>
    getMany(block: Block, keys: number[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (boolean | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (boolean | undefined)][]>
}

export const erasEdgesRewardPoints =  {
    /**
     *  The reward each CDN participant earned in the era.
     *  Mapping from Era to vector of CDN participants and respective rewards
     * 
     *  See also [`pallet_staking::ErasRewardPoints`].
     */
    v48003: new StorageType('DdcStaking.ErasEdgesRewardPoints', 'Default', [sts.number()], v48003.EraRewardPoints) as ErasEdgesRewardPointsV48003,
}

/**
 *  The reward each CDN participant earned in the era.
 *  Mapping from Era to vector of CDN participants and respective rewards
 * 
 *  See also [`pallet_staking::ErasRewardPoints`].
 */
export interface ErasEdgesRewardPointsV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48003.EraRewardPoints
    get(block: Block, key: number): Promise<(v48003.EraRewardPoints | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v48003.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v48003.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v48003.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v48003.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v48003.EraRewardPoints | undefined)][]>
}

export const erasEdgesRewardPointsPerNode =  {
    /**
     *  The reward each CDN participant earned in the era.
     *  Mapping from each CDN participant to vector of eras and rewards
     * 
     *  P.S. Not part of Mainnet
     */
    v48003: new StorageType('DdcStaking.ErasEdgesRewardPointsPerNode', 'Default', [v48003.AccountId32], sts.array(() => v48003.EraRewardPointsPerNode)) as ErasEdgesRewardPointsPerNodeV48003,
}

/**
 *  The reward each CDN participant earned in the era.
 *  Mapping from each CDN participant to vector of eras and rewards
 * 
 *  P.S. Not part of Mainnet
 */
export interface ErasEdgesRewardPointsPerNodeV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48003.EraRewardPointsPerNode[]
    get(block: Block, key: v48003.AccountId32): Promise<(v48003.EraRewardPointsPerNode[] | undefined)>
    getMany(block: Block, keys: v48003.AccountId32[]): Promise<(v48003.EraRewardPointsPerNode[] | undefined)[]>
    getKeys(block: Block): Promise<v48003.AccountId32[]>
    getKeys(block: Block, key: v48003.AccountId32): Promise<v48003.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48003.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48003.AccountId32): AsyncIterable<v48003.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48003.AccountId32, v: (v48003.EraRewardPointsPerNode[] | undefined)][]>
    getPairs(block: Block, key: v48003.AccountId32): Promise<[k: v48003.AccountId32, v: (v48003.EraRewardPointsPerNode[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48003.AccountId32, v: (v48003.EraRewardPointsPerNode[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48003.AccountId32): AsyncIterable<[k: v48003.AccountId32, v: (v48003.EraRewardPointsPerNode[] | undefined)][]>
}

export const pricing =  {
    /**
     *  Price per byte of the bucket traffic in smallest units of the currency.
     */
    v48003: new StorageType('DdcStaking.Pricing', 'Optional', [], sts.bigint()) as PricingV48003,
}

/**
 *  Price per byte of the bucket traffic in smallest units of the currency.
 */
export interface PricingV48003  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(bigint | undefined)>
}

export const clusterManagers =  {
    /**
     *  A list of accounts allowed to become cluster managers.
     */
    v48003: new StorageType('DdcStaking.ClusterManagers', 'Default', [], sts.array(() => v48003.AccountId32)) as ClusterManagersV48003,
}

/**
 *  A list of accounts allowed to become cluster managers.
 */
export interface ClusterManagersV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48003.AccountId32[]
    get(block: Block): Promise<(v48003.AccountId32[] | undefined)>
}

export const nodes =  {
    /**
     *  Map from DDC node ID to the node operator stash account.
     */
    v48008: new StorageType('DdcStaking.Nodes', 'Optional', [v48008.NodePubKey], v48008.AccountId32) as NodesV48008,
    /**
     *  Map from DDC node ID to the node operator stash account.
     */
    v48017: new StorageType('DdcStaking.Nodes', 'Optional', [v48017.NodePubKey], v48017.AccountId32) as NodesV48017,
}

/**
 *  Map from DDC node ID to the node operator stash account.
 */
export interface NodesV48008  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48008.NodePubKey): Promise<(v48008.AccountId32 | undefined)>
    getMany(block: Block, keys: v48008.NodePubKey[]): Promise<(v48008.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v48008.NodePubKey[]>
    getKeys(block: Block, key: v48008.NodePubKey): Promise<v48008.NodePubKey[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.NodePubKey[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.NodePubKey): AsyncIterable<v48008.NodePubKey[]>
    getPairs(block: Block): Promise<[k: v48008.NodePubKey, v: (v48008.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v48008.NodePubKey): Promise<[k: v48008.NodePubKey, v: (v48008.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.NodePubKey, v: (v48008.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.NodePubKey): AsyncIterable<[k: v48008.NodePubKey, v: (v48008.AccountId32 | undefined)][]>
}

/**
 *  Map from DDC node ID to the node operator stash account.
 */
export interface NodesV48017  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48017.NodePubKey): Promise<(v48017.AccountId32 | undefined)>
    getMany(block: Block, keys: v48017.NodePubKey[]): Promise<(v48017.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v48017.NodePubKey[]>
    getKeys(block: Block, key: v48017.NodePubKey): Promise<v48017.NodePubKey[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48017.NodePubKey[]>
    getKeysPaged(pageSize: number, block: Block, key: v48017.NodePubKey): AsyncIterable<v48017.NodePubKey[]>
    getPairs(block: Block): Promise<[k: v48017.NodePubKey, v: (v48017.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v48017.NodePubKey): Promise<[k: v48017.NodePubKey, v: (v48017.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48017.NodePubKey, v: (v48017.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48017.NodePubKey): AsyncIterable<[k: v48017.NodePubKey, v: (v48017.AccountId32 | undefined)][]>
}

export const cdNs =  {
    /**
     *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
     *  participate into.
     */
    v48013: new StorageType('DdcStaking.CDNs', 'Optional', [v48013.AccountId32], v48013.H160) as CdNsV48013,
}

/**
 *  The map of (wannabe) CDN participants stash keys to the DDC cluster ID they wish to
 *  participate into.
 */
export interface CdNsV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v48013.H160 | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v48013.H160 | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v48013.H160 | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v48013.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v48013.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v48013.H160 | undefined)][]>
}

export const providers =  {
    /**
     *  Map from operator stash account to DDC node ID.
     */
    v48013: new StorageType('DdcStaking.Providers', 'Optional', [v48013.AccountId32], v48013.NodePubKey) as ProvidersV48013,
    /**
     *  Map from operator stash account to DDC node ID.
     */
    v48017: new StorageType('DdcStaking.Providers', 'Optional', [v48017.AccountId32], v48017.NodePubKey) as ProvidersV48017,
}

/**
 *  Map from operator stash account to DDC node ID.
 */
export interface ProvidersV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v48013.NodePubKey | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v48013.NodePubKey | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v48013.NodePubKey | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v48013.NodePubKey | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v48013.NodePubKey | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v48013.NodePubKey | undefined)][]>
}

/**
 *  Map from operator stash account to DDC node ID.
 */
export interface ProvidersV48017  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48017.AccountId32): Promise<(v48017.NodePubKey | undefined)>
    getMany(block: Block, keys: v48017.AccountId32[]): Promise<(v48017.NodePubKey | undefined)[]>
    getKeys(block: Block): Promise<v48017.AccountId32[]>
    getKeys(block: Block, key: v48017.AccountId32): Promise<v48017.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48017.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48017.AccountId32): AsyncIterable<v48017.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48017.AccountId32, v: (v48017.NodePubKey | undefined)][]>
    getPairs(block: Block, key: v48017.AccountId32): Promise<[k: v48017.AccountId32, v: (v48017.NodePubKey | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48017.AccountId32, v: (v48017.NodePubKey | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48017.AccountId32): AsyncIterable<[k: v48017.AccountId32, v: (v48017.NodePubKey | undefined)][]>
}

export const leavingStorages =  {
    /**
     *  Map of Storage node provider stash accounts that aim to leave a cluster
     */
    v48016: new StorageType('DdcStaking.LeavingStorages', 'Optional', [v48016.AccountId32], v48016.H160) as LeavingStoragesV48016,
}

/**
 *  Map of Storage node provider stash accounts that aim to leave a cluster
 */
export interface LeavingStoragesV48016  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48016.AccountId32): Promise<(v48016.H160 | undefined)>
    getMany(block: Block, keys: v48016.AccountId32[]): Promise<(v48016.H160 | undefined)[]>
    getKeys(block: Block): Promise<v48016.AccountId32[]>
    getKeys(block: Block, key: v48016.AccountId32): Promise<v48016.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48016.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48016.AccountId32): AsyncIterable<v48016.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
    getPairs(block: Block, key: v48016.AccountId32): Promise<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48016.AccountId32): AsyncIterable<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
}

export const leavingCdNs =  {
    v48016: new StorageType('DdcStaking.LeavingCDNs', 'Optional', [v48016.AccountId32], v48016.H160) as LeavingCdNsV48016,
}

export interface LeavingCdNsV48016  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48016.AccountId32): Promise<(v48016.H160 | undefined)>
    getMany(block: Block, keys: v48016.AccountId32[]): Promise<(v48016.H160 | undefined)[]>
    getKeys(block: Block): Promise<v48016.AccountId32[]>
    getKeys(block: Block, key: v48016.AccountId32): Promise<v48016.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48016.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48016.AccountId32): AsyncIterable<v48016.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
    getPairs(block: Block, key: v48016.AccountId32): Promise<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48016.AccountId32): AsyncIterable<[k: v48016.AccountId32, v: (v48016.H160 | undefined)][]>
}

export const clusterBonded =  {
    /**
     *  Map from all clusters locked "stash" accounts to the controller account.
     */
    v54001: new StorageType('DdcStaking.ClusterBonded', 'Optional', [v54001.AccountId32], v54001.AccountId32) as ClusterBondedV54001,
}

/**
 *  Map from all clusters locked "stash" accounts to the controller account.
 */
export interface ClusterBondedV54001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54001.AccountId32): Promise<(v54001.AccountId32 | undefined)>
    getMany(block: Block, keys: v54001.AccountId32[]): Promise<(v54001.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v54001.AccountId32[]>
    getKeys(block: Block, key: v54001.AccountId32): Promise<v54001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v54001.AccountId32): AsyncIterable<v54001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v54001.AccountId32, v: (v54001.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v54001.AccountId32): Promise<[k: v54001.AccountId32, v: (v54001.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54001.AccountId32, v: (v54001.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54001.AccountId32): AsyncIterable<[k: v54001.AccountId32, v: (v54001.AccountId32 | undefined)][]>
}

export const clusterLedger =  {
    /**
     *  Map of all clusters staking ledgers.
     */
    v54001: new StorageType('DdcStaking.ClusterLedger', 'Optional', [v54001.AccountId32], v54001.Type_550) as ClusterLedgerV54001,
}

/**
 *  Map of all clusters staking ledgers.
 */
export interface ClusterLedgerV54001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54001.AccountId32): Promise<(v54001.Type_550 | undefined)>
    getMany(block: Block, keys: v54001.AccountId32[]): Promise<(v54001.Type_550 | undefined)[]>
    getKeys(block: Block): Promise<v54001.AccountId32[]>
    getKeys(block: Block, key: v54001.AccountId32): Promise<v54001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54001.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v54001.AccountId32): AsyncIterable<v54001.AccountId32[]>
    getPairs(block: Block): Promise<[k: v54001.AccountId32, v: (v54001.Type_550 | undefined)][]>
    getPairs(block: Block, key: v54001.AccountId32): Promise<[k: v54001.AccountId32, v: (v54001.Type_550 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54001.AccountId32, v: (v54001.Type_550 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54001.AccountId32): AsyncIterable<[k: v54001.AccountId32, v: (v54001.Type_550 | undefined)][]>
}
