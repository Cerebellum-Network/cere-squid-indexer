import { Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logEmptyStorage, logUnsupportedEventVersion, logUnsupportedStorageVersion, toCereAddress } from '../utils'
import { Block } from '../processor'
import { DdcClusterStatus } from '../model'
import { BaseProcessor } from './processor'

export interface DdcClusterInfo {
    id: string

    createdAtBlockHeight?: number

    managerId: string

    treasuryShare: bigint
    validatorsShare: bigint
    clusterReserveShare: bigint
    storageBondSize: bigint
    storageChillDelay: number
    storageUnbondingDelay: number
    unitPerMbStored: bigint
    unitPerMbStreamed: bigint
    unitPerPutRequest: bigint
    unitPerGetRequest: bigint

    erasureCodingRequired: number
    erasureCodingTotal: number
    replicationTotal: number

    status: DdcClusterStatus
}

type State = Map<string, DdcClusterInfo>

export class DdcClustersProcessor extends BaseProcessor<State> {
    constructor() {
        super(new Map<string, DdcClusterInfo>())
    }

    private newClusterInfo(clusterId: string, managerId: string, createdAt: number | undefined): DdcClusterInfo {
        return {
            id: clusterId,
            createdAtBlockHeight: createdAt,
            managerId: managerId,
            clusterReserveShare: 0n,
            erasureCodingRequired: 0,
            erasureCodingTotal: 0,
            replicationTotal: 0,
            status: DdcClusterStatus.Activated,
            storageBondSize: 0n,
            storageChillDelay: 0,
            storageUnbondingDelay: 0,
            treasuryShare: 0n,
            unitPerGetRequest: 0n,
            unitPerMbStored: 0n,
            unitPerMbStreamed: 0n,
            unitPerPutRequest: 0n,
            validatorsShare: 0n,
        }
    }

    private async processDdcClustersEvents(clusterId: string, block: Block) {
        let clusterInfo
        if (storage.ddcClusters.clusters.v63002.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v63002.get(block, clusterId)
            if (cluster) {
                clusterInfo = {
                    id: clusterId,
                    createdAtBlockHeight: block.height,
                    managerId: cluster.managerId,
                    treasuryShare: 0n, // Default values - to be updated from gov params
                    validatorsShare: 0n,
                    clusterReserveShare: 0n,
                    storageBondSize: 0n,
                    storageChillDelay: 0,
                    storageUnbondingDelay: 0,
                    unitPerMbStored: 0n,
                    unitPerMbStreamed: 0n,
                    unitPerPutRequest: 0n,
                    unitPerGetRequest: 0n,
                    erasureCodingRequired: cluster.props.erasureCodingRequired,
                    erasureCodingTotal: cluster.props.erasureCodingTotal,
                    replicationTotal: cluster.props.replicationTotal,
                    status: cluster.status.__kind === 'Activated' ? DdcClusterStatus.Activated :
                           cluster.status.__kind === 'Bonded' ? DdcClusterStatus.Bonded :
                           cluster.status.__kind === 'Unbonded' ? DdcClusterStatus.Unbonded :
                           DdcClusterStatus.Unbonding,
                }
            }
        } else {
            logUnsupportedStorageVersion('DdcClusters.Clusters', block)
        }
        
        if (clusterInfo) {
            // Try to get cluster gov params
            let clusterGovParams
            if (storage.ddcClusters.clustersGovParams.v63002.is(block)) {
                clusterGovParams = await storage.ddcClusters.clustersGovParams.v63002.get(block, clusterId)
            }
            
            if (clusterGovParams) {
                clusterInfo.treasuryShare = clusterGovParams.treasuryShare
                clusterInfo.validatorsShare = clusterGovParams.validatorsShare
                clusterInfo.clusterReserveShare = clusterGovParams.clusterReserveShare
                clusterInfo.storageBondSize = clusterGovParams.storageBondSize
                clusterInfo.storageChillDelay = clusterGovParams.storageChillDelay
                clusterInfo.storageUnbondingDelay = clusterGovParams.storageUnbondingDelay
                clusterInfo.unitPerMbStored = clusterGovParams.unitPerMbStored
                clusterInfo.unitPerMbStreamed = clusterGovParams.unitPerMbStreamed
                clusterInfo.unitPerPutRequest = clusterGovParams.unitPerPutRequest
                clusterInfo.unitPerGetRequest = clusterGovParams.unitPerGetRequest
            }
            
            clusterInfo.managerId = toCereAddress(clusterInfo.managerId)
            this._state.set(clusterId, clusterInfo)
        } else {
            logEmptyStorage('DdcClusters.Clusters', clusterId, block)
        }
    }

    async process(event: Event, block: Block) {
        switch (event.name) {
            case events.ddcClusters.clusterCreated.name: {
                if (events.ddcClusters.clusterCreated.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterCreated.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else if (events.ddcClusters.clusterCreated.v54100.is(event)) {
                    const decoded = events.ddcClusters.clusterCreated.v54100.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else if (events.ddcClusters.clusterCreated.v48013.is(event)) {
                    const decoded = events.ddcClusters.clusterCreated.v48013.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterParamsSet.name: {
                if (events.ddcClusters.clusterParamsSet.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterParamsSet.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterProtocolParamsSet.name: {
                if (events.ddcClusters.clusterProtocolParamsSet.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterProtocolParamsSet.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterActivated.name: {
                if (events.ddcClusters.clusterActivated.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterActivated.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else if (events.ddcClusters.clusterActivated.v54100.is(event)) {
                    const decoded = events.ddcClusters.clusterActivated.v54100.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterBonded.name: {
                if (events.ddcClusters.clusterBonded.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterBonded.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterUnbonded.name: {
                if (events.ddcClusters.clusterUnbonded.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterUnbonded.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterNodeValidated.name: {
                if (events.ddcClusters.clusterNodeValidated.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterNodeValidated.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event)
                }
                break
            }
            case events.ddcClusters.clusterUnbonding.name: {
                if (events.ddcClusters.clusterUnbonding.v63002.is(event)) {
                    const decoded = events.ddcClusters.clusterUnbonding.v63002.decode(event)
                    const clusterId = decoded.clusterId
                    await this.processDdcClustersEvents(clusterId, block)
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
