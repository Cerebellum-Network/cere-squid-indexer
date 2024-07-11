import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48201 from '../v48201'
import * as v50000 from '../v50000'

export const buckets =  {
    /**
     *  Map from bucket ID to to the bucket structure
     */
    v48201: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v48201.Bucket) as BucketsV48201,
    /**
     *  Map from bucket ID to the bucket structure
     */
    v50000: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v50000.Bucket) as BucketsV50000,
}

/**
 *  Map from bucket ID to to the bucket structure
 */
export interface BucketsV48201  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v48201.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v48201.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v48201.Bucket | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v48201.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v48201.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v48201.Bucket | undefined)][]>
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
