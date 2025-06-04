import type { HexString } from '@polkadot/util/types'
import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import {
    decodeAsciiStringFromScaleVecFixed,
    logEmptyStorage,
    logUnsupportedEventVersion,
    logUnsupportedStorageVersion,
    toCereAddress,
} from '../utils'
import { Block } from '../processor'
import { DdcNodeMode } from '../model'
import { BaseProcessor } from './processor'

const MaxHostLen = 255
const MaxDomainLen = 255

interface NodeUsage {
    block: number
    timestamp: Date

    transferredBytes: bigint
    storedBytes: bigint
    numberOfPuts: bigint
    numberOfGets: bigint
}

interface DdcNodeInfo {
    id: string

    createdAtBlockHeight?: number

    providerId: string
    clusterId: string | undefined

    host: string
    domain: string | null
    ssl: boolean
    httpPort: number
    grpcPort: number
    p2pPort: number
    mode: DdcNodeMode
    usage?: NodeUsage
}

type State = {
    addedToCluster: Map<string, Set<string>>
    removedFromCluster: Map<string, Set<string>>
    updatedNodes: Map<string, DdcNodeInfo>
    removedNodes: Set<string>
}

export class DdcNodesProcessor extends BaseProcessor<State> {
    constructor() {
        super({
            addedToCluster: new Map<string, Set<string>>(),
            removedFromCluster: new Map<string, Set<string>>(),
            updatedNodes: new Map<string, DdcNodeInfo>(),
            removedNodes: new Set<string>(),
        })
    }

    private async processDdcNodeInfo(nodePubKey: string, block: Block) {
        let nodeInfo
        if (storage.ddcNodes.storageNodes.v63002.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v63002.get(block, nodePubKey)
            if (node) {
                nodeInfo = {
                    id: nodePubKey,
                    createdAtBlockHeight: block.height,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: Buffer.from(node.props.host).toString('utf8'),
                    domain: Buffer.from(node.props.domain).toString('utf8'),
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: node.props.mode.__kind as DdcNodeMode,
                }
                this._state.updatedNodes.set(nodePubKey, nodeInfo)
            }
        } else {
            logUnsupportedStorageVersion('DdcNodes.StorageNodes', block)
        }
        
        if (!nodeInfo) {
            logEmptyStorage('DdcNodes.StorageNodes', nodePubKey, block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcNodes.nodeCreated.name: {
                if (events.ddcNodes.nodeCreated.v63002.is(event)) {
                    const decoded = events.ddcNodes.nodeCreated.v63002.decode(event)
                    const nodePubKey = decoded.nodePubKey.toString()
                    await this.processDdcNodeInfo(nodePubKey, block)
                } else if (events.ddcNodes.nodeCreated.v54100.is(event)) {
                    const decoded = events.ddcNodes.nodeCreated.v54100.decode(event)
                    const nodePubKey = decoded.nodePubKey.toString()
                    await this.processDdcNodeInfo(nodePubKey, block)
                } else if (events.ddcNodes.nodeCreated.v48013.is(event)) {
                    const decoded = events.ddcNodes.nodeCreated.v48013.decode(event)
                    const nodePubKey = decoded.nodePubKey.toString()
                    await this.processDdcNodeInfo(nodePubKey, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcNodes.nodeDeleted.name: {
                if (events.ddcNodes.nodeDeleted.v63002.is(event)) {
                    const decoded = events.ddcNodes.nodeDeleted.v63002.decode(event)
                    const nodePubKey = decoded.nodePubKey.toString()
                    this._state.removedNodes.add(nodePubKey)
                } else if (events.ddcNodes.nodeDeleted.v54100.is(event)) {
                    const decoded = events.ddcNodes.nodeDeleted.v54100.decode(event)
                    const nodePubKey = decoded.nodePubKey.toString()
                    this._state.removedNodes.add(nodePubKey)
                } else if (events.ddcNodes.nodeDeleted.v48013.is(event)) {
                    const decoded = events.ddcNodes.nodeDeleted.v48013.decode(event)
                    const nodePubKey = decoded.nodePubKey.toString()
                    this._state.removedNodes.add(nodePubKey)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcNodes.nodeParamsChanged.name: {
                if (events.ddcNodes.nodeParamsChanged.v63002.is(event)) {
                    const decoded = events.ddcNodes.nodeParamsChanged.v63002.decode(event)
                    const nodeKey = decoded.nodePubKey
                    const nodePubKey = nodeKey.__kind === 'StoragePubKey' ? toCereAddress(nodeKey.value) : nodeKey.toString()
                    await this.processDdcNodeInfo(nodePubKey, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            default: {
                break
            }
        }
    }
}
