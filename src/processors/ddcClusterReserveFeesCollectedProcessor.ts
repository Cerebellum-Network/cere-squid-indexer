import { randomUUID } from 'crypto'
import { assertNotNull } from '@subsquid/util-internal'
import { Event } from '@subsquid/substrate-processor'
import { Block } from '../processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion } from '../utils'
import { BaseProcessor } from './processor'

export interface ClusterReserveFeesCollectedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    amount: bigint
}

type State = ClusterReserveFeesCollectedData[]

export class DdcClusterReserveFeesCollectedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as State)
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.clusterReserveFeesCollected.name: {
                if (Events.ddcPayouts.clusterReserveFeesCollected.v48015.is(event)) {
                    const decodedEvent = Events.ddcPayouts.clusterReserveFeesCollected.v48015.decode(event)

                    const data: ClusterReserveFeesCollectedData = {
                        id: randomUUID(),
                        blockNumber: block.height,
                        blockTimestamp: blockTimestamp,
                        clusterId: decodedEvent.clusterId,
                        eraId: decodedEvent.era,
                        amount: decodedEvent.amount,
                    }

                    this._state.push(data)
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
