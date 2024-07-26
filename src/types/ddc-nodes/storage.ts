import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48008 from '../v48008'
import * as v48013 from '../v48013'
import * as v48017 from '../v48017'
import * as v48400 from '../v48400'
import * as v54100 from '../v54100'

export const storageNodes =  {
    v48008: new StorageType('DdcNodes.StorageNodes', 'Optional', [v48008.AccountId32], v48008.StorageNode) as StorageNodesV48008,
    v48013: new StorageType('DdcNodes.StorageNodes', 'Optional', [v48013.AccountId32], v48013.StorageNode) as StorageNodesV48013,
    v48017: new StorageType('DdcNodes.StorageNodes', 'Optional', [v48017.AccountId32], v48017.StorageNode) as StorageNodesV48017,
    v48400: new StorageType('DdcNodes.StorageNodes', 'Optional', [v48400.AccountId32], v48400.StorageNode) as StorageNodesV48400,
    v54100: new StorageType('DdcNodes.StorageNodes', 'Optional', [v54100.AccountId32], v54100.StorageNode) as StorageNodesV54100,
}

export interface StorageNodesV48008  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48008.AccountId32): Promise<(v48008.StorageNode | undefined)>
    getMany(block: Block, keys: v48008.AccountId32[]): Promise<(v48008.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v48008.AccountId32[]>
    getKeys(block: Block, key: v48008.AccountId32): Promise<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<v48008.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48008.AccountId32, v: (v48008.StorageNode | undefined)][]>
    getPairs(block: Block, key: v48008.AccountId32): Promise<[k: v48008.AccountId32, v: (v48008.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.AccountId32, v: (v48008.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<[k: v48008.AccountId32, v: (v48008.StorageNode | undefined)][]>
}

export interface StorageNodesV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v48013.StorageNode | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v48013.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v48013.StorageNode | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v48013.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v48013.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v48013.StorageNode | undefined)][]>
}

export interface StorageNodesV48017  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48017.AccountId32): Promise<(v48017.StorageNode | undefined)>
    getMany(block: Block, keys: v48017.AccountId32[]): Promise<(v48017.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v48017.AccountId32[]>
    getKeys(block: Block, key: v48017.AccountId32): Promise<v48017.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48017.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48017.AccountId32): AsyncIterable<v48017.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48017.AccountId32, v: (v48017.StorageNode | undefined)][]>
    getPairs(block: Block, key: v48017.AccountId32): Promise<[k: v48017.AccountId32, v: (v48017.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48017.AccountId32, v: (v48017.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48017.AccountId32): AsyncIterable<[k: v48017.AccountId32, v: (v48017.StorageNode | undefined)][]>
}

export interface StorageNodesV48400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48400.AccountId32): Promise<(v48400.StorageNode | undefined)>
    getMany(block: Block, keys: v48400.AccountId32[]): Promise<(v48400.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v48400.AccountId32[]>
    getKeys(block: Block, key: v48400.AccountId32): Promise<v48400.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48400.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48400.AccountId32): AsyncIterable<v48400.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48400.AccountId32, v: (v48400.StorageNode | undefined)][]>
    getPairs(block: Block, key: v48400.AccountId32): Promise<[k: v48400.AccountId32, v: (v48400.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48400.AccountId32, v: (v48400.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48400.AccountId32): AsyncIterable<[k: v48400.AccountId32, v: (v48400.StorageNode | undefined)][]>
}

export interface StorageNodesV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54100.AccountId32): Promise<(v54100.StorageNode | undefined)>
    getMany(block: Block, keys: v54100.AccountId32[]): Promise<(v54100.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v54100.AccountId32[]>
    getKeys(block: Block, key: v54100.AccountId32): Promise<v54100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v54100.AccountId32): AsyncIterable<v54100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v54100.AccountId32, v: (v54100.StorageNode | undefined)][]>
    getPairs(block: Block, key: v54100.AccountId32): Promise<[k: v54100.AccountId32, v: (v54100.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54100.AccountId32, v: (v54100.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54100.AccountId32): AsyncIterable<[k: v54100.AccountId32, v: (v54100.StorageNode | undefined)][]>
}

export const cdnNodes =  {
    v48008: new StorageType('DdcNodes.CDNNodes', 'Optional', [v48008.AccountId32], v48008.CDNNode) as CdnNodesV48008,
    v48013: new StorageType('DdcNodes.CDNNodes', 'Optional', [v48013.AccountId32], v48013.CDNNode) as CdnNodesV48013,
}

export interface CdnNodesV48008  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48008.AccountId32): Promise<(v48008.CDNNode | undefined)>
    getMany(block: Block, keys: v48008.AccountId32[]): Promise<(v48008.CDNNode | undefined)[]>
    getKeys(block: Block): Promise<v48008.AccountId32[]>
    getKeys(block: Block, key: v48008.AccountId32): Promise<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<v48008.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48008.AccountId32, v: (v48008.CDNNode | undefined)][]>
    getPairs(block: Block, key: v48008.AccountId32): Promise<[k: v48008.AccountId32, v: (v48008.CDNNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.AccountId32, v: (v48008.CDNNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.AccountId32): AsyncIterable<[k: v48008.AccountId32, v: (v48008.CDNNode | undefined)][]>
}

export interface CdnNodesV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.AccountId32): Promise<(v48013.CDNNode | undefined)>
    getMany(block: Block, keys: v48013.AccountId32[]): Promise<(v48013.CDNNode | undefined)[]>
    getKeys(block: Block): Promise<v48013.AccountId32[]>
    getKeys(block: Block, key: v48013.AccountId32): Promise<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<v48013.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48013.AccountId32, v: (v48013.CDNNode | undefined)][]>
    getPairs(block: Block, key: v48013.AccountId32): Promise<[k: v48013.AccountId32, v: (v48013.CDNNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.AccountId32, v: (v48013.CDNNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.AccountId32): AsyncIterable<[k: v48013.AccountId32, v: (v48013.CDNNode | undefined)][]>
}
