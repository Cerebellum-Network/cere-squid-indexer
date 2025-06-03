import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'
import * as v73038 from '../v73038'
import * as v73047 from '../v73047'

export const storageNodes =  {
    v63002: new StorageType('DdcNodes.StorageNodes', 'Optional', [v63002.AccountId32], v63002.StorageNode) as StorageNodesV63002,
    v73038: new StorageType('DdcNodes.StorageNodes', 'Optional', [v73038.AccountId32], v73038.StorageNode) as StorageNodesV73038,
    v73047: new StorageType('DdcNodes.StorageNodes', 'Optional', [v73047.AccountId32], v73047.StorageNode) as StorageNodesV73047,
}

export interface StorageNodesV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.StorageNode | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.StorageNode | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.StorageNode | undefined)][]>
}

export interface StorageNodesV73038  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v73038.AccountId32): Promise<(v73038.StorageNode | undefined)>
    getMany(block: Block, keys: v73038.AccountId32[]): Promise<(v73038.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v73038.AccountId32[]>
    getKeys(block: Block, key: v73038.AccountId32): Promise<v73038.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v73038.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v73038.AccountId32): AsyncIterable<v73038.AccountId32[]>
    getPairs(block: Block): Promise<[k: v73038.AccountId32, v: (v73038.StorageNode | undefined)][]>
    getPairs(block: Block, key: v73038.AccountId32): Promise<[k: v73038.AccountId32, v: (v73038.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v73038.AccountId32, v: (v73038.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v73038.AccountId32): AsyncIterable<[k: v73038.AccountId32, v: (v73038.StorageNode | undefined)][]>
}

export interface StorageNodesV73047  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v73047.AccountId32): Promise<(v73047.StorageNode | undefined)>
    getMany(block: Block, keys: v73047.AccountId32[]): Promise<(v73047.StorageNode | undefined)[]>
    getKeys(block: Block): Promise<v73047.AccountId32[]>
    getKeys(block: Block, key: v73047.AccountId32): Promise<v73047.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v73047.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v73047.AccountId32): AsyncIterable<v73047.AccountId32[]>
    getPairs(block: Block): Promise<[k: v73047.AccountId32, v: (v73047.StorageNode | undefined)][]>
    getPairs(block: Block, key: v73047.AccountId32): Promise<[k: v73047.AccountId32, v: (v73047.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v73047.AccountId32, v: (v73047.StorageNode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v73047.AccountId32): AsyncIterable<[k: v73047.AccountId32, v: (v73047.StorageNode | undefined)][]>
}
