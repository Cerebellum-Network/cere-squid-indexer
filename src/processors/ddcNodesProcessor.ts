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

    private async processDdcNodesEvents(nodeId: string, block: Block, event: Event) {
        let createdAtBlockHeight
        if (event.name === events.ddcNodes.nodeCreated.name) {
            createdAtBlockHeight = block.height
        }

        let nodeInfo: DdcNodeInfo | undefined
        if (storage.ddcNodes.storageNodes.v54113.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v54113.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: toCereAddress(node.pubKey),
                    createdAtBlockHeight: createdAtBlockHeight,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: decodeAsciiStringFromScaleVecFixed(MaxHostLen, node.props.host as HexString),
                    domain: decodeAsciiStringFromScaleVecFixed(MaxDomainLen, node.props.domain as HexString),
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode[node.props.mode.__kind],
                    // TODO: set usage when usage mutation is implemented on the blockchain side.
                }
            }
        } else if (storage.ddcNodes.storageNodes.v54100.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v54100.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: toCereAddress(node.pubKey),
                    createdAtBlockHeight: createdAtBlockHeight,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: decodeAsciiStringFromScaleVecFixed(MaxHostLen, node.props.host as HexString),
                    domain: decodeAsciiStringFromScaleVecFixed(MaxDomainLen, node.props.domain as HexString),
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode[node.props.mode.__kind],
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48400.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48400.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: toCereAddress(node.pubKey),
                    createdAtBlockHeight: createdAtBlockHeight,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: decodeAsciiStringFromScaleVecFixed(MaxHostLen, node.props.host as HexString),
                    domain: decodeAsciiStringFromScaleVecFixed(MaxDomainLen, node.props.domain as HexString),
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode[node.props.mode.__kind],
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48017.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48017.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: toCereAddress(node.pubKey),
                    createdAtBlockHeight: createdAtBlockHeight,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: decodeAsciiStringFromScaleVecFixed(MaxHostLen, node.props.host as HexString),
                    domain: decodeAsciiStringFromScaleVecFixed(MaxDomainLen, node.props.domain as HexString),
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode[node.props.mode.__kind],
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48013.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48013.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: toCereAddress(node.pubKey),
                    createdAtBlockHeight: createdAtBlockHeight,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: decodeAsciiStringFromScaleVecFixed(MaxHostLen, node.props.host as HexString),
                    domain: decodeAsciiStringFromScaleVecFixed(MaxDomainLen, node.props.domain as HexString),
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode.Storage,
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48008.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48008.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: toCereAddress(node.pubKey),
                    createdAtBlockHeight: createdAtBlockHeight,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: 'localhost',
                    domain: null,
                    ssl: false,
                    httpPort: 8080,
                    grpcPort: 9090,
                    p2pPort: 9070,
                    mode: DdcNodeMode.Storage,
                }
            }
        } else {
            logUnsupportedStorageVersion('DdcNodes.StorageNodes', block)
        }
        if (nodeInfo) {
            nodeInfo.providerId = toCereAddress(nodeInfo.providerId)
            this._state.updatedNodes.set(nodeId, nodeInfo)
        } else {
            logEmptyStorage('DdcNodes.StorageNodes', nodeId, block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcClusters.clusterNodeAdded.name: {
                let decodedEvent
                if (events.ddcClusters.clusterNodeAdded.v48008.is(event)) {
                    decodedEvent = events.ddcClusters.clusterNodeAdded.v48008.decode(event)
                } else if (events.ddcClusters.clusterNodeAdded.v48017.is(event)) {
                    decodedEvent = events.ddcClusters.clusterNodeAdded.v48017.decode(event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                if (decodedEvent) {
                    const nodesInCluster = this._state.addedToCluster.get(decodedEvent.clusterId) ?? new Set<string>()
                    nodesInCluster.add(decodedEvent.nodePubKey.value)
                    this._state.addedToCluster.set(decodedEvent.clusterId, nodesInCluster)
                }
                break
            }
            case events.ddcClusters.clusterNodeRemoved.name: {
                let decodedEvent
                if (events.ddcClusters.clusterNodeRemoved.v48008.is(event)) {
                    decodedEvent = events.ddcClusters.clusterNodeRemoved.v48008.decode(event)
                } else if (events.ddcClusters.clusterNodeRemoved.v48017.is(event)) {
                    decodedEvent = events.ddcClusters.clusterNodeRemoved.v48017.decode(event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                if (decodedEvent) {
                    const nodesRemovedFromCluster =
                        this._state.removedFromCluster.get(decodedEvent.clusterId) ?? new Set<string>()
                    nodesRemovedFromCluster.add(decodedEvent.nodePubKey.value)
                    this._state.removedFromCluster.set(decodedEvent.clusterId, nodesRemovedFromCluster)
                }
                break
            }
            case events.ddcNodes.nodeCreated.name: {
                if (events.ddcNodes.nodeCreated.v48008.is(event)) {
                    const nodeId = events.ddcNodes.nodeCreated.v48008.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block, event)
                } else if (events.ddcNodes.nodeCreated.v48017.is(event)) {
                    const nodeId = events.ddcNodes.nodeCreated.v48017.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block, event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcNodes.nodeParamsChanged.name: {
                if (events.ddcNodes.nodeParamsChanged.v48008.is(event)) {
                    const nodeId = events.ddcNodes.nodeParamsChanged.v48008.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block, event)
                } else if (events.ddcNodes.nodeParamsChanged.v48017.is(event)) {
                    const nodeId = events.ddcNodes.nodeParamsChanged.v48017.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block, event)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcNodes.nodeDeleted.name: {
                let removedNode
                if (events.ddcNodes.nodeDeleted.v48008.is(event)) {
                    removedNode = events.ddcNodes.nodeDeleted.v48008.decode(event).nodePubKey.value
                } else if (events.ddcNodes.nodeDeleted.v48017.is(event)) {
                    removedNode = events.ddcNodes.nodeDeleted.v48017.decode(event).nodePubKey.value
                } else {
                    logUnsupportedEventVersion(event)
                }
                if (removedNode) {
                    this._state.removedNodes.add(removedNode)
                }
                break
            }
            default: {
                break
            }
        }
    }
}
