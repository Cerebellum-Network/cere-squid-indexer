import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { events, storage } from '../types'
import { logStorageError, logUnsupportedEventVersion, throwUnsupportedStorageSpec, toCereAddress } from '../utils'
import { DdcClusterStatus } from '../model'
import { BaseProcessor } from './processor'

export interface DdcClusterInfo {
    id: string
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

    private newClusterInfo(clusterId: string, managerId: string): DdcClusterInfo {
        return {
            id: clusterId,
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

    private async processDdcClustersEvents(clusterId: string, block: BlockHeader) {
        let clusterInfo: DdcClusterInfo | undefined
        if (storage.ddcClusters.clusters.v48008.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v48008.get(block, clusterId)
            if (cluster) {
                clusterInfo = this.newClusterInfo(clusterId, cluster.managerId)
            }
        } else if (storage.ddcClusters.clusters.v48013.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v48013.get(block, clusterId)
            if (cluster) {
                clusterInfo = this.newClusterInfo(clusterId, cluster.managerId)
            }
        } else if (storage.ddcClusters.clusters.v48016.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v48016.get(block, clusterId)
            if (cluster) {
                clusterInfo = this.newClusterInfo(clusterId, cluster.managerId)
            }
        } else if (storage.ddcClusters.clusters.v53003.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v53003.get(block, clusterId)
            if (cluster) {
                clusterInfo = this.newClusterInfo(clusterId, cluster.managerId)
                clusterInfo.erasureCodingRequired = cluster.props.erasureCodingRequired
                clusterInfo.erasureCodingTotal = cluster.props.erasureCodingTotal
                clusterInfo.replicationTotal = cluster.props.replicationTotal
            }
        } else if (storage.ddcClusters.clusters.v54001.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v54001.get(block, clusterId)
            if (cluster) {
                clusterInfo = this.newClusterInfo(clusterId, cluster.managerId)
                clusterInfo.erasureCodingRequired = cluster.props.erasureCodingRequired
                clusterInfo.erasureCodingTotal = cluster.props.erasureCodingTotal
                clusterInfo.replicationTotal = cluster.props.replicationTotal
                clusterInfo.status = DdcClusterStatus[cluster.status.__kind]
            }
        } else if (storage.ddcClusters.clusters.v54105.is(block)) {
            const cluster = await storage.ddcClusters.clusters.v54105.get(block, clusterId)
            if (cluster) {
                clusterInfo = this.newClusterInfo(clusterId, cluster.managerId)
                clusterInfo.erasureCodingRequired = cluster.props.erasureCodingRequired
                clusterInfo.erasureCodingTotal = cluster.props.erasureCodingTotal
                clusterInfo.replicationTotal = cluster.props.replicationTotal
                clusterInfo.status = DdcClusterStatus[cluster.status.__kind]
            }
        } else {
            throwUnsupportedStorageSpec(block)
        }
        if (clusterInfo) {
            clusterInfo.managerId = toCereAddress(clusterInfo.managerId)
            let clusterGovParams
            if (storage.ddcClusters.clustersGovParams.v48013.is(block)) {
                clusterGovParams = await storage.ddcClusters.clustersGovParams.v48013.get(block, clusterId)
            } else if (storage.ddcClusters.clustersGovParams.v48015.is(block)) {
                clusterGovParams = await storage.ddcClusters.clustersGovParams.v48015.get(block, clusterId)
            } else if (storage.ddcClusters.clustersGovParams.v48016.is(block)) {
                clusterGovParams = await storage.ddcClusters.clustersGovParams.v48016.get(block, clusterId)
            } else if (storage.ddcClusters.clustersGovParams.v48017.is(block)) {
                clusterGovParams = await storage.ddcClusters.clustersGovParams.v48017.get(block, clusterId)
            } else if (storage.ddcClusters.clustersGovParams.v48400.is(block)) {
                clusterGovParams = await storage.ddcClusters.clustersGovParams.v48400.get(block, clusterId)
            }
            if (clusterGovParams) {
                clusterInfo.treasuryShare = BigInt(clusterGovParams.treasuryShare)
                clusterInfo.validatorsShare = BigInt(clusterGovParams.validatorsShare)
                clusterInfo.clusterReserveShare = BigInt(clusterGovParams.clusterReserveShare)
                clusterInfo.storageBondSize = clusterGovParams.storageBondSize
                clusterInfo.storageChillDelay = clusterGovParams.storageChillDelay
                clusterInfo.storageUnbondingDelay = clusterGovParams.storageUnbondingDelay
                clusterInfo.unitPerMbStored = clusterGovParams.unitPerMbStored
                clusterInfo.unitPerMbStreamed = clusterGovParams.unitPerMbStreamed
                clusterInfo.unitPerPutRequest = clusterGovParams.unitPerPutRequest
                clusterInfo.unitPerGetRequest = clusterGovParams.unitPerGetRequest
            }
            this._state.set(clusterId, clusterInfo)
        } else {
            logStorageError('DDC cluster', clusterId, block)
        }
    }

    async process(event: Event, block: BlockHeader) {
        switch (event.name) {
            case events.ddcClusters.clusterCreated.name: {
                if (events.ddcClusters.clusterCreated.v48008.is(event)) {
                    const clusterId = events.ddcClusters.clusterCreated.v48008.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterParamsSet.name: {
                if (events.ddcClusters.clusterParamsSet.v48008.is(event)) {
                    const clusterId = events.ddcClusters.clusterParamsSet.v48008.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterGovParamsSet.name: {
                if (events.ddcClusters.clusterGovParamsSet.v48013.is(event)) {
                    const clusterId = events.ddcClusters.clusterGovParamsSet.v48013.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterProtocolParamsSet.name: {
                if (events.ddcClusters.clusterProtocolParamsSet.v54001.is(event)) {
                    const clusterId = events.ddcClusters.clusterProtocolParamsSet.v54001.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterActivated.name: {
                if (events.ddcClusters.clusterActivated.v54001.is(event)) {
                    const clusterId = events.ddcClusters.clusterActivated.v54001.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterBonded.name: {
                if (events.ddcClusters.clusterBonded.v54001.is(event)) {
                    const clusterId = events.ddcClusters.clusterBonded.v54001.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterUnbonded.name: {
                if (events.ddcClusters.clusterUnbonded.v54001.is(event)) {
                    const clusterId = events.ddcClusters.clusterUnbonded.v54001.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterNodeValidated.name: {
                if (events.ddcClusters.clusterNodeValidated.v54001.is(event)) {
                    const clusterId = events.ddcClusters.clusterNodeValidated.v54001.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            case events.ddcClusters.clusterUnbonding.name: {
                if (events.ddcClusters.clusterUnbonding.v54004.is(event)) {
                    const clusterId = events.ddcClusters.clusterUnbonding.v54004.decode(event).clusterId
                    await this.processDdcClustersEvents(clusterId, block)
                } else {
                    logUnsupportedEventVersion(event, block)
                }
                break
            }
            default: {
                break
            }
        }
    }
}
