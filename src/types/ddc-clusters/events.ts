import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'
import * as v54100 from '../v54100'
import * as v63002 from '../v63002'

export const clusterCreated =  {
    name: 'DdcClusters.ClusterCreated',
    v48013: new EventType(
        'DdcClusters.ClusterCreated',
        sts.struct({
            clusterId: sts.string(),
        })
    ),
    v54100: new EventType(
        'DdcClusters.ClusterCreated',
        sts.struct({
            clusterId: sts.string(),
        })
    ),
    v63002: new EventType(
        'DdcClusters.ClusterCreated',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterNodeAdded =  {
    name: 'DdcClusters.ClusterNodeAdded',
    v63002: new EventType(
        'DdcClusters.ClusterNodeAdded',
        sts.struct({
            clusterId: v63002.H160,
            nodePubKey: v63002.NodePubKey,
        })
    ),
}

export const clusterNodeRemoved =  {
    name: 'DdcClusters.ClusterNodeRemoved',
    v63002: new EventType(
        'DdcClusters.ClusterNodeRemoved',
        sts.struct({
            clusterId: v63002.H160,
            nodePubKey: v63002.NodePubKey,
        })
    ),
}

export const clusterParamsSet =  {
    name: 'DdcClusters.ClusterParamsSet',
    v63002: new EventType(
        'DdcClusters.ClusterParamsSet',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterProtocolParamsSet =  {
    name: 'DdcClusters.ClusterProtocolParamsSet',
    v63002: new EventType(
        'DdcClusters.ClusterProtocolParamsSet',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterActivated =  {
    name: 'DdcClusters.ClusterActivated',
    v54100: new EventType(
        'DdcClusters.ClusterActivated',
        sts.struct({
            clusterId: sts.string(),
        })
    ),
    v63002: new EventType(
        'DdcClusters.ClusterActivated',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterBonded =  {
    name: 'DdcClusters.ClusterBonded',
    v63002: new EventType(
        'DdcClusters.ClusterBonded',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterUnbonding =  {
    name: 'DdcClusters.ClusterUnbonding',
    v63002: new EventType(
        'DdcClusters.ClusterUnbonding',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterUnbonded =  {
    name: 'DdcClusters.ClusterUnbonded',
    v63002: new EventType(
        'DdcClusters.ClusterUnbonded',
        sts.struct({
            clusterId: v63002.H160,
        })
    ),
}

export const clusterNodeValidated =  {
    name: 'DdcClusters.ClusterNodeValidated',
    v63002: new EventType(
        'DdcClusters.ClusterNodeValidated',
        sts.struct({
            clusterId: v63002.H160,
            nodePubKey: v63002.NodePubKey,
            succeeded: sts.boolean(),
        })
    ),
}

export const clusterEraPaid =  {
    name: 'DdcClusters.ClusterEraPaid',
    v63002: new EventType(
        'DdcClusters.ClusterEraPaid',
        sts.struct({
            clusterId: v63002.H160,
            eraId: sts.number(),
        })
    ),
}
