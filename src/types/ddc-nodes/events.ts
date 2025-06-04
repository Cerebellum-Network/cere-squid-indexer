import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48013 from '../v48013'
import * as v54100 from '../v54100'
import * as v63002 from '../v63002'
import * as v64000 from '../v64000'

export const nodeCreated =  {
    name: 'DdcNodes.NodeCreated',
    v48013: new EventType(
        'DdcNodes.NodeCreated',
        sts.struct({
            nodePubKey: v48013.NodePubKey,
        })
    ),
    v54100: new EventType(
        'DdcNodes.NodeCreated',
        sts.struct({
            nodePubKey: v54100.NodePubKey,
        })
    ),
    v63002: new EventType(
        'DdcNodes.NodeCreated',
        sts.struct({
            nodePubKey: v63002.NodePubKey,
        })
    ),
}

export const nodeDeleted =  {
    name: 'DdcNodes.NodeDeleted',
    v48013: new EventType(
        'DdcNodes.NodeDeleted',
        sts.struct({
            nodePubKey: v48013.NodePubKey,
        })
    ),
    v54100: new EventType(
        'DdcNodes.NodeDeleted',
        sts.struct({
            nodePubKey: v54100.NodePubKey,
        })
    ),
    v63002: new EventType(
        'DdcNodes.NodeDeleted',
        sts.struct({
            nodePubKey: v63002.NodePubKey,
        })
    ),
}

export const nodeParamsChanged =  {
    name: 'DdcNodes.NodeParamsChanged',
    v63002: new EventType(
        'DdcNodes.NodeParamsChanged',
        sts.struct({
            nodePubKey: v63002.NodePubKey,
        })
    ),
}

export const nodeTotalUsageUpdated =  {
    name: 'DdcNodes.NodeTotalUsageUpdated',
    v64000: new EventType(
        'DdcNodes.NodeTotalUsageUpdated',
        sts.struct({
            nodePubKey: v64000.NodePubKey,
            transferredBytes: sts.bigint(),
            storedBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
        })
    ),
}
