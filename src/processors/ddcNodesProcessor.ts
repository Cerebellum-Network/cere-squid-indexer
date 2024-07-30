import {BlockHeader, Event} from "@subsquid/substrate-processor";
import {events, storage} from "../types";
import {logStorageError, throwUnsupportedSpec, throwUnsupportedStorageSpec, toCereAddress} from "../utils";

export interface DdcNodeInfo {
    id: string,

    providerId: string,
    clusterId: string,

    host: string,
    domain: string | null,
    ssl: boolean,
    httpPort: number,
    grpcPort: number,
    p2pPort: number,
    mode: string,
}

export interface State {
    updatedNodes: Map<string, DdcNodeInfo>
    removedNodes: Set<string>
}

export class DdcNodesProcessor {
    private state: State = {
        updatedNodes: new Map<string, DdcNodeInfo>,
        removedNodes: new Set<string>
    }

    private async processDdcNodesEvents(nodeId: string, block: BlockHeader) {
        let nodeInfo: DdcNodeInfo | undefined
        if (storage.ddcNodes.storageNodes.v48008.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48008.get(block, nodeId)
            if (node && node.clusterId) {
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
                    mode: 'Storage',
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48013.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48013.get(block, nodeId)
            if (node && node.clusterId) {
                nodeInfo = {
                    id: nodeId,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: node.props.host,
                    domain: null,
                    ssl: false,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: 'Storage',
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48017.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48017.get(block, nodeId)
            if (node && node.clusterId) {
                nodeInfo = {
                    id: nodeId,
                    providerId: node.providerId,
                    clusterId: node.clusterId,
                    host: node.props.host,
                    domain: null,
                    ssl: false,
                    httpPort: node.props.httpPort,
                    grpcPort: node.props.grpcPort,
                    p2pPort: node.props.p2PPort,
                    mode: node.props.mode.__kind,
                }
            }
        } else if (storage.ddcNodes.storageNodes.v48400.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v48400.get(block, nodeId)
            if (node && node.clusterId) {
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
                    mode: node.props.mode.__kind,
                }
            }
        } else if (storage.ddcNodes.storageNodes.v54100.is(block)) {
            const node = await storage.ddcNodes.storageNodes.v54100.get(block, nodeId)
            if (node && node.clusterId) {
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
                    mode: node.props.mode.__kind,
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
                if (events.ddcClusters.clusterNodeAdded.v48008.is(event)) {
                    const nodeId = events.ddcClusters.clusterNodeAdded.v48008.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block)
                } else if (events.ddcClusters.clusterNodeAdded.v48017.is(event)) {
                    const nodeId = events.ddcClusters.clusterNodeAdded.v48017.decode(event).nodePubKey.value
                    await this.processDdcNodesEvents(nodeId, block)
                } else {
                    throwUnsupportedSpec(event, block)
                }
                break
            }
            case events.ddcClusters.clusterNodeRemoved.name: {
                let removedNode
                if (events.ddcClusters.clusterNodeRemoved.v48008.is(event)) {
                    removedNode = events.ddcClusters.clusterNodeRemoved.v48008.decode(event).nodePubKey.value
                } else if (events.ddcClusters.clusterNodeRemoved.v48017.is(event)) {
                    removedNode = events.ddcClusters.clusterNodeRemoved.v48017.decode(event).nodePubKey.value
                } else {
                    throwUnsupportedSpec(event, block)
                }
                if (removedNode) {
                    this.state.removedNodes.add(removedNode)
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