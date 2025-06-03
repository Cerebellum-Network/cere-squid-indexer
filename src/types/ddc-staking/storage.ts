import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    v63002: new StorageType('DdcStaking.Bonded', 'Optional', [v63002.AccountId32], v63002.AccountId32) as BondedV63002,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface BondedV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.AccountId32 | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    v63002: new StorageType('DdcStaking.Ledger', 'Optional', [v63002.AccountId32], v63002.Type_585) as LedgerV63002,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface LedgerV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.Type_585 | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.Type_585 | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
}

export const storages =  {
    /**
     *  The map of (wannabe) Storage nodes participants stash keys to the DDC cluster ID they
     *  wish to participate into.
     */
    v63002: new StorageType('DdcStaking.Storages', 'Optional', [v63002.AccountId32], v63002.H160) as StoragesV63002,
}

/**
 *  The map of (wannabe) Storage nodes participants stash keys to the DDC cluster ID they
 *  wish to participate into.
 */
export interface StoragesV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.H160 | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.H160 | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
}

export const nodes =  {
    /**
     *  Map from DDC node ID to the node operator stash account.
     */
    v63002: new StorageType('DdcStaking.Nodes', 'Optional', [v63002.NodePubKey], v63002.AccountId32) as NodesV63002,
}

/**
 *  Map from DDC node ID to the node operator stash account.
 */
export interface NodesV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.NodePubKey): Promise<(v63002.AccountId32 | undefined)>
    getMany(block: Block, keys: v63002.NodePubKey[]): Promise<(v63002.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v63002.NodePubKey[]>
    getKeys(block: Block, key: v63002.NodePubKey): Promise<v63002.NodePubKey[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.NodePubKey[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.NodePubKey): AsyncIterable<v63002.NodePubKey[]>
    getPairs(block: Block): Promise<[k: v63002.NodePubKey, v: (v63002.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v63002.NodePubKey): Promise<[k: v63002.NodePubKey, v: (v63002.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.NodePubKey, v: (v63002.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.NodePubKey): AsyncIterable<[k: v63002.NodePubKey, v: (v63002.AccountId32 | undefined)][]>
}

export const providers =  {
    /**
     *  Map from operator stash account to DDC node ID.
     */
    v63002: new StorageType('DdcStaking.Providers', 'Optional', [v63002.AccountId32], v63002.NodePubKey) as ProvidersV63002,
}

/**
 *  Map from operator stash account to DDC node ID.
 */
export interface ProvidersV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.NodePubKey | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.NodePubKey | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.NodePubKey | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.NodePubKey | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.NodePubKey | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.NodePubKey | undefined)][]>
}

export const leavingStorages =  {
    /**
     *  Map of Storage node provider stash accounts that aim to leave a cluster
     */
    v63002: new StorageType('DdcStaking.LeavingStorages', 'Optional', [v63002.AccountId32], v63002.H160) as LeavingStoragesV63002,
}

/**
 *  Map of Storage node provider stash accounts that aim to leave a cluster
 */
export interface LeavingStoragesV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.H160 | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.H160 | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.H160 | undefined)][]>
}

export const clusterBonded =  {
    /**
     *  Map from all clusters locked "stash" accounts to the controller account.
     */
    v63002: new StorageType('DdcStaking.ClusterBonded', 'Optional', [v63002.AccountId32], v63002.AccountId32) as ClusterBondedV63002,
}

/**
 *  Map from all clusters locked "stash" accounts to the controller account.
 */
export interface ClusterBondedV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.AccountId32 | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountId32 | undefined)][]>
}

export const clusterLedger =  {
    /**
     *  Map of all clusters staking ledgers.
     */
    v63002: new StorageType('DdcStaking.ClusterLedger', 'Optional', [v63002.AccountId32], v63002.Type_585) as ClusterLedgerV63002,
}

/**
 *  Map of all clusters staking ledgers.
 */
export interface ClusterLedgerV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.Type_585 | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.Type_585 | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.Type_585 | undefined)][]>
}
