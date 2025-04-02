import { randomUUID } from 'crypto'
import { assertNotNull } from '@subsquid/util-internal'
import { Event } from '@subsquid/substrate-processor'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'
import { events as Events } from '../types'
import { Block } from '../processor'
import { BaseProcessor } from './processor'

export interface RewardedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    batchIndex: number | null
    nodeProviderId: string
    rewarded: bigint | null
    expectedToReward: bigint | null
}

type State = RewardedData[]

export class DdcRewardedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as RewardedData[])
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.rewarded.name: {
                let decodedEvent
                let batchIndex: number | null = null
                let rewarded: bigint | null = null
                let expectedToReward: bigint | null = null

                if (Events.ddcPayouts.rewarded.v48015.is(event)) {
                    decodedEvent = Events.ddcPayouts.rewarded.v48015.decode(event)
                    rewarded = decodedEvent.amount
                } else if (Events.ddcPayouts.rewarded.v48800.is(event)) {
                    decodedEvent = Events.ddcPayouts.rewarded.v48800.decode(event)
                    rewarded = decodedEvent.rewarded
                    expectedToReward = decodedEvent.expectedToReward
                } else if (Events.ddcPayouts.rewarded.v48900.is(event)) {
                    decodedEvent = Events.ddcPayouts.rewarded.v48900.decode(event)
                    batchIndex = decodedEvent.batchIndex
                    rewarded = decodedEvent.rewarded
                    expectedToReward = decodedEvent.expectedToReward
                } else {
                    logUnsupportedEventVersion(event)
                    break
                }
                
                const data: RewardedData = {
                    id: randomUUID(),
                    blockNumber: block.height,
                    blockTimestamp: blockTimestamp,
                    clusterId: decodedEvent.clusterId,
                    eraId: decodedEvent.era,
                    batchIndex: batchIndex,
                    nodeProviderId: decodedEvent.nodeProviderId,
                    rewarded: rewarded,
                    expectedToReward: expectedToReward,
                }

                this._state.push(data)
                break
            }
            default: {
                break
            }
        }
    }
}
