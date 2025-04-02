import { assertNotNull } from '@subsquid/util-internal'
import { Event } from '@subsquid/substrate-processor'
import { randomUUID } from 'crypto'
import { Block } from '../processor'
import { BaseProcessor } from './processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'

export interface ChargedData {
    id: string
    blockHeight: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    batchIndex: number
    customerId: string
    bucketId: bigint | null
    amount: bigint
}

type State = ChargedData[]

export class DdcChargedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as State)
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.charged.name: {
                let decodedEvent
                let bucketId: bigint | null = null

                if (Events.ddcPayouts.charged.v48015.is(event)) {
                    decodedEvent = Events.ddcPayouts.charged.v48015.decode(event)
                } else if (Events.ddcPayouts.charged.v54100.is(event)) {
                    decodedEvent = Events.ddcPayouts.charged.v54100.decode(event)
                    bucketId = decodedEvent.bucketId
                } else {
                    logUnsupportedEventVersion(event)
                    break
                }

                const data: ChargedData = {
                    id: randomUUID(),
                    blockHeight: block.height,
                    blockTimestamp: blockTimestamp,
                    clusterId: decodedEvent.clusterId,
                    eraId: decodedEvent.era,
                    batchIndex: decodedEvent.batchIndex,
                    customerId: decodedEvent.customerId,
                    bucketId: bucketId,
                    amount: decodedEvent.amount,
                }

                this._state.push(data);
                
                break
            }
            default: {
                break
            }
        }
    }
}
