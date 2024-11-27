import { Event } from '@subsquid/substrate-processor'
import { assertNotNull } from '@subsquid/util-internal'
import { randomUUID } from 'crypto'
import { Block } from '../processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'
import { BaseProcessor } from './processor'

export interface ValidatorRewardedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    validatorId: string
    amount: bigint
}

type State = ValidatorRewardedData[]

export class DdcValidatorRewardedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as State)
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcPayouts.validatorRewarded.name: {
                if (Events.ddcPayouts.validatorRewarded.v54001.is(event)) {
                    const decodedEvent = Events.ddcPayouts.validatorRewarded.v54001.decode(event)

                    const data: ValidatorRewardedData = {
                        id: randomUUID(),
                        blockNumber: block.height,
                        blockTimestamp: blockTimestamp,
                        clusterId: decodedEvent.clusterId,
                        eraId: decodedEvent.era,
                        validatorId: decodedEvent.validatorId,
                        amount: decodedEvent.amount,
                    }

                    this._state.push(data)
                } else {
                    logUnsupportedEventVersion(event)
                    break
                }

                break
            }
            default: {
                break
            }
        }
    }
}
