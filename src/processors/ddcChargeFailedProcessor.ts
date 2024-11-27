import { randomUUID } from 'crypto'
import { Event } from '@subsquid/substrate-processor'
import { assertNotNull } from '@subsquid/util-internal'
import { Block } from '../processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'
import { BaseProcessor } from './processor'

export interface ChargeFailedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    batchIndex: number
    customerId: string
    bucketId: bigint | null
    charged: bigint | null
    expectedToCharge: bigint | null
}

type State = ChargeFailedData[]

export class DdcChargeFailedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as ChargeFailedData[])
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.chargeFailed.name: {
                let decodedEvent
                let bucketId: bigint | null = null
                let charged: bigint | null = null
                let expectedToCharge: bigint | null = null

                if (Events.ddcPayouts.chargeFailed.v48015.is(event)) {
                    decodedEvent = Events.ddcPayouts.chargeFailed.v48015.decode(event)
                    charged = decodedEvent.amount
                    expectedToCharge = decodedEvent.amount
                } else if (Events.ddcPayouts.chargeFailed.v48800.is(event)) {
                    decodedEvent = Events.ddcPayouts.chargeFailed.v48800.decode(event)
                    charged = decodedEvent.charged
                    expectedToCharge = decodedEvent.expectedToCharge
                } else if (Events.ddcPayouts.chargeFailed.v54100.is(event)) {
                    decodedEvent = Events.ddcPayouts.chargeFailed.v54100.decode(event)
                    bucketId = decodedEvent.bucketId
                    charged = decodedEvent.charged
                    expectedToCharge = decodedEvent.expectedToCharge
                } else {
                    logUnsupportedEventVersion(event)
                    break
                }

                const data: ChargeFailedData = {
                    id: randomUUID(),
                    blockNumber: block.height,
                    blockTimestamp: blockTimestamp,
                    clusterId: decodedEvent.clusterId,
                    eraId: decodedEvent.era,
                    batchIndex: decodedEvent.batchIndex,
                    customerId: decodedEvent.customerId,
                    bucketId: bucketId,
                    charged: charged,
                    expectedToCharge: expectedToCharge,
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
