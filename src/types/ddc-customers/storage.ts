import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'
import * as v48017 from '../v48017'
import * as v50000 from '../v50000'
import * as v54100 from '../v54100'

export const ledger =  {
    /**
     *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
     */
    v48013: new StorageType('DdcCustomers.Ledger', 'Optional', [v48013.AccountId32], v48013.AccountsLedger) as LedgerV48013,
}

/**
 *  Map from all (unlocked) "owner" accounts to the info regarding the staking.
 */
export interface LedgerV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v48013.AccountsLedger | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v48013.AccountsLedger | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v48013.AccountsLedger | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v48013.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v48013.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v48013.AccountsLedger | undefined)][]>
}

export const bucketsCount =  {
    v48013: new StorageType('DdcCustomers.BucketsCount', 'Default', [], sts.bigint()) as BucketsCountV48013,
}

export interface BucketsCountV48013  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const buckets =  {
    /**
     *  Map from bucket ID to to the bucket structure
     */
    v48013: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v48013.Bucket) as BucketsV48013,
    /**
     *  Map from bucket ID to to the bucket structure
     */
    v48017: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v48017.Bucket) as BucketsV48017,
    /**
     *  Map from bucket ID to the bucket structure
     */
    v50000: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v50000.Bucket) as BucketsV50000,
    /**
     *  Map from bucket ID to the bucket structure
     */
    v54100: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v54100.Bucket) as BucketsV54100,
}

/**
 *  Map from bucket ID to to the bucket structure
 */
export interface BucketsV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v48013.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v48013.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v48013.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v48013.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v48013.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v48013.Bucket | undefined)][]>
}

/**
 *  Map from bucket ID to to the bucket structure
 */
export interface BucketsV48017  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v48017.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v48017.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v48017.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v48017.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v48017.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v48017.Bucket | undefined)][]>
}

/**
 *  Map from bucket ID to the bucket structure
 */
export interface BucketsV50000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v50000.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v50000.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v50000.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v50000.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v50000.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v50000.Bucket | undefined)][]>
}

/**
 *  Map from bucket ID to the bucket structure
 */
export interface BucketsV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v54100.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v54100.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v54100.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v54100.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v54100.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v54100.Bucket | undefined)][]>
}
