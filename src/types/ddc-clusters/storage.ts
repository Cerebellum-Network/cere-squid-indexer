import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'

export const clusters =  {
    v63002: new StorageType('DdcClusters.Clusters', 'Optional', [v63002.H160], v63002.Cluster) as ClustersV63002,
}

export interface ClustersV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.H160): Promise<(v63002.Cluster | undefined)>
    getMany(block: Block, keys: v63002.H160[]): Promise<(v63002.Cluster | undefined)[]>
    getKeys(block: Block): Promise<v63002.H160[]>
    getKeys(block: Block, key: v63002.H160): Promise<v63002.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.H160): AsyncIterable<v63002.H160[]>
    getPairs(block: Block): Promise<[k: v63002.H160, v: (v63002.Cluster | undefined)][]>
    getPairs(block: Block, key: v63002.H160): Promise<[k: v63002.H160, v: (v63002.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.H160, v: (v63002.Cluster | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.H160): AsyncIterable<[k: v63002.H160, v: (v63002.Cluster | undefined)][]>
}

export const clustersGovParams =  {
    v63002: new StorageType('DdcClusters.ClustersGovParams', 'Optional', [v63002.H160], v63002.ClusterProtocolParams) as ClustersGovParamsV63002,
}

export interface ClustersGovParamsV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.H160): Promise<(v63002.ClusterProtocolParams | undefined)>
    getMany(block: Block, keys: v63002.H160[]): Promise<(v63002.ClusterProtocolParams | undefined)[]>
    getKeys(block: Block): Promise<v63002.H160[]>
    getKeys(block: Block, key: v63002.H160): Promise<v63002.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.H160): AsyncIterable<v63002.H160[]>
    getPairs(block: Block): Promise<[k: v63002.H160, v: (v63002.ClusterProtocolParams | undefined)][]>
    getPairs(block: Block, key: v63002.H160): Promise<[k: v63002.H160, v: (v63002.ClusterProtocolParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.H160, v: (v63002.ClusterProtocolParams | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.H160): AsyncIterable<[k: v63002.H160, v: (v63002.ClusterProtocolParams | undefined)][]>
}

export const clustersNodes =  {
    v63002: new StorageType('DdcClusters.ClustersNodes', 'Optional', [v63002.H160, v63002.NodePubKey], v63002.ClusterNodeState) as ClustersNodesV63002,
}

export interface ClustersNodesV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v63002.H160, key2: v63002.NodePubKey): Promise<(v63002.ClusterNodeState | undefined)>
    getMany(block: Block, keys: [v63002.H160, v63002.NodePubKey][]): Promise<(v63002.ClusterNodeState | undefined)[]>
    getKeys(block: Block): Promise<[v63002.H160, v63002.NodePubKey][]>
    getKeys(block: Block, key1: v63002.H160): Promise<[v63002.H160, v63002.NodePubKey][]>
    getKeys(block: Block, key1: v63002.H160, key2: v63002.NodePubKey): Promise<[v63002.H160, v63002.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v63002.H160, v63002.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[v63002.H160, v63002.NodePubKey][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160, key2: v63002.NodePubKey): AsyncIterable<[v63002.H160, v63002.NodePubKey][]>
    getPairs(block: Block): Promise<[k: [v63002.H160, v63002.NodePubKey], v: (v63002.ClusterNodeState | undefined)][]>
    getPairs(block: Block, key1: v63002.H160): Promise<[k: [v63002.H160, v63002.NodePubKey], v: (v63002.ClusterNodeState | undefined)][]>
    getPairs(block: Block, key1: v63002.H160, key2: v63002.NodePubKey): Promise<[k: [v63002.H160, v63002.NodePubKey], v: (v63002.ClusterNodeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v63002.H160, v63002.NodePubKey], v: (v63002.ClusterNodeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[k: [v63002.H160, v63002.NodePubKey], v: (v63002.ClusterNodeState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160, key2: v63002.NodePubKey): AsyncIterable<[k: [v63002.H160, v63002.NodePubKey], v: (v63002.ClusterNodeState | undefined)][]>
}

export const clustersNodesStats =  {
    v63002: new StorageType('DdcClusters.ClustersNodesStats', 'Optional', [v63002.H160], v63002.ClusterNodesStats) as ClustersNodesStatsV63002,
}

export interface ClustersNodesStatsV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63002.H160): Promise<(v63002.ClusterNodesStats | undefined)>
    getMany(block: Block, keys: v63002.H160[]): Promise<(v63002.ClusterNodesStats | undefined)[]>
    getKeys(block: Block): Promise<v63002.H160[]>
    getKeys(block: Block, key: v63002.H160): Promise<v63002.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.H160): AsyncIterable<v63002.H160[]>
    getPairs(block: Block): Promise<[k: v63002.H160, v: (v63002.ClusterNodesStats | undefined)][]>
    getPairs(block: Block, key: v63002.H160): Promise<[k: v63002.H160, v: (v63002.ClusterNodesStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.H160, v: (v63002.ClusterNodesStats | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.H160): AsyncIterable<[k: v63002.H160, v: (v63002.ClusterNodesStats | undefined)][]>
}
