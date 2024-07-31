import {BlockHeader, Event} from "@subsquid/substrate-processor";
import {events, storage} from "../types";
import {logStorageError, throwUnsupportedSpec, throwUnsupportedStorageSpec, toCereAddress} from "../utils";
import {DdcNodeMode} from "../model";

export interface DdcNodeInfo {
    id: string,

    providerId: string,
    clusterId: string | undefined,

    host: string,
    domain: string | null,
    ssl: boolean,
    httpPort: number,
    grpcPort: number,
    p2pPort: number,
    mode: DdcNodeMode,
}

export interface State {
    addedToCluster: Map<string, Set<string>>
    removedFromCluster: Map<string, Set<string>>
    updatedNodes: Map<string, DdcNodeInfo>
    removedNodes: Set<string>
}

export class DdcNodesProcessor {
    private state: State = {
        addedToCluster: new Map<string, Set<string>>(),
        removedFromCluster: new Map<string, Set<string>>(),
        updatedNodes: new Map<string, DdcNodeInfo>,
        removedNodes: new Set<string>
    }

    private async processDdcNodesEvents(nodeId: string, block: BlockHeader) {
        let nodeInfo: DdcNodeInfo | undefined
        if (storage.ddcNodes.storageNodes.v48008.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48008.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: nodeId,
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
        } else if (storage.ddcNodes.storageNodes.v48013.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48013.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: nodeId,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: node.props.host,
                    domain: node.props.domain,
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode.Storage,
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48017.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48017.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: nodeId,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: node.props.host,
                    domain: node.props.domain,
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
                    id: nodeId,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: node.props.host,
                    domain: node.props.domain,
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode[node.props.mode.__kind],
                }
            }
        } else if (storage.ddcNodes.storageNodes.v54100.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v54100.get(block, nodeId)
            if (node) {
                nodeInfo = {
                    id: nodeId,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: node.props.host,
                    domain: node.props.domain,
                    ssl: node.props.ssl,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: DdcNodeMode[node.props.mode.__kind],
                }
            }
        } else {
            throwUnsupportedStorageSpec(block)
        }
        if (nodeInfo) {
            nodeInfo.providerId = toCereAddress(nodeInfo.providerId)
            this.state.updatedNodes.set(nodeId, nodeInfo)
        } else {
            logStorageError("DDC node", nodeId, block)
        }
    }

    getState(): State {
        return this.state
    }

    async process(event: Event, block: BlockHeader) {
        switch (event.name) {
            case events.ddcClusters.clusterNodeAdded.name: {
                let decodedEvent
                if (events.ddcClusters.clusterNodeAdded.v48008.is(event)) {
                    decodedEvent = events.ddcClusters.clusterNodeAdded.v48008.decode(event)
                } else if (events.ddcClusters.clusterNodeAdded.v48017.is(event)) {
                    decodedEvent = events.ddcClusters.clusterNodeAdded.v48017.decode(event)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                if (decodedEvent) {
                    const nodesInCluster = this.state.addedToCluster.get(decodedEvent.clusterId) ?? new Set<string>
                    nodesInCluster.add(decodedEvent.nodePubKey.value)
                    this.state.addedToCluster.set(decodedEvent.clusterId, nodesInCluster)
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
                    throwUnsupportedSpec(event, block)
                }
                if (decodedEvent) {
                    const nodesRemovedFromCluster = this.state.removedFromCluster.get(decodedEvent.clusterId) ?? new Set<string>
                    nodesRemovedFromCluster.add(decodedEvent.nodePubKey.value)
                    this.state.removedFromCluster.set(decodedEvent.clusterId, nodesRemovedFromCluster)
                }
                break
            }
            case events.ddcNodes.nodeCreated.name: {
                if (events.ddcNodes.nodeCreated.v48008.is(event)) {
                    const nodeId = events.ddcNodes.nodeCreated.v48008.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block)
                } else if (events.ddcNodes.nodeCreated.v48017.is(event)) {
                    const nodeId = events.ddcNodes.nodeCreated.v48017.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcNodes.nodeParamsChanged.name: {
                if (events.ddcNodes.nodeParamsChanged.v48008.is(event)) {
                    const nodeId = events.ddcNodes.nodeParamsChanged.v48008.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block)
                } else if (events.ddcNodes.nodeParamsChanged.v48017.is(event)) {
                    const nodeId = events.ddcNodes.nodeParamsChanged.v48017.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block)
                } else {
                    throwUnsupportedSpec(event, block)
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
                    throwUnsupportedSpec(event, block)
                }
                if (removedNode) {
                    this.state.removedNodes.add(removedNode)
                }
                break
            }
            default: {
                break
            }
        }
    }
}