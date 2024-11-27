import { Event } from '@subsquid/substrate-processor'
import { assertNotNull } from '@subsquid/util-internal'
import { randomUUID } from 'crypto'
import { BaseProcessor } from './processor'
import { Block } from '../processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'

export interface BillingReportFinalizedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
}

type State = BillingReportFinalizedData[]

export class DdcBillingReportFinalizedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as State)
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.billingReportFinalized.name: {
                if (Events.ddcPayouts.billingReportFinalized.v48015.is(event)) {
                    const decodedEvent = Events.ddcPayouts.billingReportFinalized.v48015.decode(event)

                    const data: BillingReportFinalizedData = {
                        id: randomUUID(),
                        blockNumber: block.height,
                        blockTimestamp: blockTimestamp,
                        clusterId: decodedEvent.clusterId,
                        eraId: decodedEvent.era,
                    }

                    this._state.push(data);
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
