import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48008 from '../v48008'
import * as v48017 from '../v48017'

export const nodeCreated =  {
    name: 'DdcNodes.NodeCreated',
    v48008: new EventType(
        'DdcNodes.NodeCreated',
        sts.struct({
            nodePubKey: v48008.NodePubKey,
        })
    ),
    v48017: new EventType(
        'DdcNodes.NodeCreated',
        sts.struct({
            nodePubKey: v48017.NodePubKey,
        })
    ),
}

export const nodeDeleted =  {
    name: 'DdcNodes.NodeDeleted',
    v48008: new EventType(
        'DdcNodes.NodeDeleted',
        sts.struct({
            nodePubKey: v48008.NodePubKey,
        })
    ),
    v48017: new EventType(
        'DdcNodes.NodeDeleted',
        sts.struct({
            nodePubKey: v48017.NodePubKey,
        })
    ),
}

export const nodeParamsChanged =  {
    name: 'DdcNodes.NodeParamsChanged',
    v48008: new EventType(
        'DdcNodes.NodeParamsChanged',
        sts.struct({
            nodePubKey: v48008.NodePubKey,
        })
    ),
    v48017: new EventType(
        'DdcNodes.NodeParamsChanged',
        sts.struct({
            nodePubKey: v48017.NodePubKey,
        })
    ),
}
