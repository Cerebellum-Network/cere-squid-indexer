import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'
import * as v54100 from '../v54100'
import * as v63002 from '../v63002'
import * as v73047 from '../v73047'

export const ledger =  {
    /**
     *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
     */
    v48013: new StorageType('DdcCustomers.Ledger', 'Optional', [v48013.AccountId32], v63002.AccountsLedger) as LedgerV48013,
    /**
     *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
     */
    v54100: new StorageType('DdcCustomers.Ledger', 'Optional', [v54100.AccountId32], v63002.AccountsLedger) as LedgerV54100,
    /**
     *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
     */
    v63002: new StorageType('DdcCustomers.Ledger', 'Optional', [v63002.AccountId32], v63002.AccountsLedger) as LedgerV63002,
}

/**
 *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
 */
export interface LedgerV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v63002.AccountsLedger | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v63002.AccountsLedger | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
}

/**
 *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
 */
export interface LedgerV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.AccountsLedger | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.AccountsLedger | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
}

/**
 *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
 */
export interface LedgerV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.AccountsLedger | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.AccountsLedger | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountsLedger | undefined)][]>
}

export const bucketsCount =  {
    v63002: new StorageType('DdcCustomers.BucketsCount', 'Default', [], sts.bigint()) as BucketsCountV63002,
}

export interface BucketsCountV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const buckets =  {
    /**
     *  Map from bucket ID to the bucket structure
     */
    v48013: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v63002.Bucket) as BucketsV48013,
    /**
     *  Map from bucket ID to the bucket structure
     */
    v54100: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v63002.Bucket) as BucketsV54100,
    /**
     *  Map from bucket ID to the bucket structure
     */
    v63002: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v63002.Bucket) as BucketsV63002,
    /**
     *  Map from bucket ID to the bucket structure
     */
    v73047: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v73047.Bucket) as BucketsV73047,
}

/**
 *  Map from bucket ID to the bucket structure
 */
export interface BucketsV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v63002.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v63002.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
}

/**
 *  Map from bucket ID to the bucket structure
 */
export interface BucketsV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v63002.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v63002.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
}

/**
 *  Map from bucket ID to the bucket structure
 */
export interface BucketsV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v63002.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v63002.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
}

/**
 *  Map from bucket ID to the bucket structure
 */
export interface BucketsV73047  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v73047.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v73047.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v73047.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v73047.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v73047.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v73047.Bucket | undefined)][]>
}

export const clusterLedger =  {
    v73047: new StorageType('DdcCustomers.ClusterLedger', 'Optional', [v73047.H160, v73047.AccountId32], v73047.CustomerLedger) as ClusterLedgerV73047,
}

export interface ClusterLedgerV73047  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v73047.H160, key2: v73047.AccountId32): Promise<(v73047.CustomerLedger | undefined)>
    getMany(block: Block, keys: [v73047.H160, v73047.AccountId32][]): Promise<(v73047.CustomerLedger | undefined)[]>
}
