import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48008 from '../v48008'
import * as v48013 from '../v48013'
import * as v48015 from '../v48015'
import * as v48016 from '../v48016'
import * as v48017 from '../v48017'
import * as v48400 from '../v48400'
import * as v53003 from '../v53003'
import * as v54001 from '../v54001'

export const clusters =  {
    v48008: new StorageType('DdcClusters.Clusters', 'Optional', [v48008.H160], v48008.Cluster) as ClustersV48008,
    v48013: new StorageType('DdcClusters.Clusters', 'Optional', [v48013.H160], v48013.Cluster) as ClustersV48013,
    v48016: new StorageType('DdcClusters.Clusters', 'Optional', [v48016.H160], v48016.Cluster) as ClustersV48016,
    v53003: new StorageType('DdcClusters.Clusters', 'Optional', [v53003.H160], v53003.Cluster) as ClustersV53003,
    v54001: new StorageType('DdcClusters.Clusters', 'Optional', [v54001.H160], v54001.Cluster) as ClustersV54001,
}

export interface ClustersV48008  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48008.H160): Promise<(v48008.Cluster | undefined)>
    getMany(block: Block, keys: v48008.H160[]): Promise<(v48008.Cluster | undefined)[]>
    getKeys(block: Block): Promise<v48008.H160[]>
    getKeys(block: Block, key: v48008.H160): Promise<v48008.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48008.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48008.H160): AsyncIterable<v48008.H160[]>
    getPairs(block: Block): Promise<[k: v48008.H160, v: (v48008.Cluster | undefined)][]>
    getPairs(block: Block, key: v48008.H160): Promise<[k: v48008.H160, v: (v48008.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48008.H160, v: (v48008.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48008.H160): AsyncIterable<[k: v48008.H160, v: (v48008.Cluster | undefined)][]>
}

export interface ClustersV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.H160): Promise<(v48013.Cluster | undefined)>
    getMany(block: Block, keys: v48013.H160[]): Promise<(v48013.Cluster | undefined)[]>
    getKeys(block: Block): Promise<v48013.H160[]>
    getKeys(block: Block, key: v48013.H160): Promise<v48013.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.H160): AsyncIterable<v48013.H160[]>
    getPairs(block: Block): Promise<[k: v48013.H160, v: (v48013.Cluster | undefined)][]>
    getPairs(block: Block, key: v48013.H160): Promise<[k: v48013.H160, v: (v48013.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.H160, v: (v48013.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.H160): AsyncIterable<[k: v48013.H160, v: (v48013.Cluster | undefined)][]>
}

export interface ClustersV48016  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48016.H160): Promise<(v48016.Cluster | undefined)>
    getMany(block: Block, keys: v48016.H160[]): Promise<(v48016.Cluster | undefined)[]>
    getKeys(block: Block): Promise<v48016.H160[]>
    getKeys(block: Block, key: v48016.H160): Promise<v48016.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48016.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48016.H160): AsyncIterable<v48016.H160[]>
    getPairs(block: Block): Promise<[k: v48016.H160, v: (v48016.Cluster | undefined)][]>
    getPairs(block: Block, key: v48016.H160): Promise<[k: v48016.H160, v: (v48016.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48016.H160, v: (v48016.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48016.H160): AsyncIterable<[k: v48016.H160, v: (v48016.Cluster | undefined)][]>
}

export interface ClustersV53003  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v53003.H160): Promise<(v53003.Cluster | undefined)>
    getMany(block: Block, keys: v53003.H160[]): Promise<(v53003.Cluster | undefined)[]>
    getKeys(block: Block): Promise<v53003.H160[]>
    getKeys(block: Block, key: v53003.H160): Promise<v53003.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v53003.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v53003.H160): AsyncIterable<v53003.H160[]>
    getPairs(block: Block): Promise<[k: v53003.H160, v: (v53003.Cluster | undefined)][]>
    getPairs(block: Block, key: v53003.H160): Promise<[k: v53003.H160, v: (v53003.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v53003.H160, v: (v53003.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v53003.H160): AsyncIterable<[k: v53003.H160, v: (v53003.Cluster | undefined)][]>
}

export interface ClustersV54001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54001.H160): Promise<(v54001.Cluster | undefined)>
    getMany(block: Block, keys: v54001.H160[]): Promise<(v54001.Cluster | undefined)[]>
    getKeys(block: Block): Promise<v54001.H160[]>
    getKeys(block: Block, key: v54001.H160): Promise<v54001.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54001.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v54001.H160): AsyncIterable<v54001.H160[]>
    getPairs(block: Block): Promise<[k: v54001.H160, v: (v54001.Cluster | undefined)][]>
    getPairs(block: Block, key: v54001.H160): Promise<[k: v54001.H160, v: (v54001.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54001.H160, v: (v54001.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54001.H160): AsyncIterable<[k: v54001.H160, v: (v54001.Cluster | undefined)][]>
}

export const clustersNodes =  {
    v48008: new StorageType('DdcClusters.ClustersNodes', 'Default', [v48008.H160, v48008.NodePubKey], sts.boolean()) as ClustersNodesV48008,
    v48013: new StorageType('DdcClusters.ClustersNodes', 'Optional', [v48013.H160, v48013.NodePubKey], sts.boolean()) as ClustersNodesV48013,
    v48017: new StorageType('DdcClusters.ClustersNodes', 'Optional', [v48017.H160, v48017.NodePubKey], sts.boolean()) as ClustersNodesV48017,
    v54001: new StorageType('DdcClusters.ClustersNodes', 'Optional', [v54001.H160, v54001.NodePubKey], v54001.ClusterNodeState) as ClustersNodesV54001,
}

export interface ClustersNodesV48008  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key1: v48008.H160, key2: v48008.NodePubKey): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [v48008.H160, v48008.NodePubKey][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[v48008.H160, v48008.NodePubKey][]>
    getKeys(block: Block, key1: v48008.H160): Promise<[v48008.H160, v48008.NodePubKey][]>
    getKeys(block: Block, key1: v48008.H160, key2: v48008.NodePubKey): Promise<[v48008.H160, v48008.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48008.H160, v48008.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48008.H160): AsyncIterable<[v48008.H160, v48008.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48008.H160, key2: v48008.NodePubKey): AsyncIterable<[v48008.H160, v48008.NodePubKey][]>
    getPairs(block: Block): Promise<[k: [v48008.H160, v48008.NodePubKey], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v48008.H160): Promise<[k: [v48008.H160, v48008.NodePubKey], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v48008.H160, key2: v48008.NodePubKey): Promise<[k: [v48008.H160, v48008.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48008.H160, v48008.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48008.H160): AsyncIterable<[k: [v48008.H160, v48008.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48008.H160, key2: v48008.NodePubKey): AsyncIterable<[k: [v48008.H160, v48008.NodePubKey], v: (boolean | undefined)][]>
}

export interface ClustersNodesV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v48013.H160, key2: v48013.NodePubKey): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [v48013.H160, v48013.NodePubKey][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[v48013.H160, v48013.NodePubKey][]>
    getKeys(block: Block, key1: v48013.H160): Promise<[v48013.H160, v48013.NodePubKey][]>
    getKeys(block: Block, key1: v48013.H160, key2: v48013.NodePubKey): Promise<[v48013.H160, v48013.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48013.H160, v48013.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48013.H160): AsyncIterable<[v48013.H160, v48013.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48013.H160, key2: v48013.NodePubKey): AsyncIterable<[v48013.H160, v48013.NodePubKey][]>
    getPairs(block: Block): Promise<[k: [v48013.H160, v48013.NodePubKey], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v48013.H160): Promise<[k: [v48013.H160, v48013.NodePubKey], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v48013.H160, key2: v48013.NodePubKey): Promise<[k: [v48013.H160, v48013.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48013.H160, v48013.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48013.H160): AsyncIterable<[k: [v48013.H160, v48013.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48013.H160, key2: v48013.NodePubKey): AsyncIterable<[k: [v48013.H160, v48013.NodePubKey], v: (boolean | undefined)][]>
}

export interface ClustersNodesV48017  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v48017.H160, key2: v48017.NodePubKey): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [v48017.H160, v48017.NodePubKey][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[v48017.H160, v48017.NodePubKey][]>
    getKeys(block: Block, key1: v48017.H160): Promise<[v48017.H160, v48017.NodePubKey][]>
    getKeys(block: Block, key1: v48017.H160, key2: v48017.NodePubKey): Promise<[v48017.H160, v48017.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48017.H160, v48017.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48017.H160): AsyncIterable<[v48017.H160, v48017.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48017.H160, key2: v48017.NodePubKey): AsyncIterable<[v48017.H160, v48017.NodePubKey][]>
    getPairs(block: Block): Promise<[k: [v48017.H160, v48017.NodePubKey], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v48017.H160): Promise<[k: [v48017.H160, v48017.NodePubKey], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: v48017.H160, key2: v48017.NodePubKey): Promise<[k: [v48017.H160, v48017.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48017.H160, v48017.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48017.H160): AsyncIterable<[k: [v48017.H160, v48017.NodePubKey], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48017.H160, key2: v48017.NodePubKey): AsyncIterable<[k: [v48017.H160, v48017.NodePubKey], v: (boolean | undefined)][]>
}

export interface ClustersNodesV54001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v54001.H160, key2: v54001.NodePubKey): Promise<(v54001.ClusterNodeState | undefined)>
    getMany(block: Block, keys: [v54001.H160, v54001.NodePubKey][]): Promise<(v54001.ClusterNodeState | undefined)[]>
    getKeys(block: Block): Promise<[v54001.H160, v54001.NodePubKey][]>
    getKeys(block: Block, key1: v54001.H160): Promise<[v54001.H160, v54001.NodePubKey][]>
    getKeys(block: Block, key1: v54001.H160, key2: v54001.NodePubKey): Promise<[v54001.H160, v54001.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v54001.H160, v54001.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54001.H160): AsyncIterable<[v54001.H160, v54001.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54001.H160, key2: v54001.NodePubKey): AsyncIterable<[v54001.H160, v54001.NodePubKey][]>
    getPairs(block: Block): Promise<[k: [v54001.H160, v54001.NodePubKey], v: (v54001.ClusterNodeState | undefined)][]>
    getPairs(block: Block, key1: v54001.H160): Promise<[k: [v54001.H160, v54001.NodePubKey], v: (v54001.ClusterNodeState | undefined)][]>
    getPairs(block: Block, key1: v54001.H160, key2: v54001.NodePubKey): Promise<[k: [v54001.H160, v54001.NodePubKey], v: (v54001.ClusterNodeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v54001.H160, v54001.NodePubKey], v: (v54001.ClusterNodeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54001.H160): AsyncIterable<[k: [v54001.H160, v54001.NodePubKey], v: (v54001.ClusterNodeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54001.H160, key2: v54001.NodePubKey): AsyncIterable<[k: [v54001.H160, v54001.NodePubKey], v: (v54001.ClusterNodeState | undefined)][]>
}

export const clustersGovParams =  {
    v48013: new StorageType('DdcClusters.ClustersGovParams', 'Optional', [v48013.H160], v48013.ClusterGovParams) as ClustersGovParamsV48013,
    v48015: new StorageType('DdcClusters.ClustersGovParams', 'Optional', [v48015.H160], v48015.ClusterGovParams) as ClustersGovParamsV48015,
    v48016: new StorageType('DdcClusters.ClustersGovParams', 'Optional', [v48016.H160], v48016.ClusterGovParams) as ClustersGovParamsV48016,
    v48017: new StorageType('DdcClusters.ClustersGovParams', 'Optional', [v48017.H160], v48017.ClusterGovParams) as ClustersGovParamsV48017,
    v48400: new StorageType('DdcClusters.ClustersGovParams', 'Optional', [v48400.H160], v48400.ClusterGovParams) as ClustersGovParamsV48400,
}

export interface ClustersGovParamsV48013  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48013.H160): Promise<(v48013.ClusterGovParams | undefined)>
    getMany(block: Block, keys: v48013.H160[]): Promise<(v48013.ClusterGovParams | undefined)[]>
    getKeys(block: Block): Promise<v48013.H160[]>
    getKeys(block: Block, key: v48013.H160): Promise<v48013.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48013.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48013.H160): AsyncIterable<v48013.H160[]>
    getPairs(block: Block): Promise<[k: v48013.H160, v: (v48013.ClusterGovParams | undefined)][]>
    getPairs(block: Block, key: v48013.H160): Promise<[k: v48013.H160, v: (v48013.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48013.H160, v: (v48013.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48013.H160): AsyncIterable<[k: v48013.H160, v: (v48013.ClusterGovParams | undefined)][]>
}

export interface ClustersGovParamsV48015  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48015.H160): Promise<(v48015.ClusterGovParams | undefined)>
    getMany(block: Block, keys: v48015.H160[]): Promise<(v48015.ClusterGovParams | undefined)[]>
    getKeys(block: Block): Promise<v48015.H160[]>
    getKeys(block: Block, key: v48015.H160): Promise<v48015.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48015.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48015.H160): AsyncIterable<v48015.H160[]>
    getPairs(block: Block): Promise<[k: v48015.H160, v: (v48015.ClusterGovParams | undefined)][]>
    getPairs(block: Block, key: v48015.H160): Promise<[k: v48015.H160, v: (v48015.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48015.H160, v: (v48015.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48015.H160): AsyncIterable<[k: v48015.H160, v: (v48015.ClusterGovParams | undefined)][]>
}

export interface ClustersGovParamsV48016  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48016.H160): Promise<(v48016.ClusterGovParams | undefined)>
    getMany(block: Block, keys: v48016.H160[]): Promise<(v48016.ClusterGovParams | undefined)[]>
    getKeys(block: Block): Promise<v48016.H160[]>
    getKeys(block: Block, key: v48016.H160): Promise<v48016.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48016.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48016.H160): AsyncIterable<v48016.H160[]>
    getPairs(block: Block): Promise<[k: v48016.H160, v: (v48016.ClusterGovParams | undefined)][]>
    getPairs(block: Block, key: v48016.H160): Promise<[k: v48016.H160, v: (v48016.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48016.H160, v: (v48016.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48016.H160): AsyncIterable<[k: v48016.H160, v: (v48016.ClusterGovParams | undefined)][]>
}

export interface ClustersGovParamsV48017  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48017.H160): Promise<(v48017.ClusterGovParams | undefined)>
    getMany(block: Block, keys: v48017.H160[]): Promise<(v48017.ClusterGovParams | undefined)[]>
    getKeys(block: Block): Promise<v48017.H160[]>
    getKeys(block: Block, key: v48017.H160): Promise<v48017.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48017.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48017.H160): AsyncIterable<v48017.H160[]>
    getPairs(block: Block): Promise<[k: v48017.H160, v: (v48017.ClusterGovParams | undefined)][]>
    getPairs(block: Block, key: v48017.H160): Promise<[k: v48017.H160, v: (v48017.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48017.H160, v: (v48017.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48017.H160): AsyncIterable<[k: v48017.H160, v: (v48017.ClusterGovParams | undefined)][]>
}

export interface ClustersGovParamsV48400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48400.H160): Promise<(v48400.ClusterGovParams | undefined)>
    getMany(block: Block, keys: v48400.H160[]): Promise<(v48400.ClusterGovParams | undefined)[]>
    getKeys(block: Block): Promise<v48400.H160[]>
    getKeys(block: Block, key: v48400.H160): Promise<v48400.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48400.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v48400.H160): AsyncIterable<v48400.H160[]>
    getPairs(block: Block): Promise<[k: v48400.H160, v: (v48400.ClusterGovParams | undefined)][]>
    getPairs(block: Block, key: v48400.H160): Promise<[k: v48400.H160, v: (v48400.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48400.H160, v: (v48400.ClusterGovParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48400.H160): AsyncIterable<[k: v48400.H160, v: (v48400.ClusterGovParams | undefined)][]>
}

export const clustersNodesStats =  {
    v54001: new StorageType('DdcClusters.ClustersNodesStats', 'Optional', [v54001.H160], v54001.ClusterNodesStats) as ClustersNodesStatsV54001,
}

export interface ClustersNodesStatsV54001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54001.H160): Promise<(v54001.ClusterNodesStats | undefined)>
    getMany(block: Block, keys: v54001.H160[]): Promise<(v54001.ClusterNodesStats | undefined)[]>
    getKeys(block: Block): Promise<v54001.H160[]>
    getKeys(block: Block, key: v54001.H160): Promise<v54001.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54001.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v54001.H160): AsyncIterable<v54001.H160[]>
    getPairs(block: Block): Promise<[k: v54001.H160, v: (v54001.ClusterNodesStats | undefined)][]>
    getPairs(block: Block, key: v54001.H160): Promise<[k: v54001.H160, v: (v54001.ClusterNodesStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54001.H160, v: (v54001.ClusterNodesStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54001.H160): AsyncIterable<[k: v54001.H160, v: (v54001.ClusterNodesStats | undefined)][]>
}
