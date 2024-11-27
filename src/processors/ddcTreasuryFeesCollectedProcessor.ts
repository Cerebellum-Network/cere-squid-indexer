import { Event } from '@subsquid/substrate-processor'
import { assertNotNull } from '@subsquid/util-internal'
import { randomUUID } from 'crypto'
import { Block } from '../processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'
import { BaseProcessor } from './processor'

export interface TreasuryFeesCollectedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    amount: bigint
}

type State = TreasuryFeesCollectedData[]

export class DdcTreasuryFeesCollectedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as State)
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.treasuryFeesCollected.name: {
                if (Events.ddcPayouts.treasuryFeesCollected.v48015.is(event)) {
                    const decodedEvent = Events.ddcPayouts.treasuryFeesCollected.v48015.decode(event)
                    
                    const data: TreasuryFeesCollectedData = {
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
