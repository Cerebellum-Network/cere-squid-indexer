import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48008 from '../v48008'
import * as v48013 from '../v48013'
import * as v48017 from '../v48017'
import * as v54001 from '../v54001'
import * as v54004 from '../v54004'
import * as v54105 from '../v54105'

export const clusterCreated =  {
    name: 'DdcClusters.ClusterCreated',
    v48008: new EventType(
        'DdcClusters.ClusterCreated',
        sts.struct({
            clusterId: v48008.H160,
        })
    ),
}

export const clusterNodeAdded =  {
    name: 'DdcClusters.ClusterNodeAdded',
    v48008: new EventType(
        'DdcClusters.ClusterNodeAdded',
        sts.struct({
            clusterId: v48008.H160,
            nodePubKey: v48008.NodePubKey,
        })
    ),
    v48017: new EventType(
        'DdcClusters.ClusterNodeAdded',
        sts.struct({
            clusterId: v48017.H160,
            nodePubKey: v48017.NodePubKey,
        })
    ),
}

export const clusterNodeRemoved =  {
    name: 'DdcClusters.ClusterNodeRemoved',
    v48008: new EventType(
        'DdcClusters.ClusterNodeRemoved',
        sts.struct({
            clusterId: v48008.H160,
            nodePubKey: v48008.NodePubKey,
        })
    ),
    v48017: new EventType(
        'DdcClusters.ClusterNodeRemoved',
        sts.struct({
            clusterId: v48017.H160,
            nodePubKey: v48017.NodePubKey,
        })
    ),
}

export const clusterParamsSet =  {
    name: 'DdcClusters.ClusterParamsSet',
    v48008: new EventType(
        'DdcClusters.ClusterParamsSet',
        sts.struct({
            clusterId: v48008.H160,
        })
    ),
}

export const clusterGovParamsSet =  {
    name: 'DdcClusters.ClusterGovParamsSet',
    v48013: new EventType(
        'DdcClusters.ClusterGovParamsSet',
        sts.struct({
            clusterId: v48013.H160,
        })
    ),
}

export const clusterProtocolParamsSet =  {
    name: 'DdcClusters.ClusterProtocolParamsSet',
    v54001: new EventType(
        'DdcClusters.ClusterProtocolParamsSet',
        sts.struct({
            clusterId: v54001.H160,
        })
    ),
}

export const clusterActivated =  {
    name: 'DdcClusters.ClusterActivated',
    v54001: new EventType(
        'DdcClusters.ClusterActivated',
        sts.struct({
            clusterId: v54001.H160,
        })
    ),
}

export const clusterBonded =  {
    name: 'DdcClusters.ClusterBonded',
    v54001: new EventType(
        'DdcClusters.ClusterBonded',
        sts.struct({
            clusterId: v54001.H160,
        })
    ),
}

export const clusterUnbonded =  {
    name: 'DdcClusters.ClusterUnbonded',
    v54001: new EventType(
        'DdcClusters.ClusterUnbonded',
        sts.struct({
            clusterId: v54001.H160,
        })
    ),
}

export const clusterNodeValidated =  {
    name: 'DdcClusters.ClusterNodeValidated',
    v54001: new EventType(
        'DdcClusters.ClusterNodeValidated',
        sts.struct({
            clusterId: v54001.H160,
            nodePubKey: v54001.NodePubKey,
            succeeded: sts.boolean(),
        })
    ),
}

export const clusterUnbonding =  {
    name: 'DdcClusters.ClusterUnbonding',
    v54004: new EventType(
        'DdcClusters.ClusterUnbonding',
        sts.struct({
            clusterId: v54004.H160,
        })
    ),
}

export const clusterEraValidated =  {
    name: 'DdcClusters.ClusterEraValidated',
    v54105: new EventType(
        'DdcClusters.ClusterEraValidated',
        sts.struct({
            clusterId: v54105.H160,
            eraId: sts.number(),
        })
    ),
}
