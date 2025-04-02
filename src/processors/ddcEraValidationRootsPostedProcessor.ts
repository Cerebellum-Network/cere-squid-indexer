import { assertNotNull } from '@subsquid/util-internal'
import { Event } from '@subsquid/substrate-processor'
import { randomUUID } from 'crypto'
import { BaseProcessor } from './processor'
import { Block } from '../processor'
import { events as Events } from '../types'
import { logUnsupportedEventVersion, toCereAddress } from '../utils'

export interface EraValidationRootsPostedData {
    id: string
    blockNumber: number
    blockTimestamp: Date

    clusterId: string
    eraId: number
    validatorId: string

    payersMerkleRootHash: string
    payeesMerkleRootHash: string
    payersBatchMerkleRootHashes: string[]
    payeesBatchMerkleRootHashes: string[]
}

type State = EraValidationRootsPostedData[]

export class DdcEraValidationRootsPostedProcessor extends BaseProcessor<State> {
    constructor() {
        super([] as State)
    }

    async process(event: Event, block: Block) {
        const blockTimestamp = new Date(assertNotNull(block.timestamp, `Block ${block.height} timestamp is not set`))

        switch (event.name) {
            case Events.ddcVerification.eraValidationRootsPosted.name: {
                if (Events.ddcVerification.eraValidationRootsPosted.v54112.is(event)) {
                    const decodedEvent = Events.ddcVerification.eraValidationRootsPosted.v54112.decode(event)

                    if (decodedEvent) {
                        const payersMerkleRootHash = Buffer.from(decodedEvent.payersMerkleRootHash).toString('hex')
                        const payeesMerkleRootHash = Buffer.from(decodedEvent.payeesMerkleRootHash).toString('hex')
                        const payersBatchMerkleRootHashes = decodedEvent.payersBatchMerkleRootHashes.map((h) =>
                            Buffer.from(h).toString('hex'),
                        )
                        const payeesBatchMerkleRootHashes = decodedEvent.payeesBatchMerkleRootHashes.map((h) =>
                            Buffer.from(h).toString('hex'),
                        )

                        const data: EraValidationRootsPostedData = {
                            id: randomUUID(),
                            blockNumber: block.height,
                            blockTimestamp,
                            clusterId: decodedEvent.clusterId,
                            eraId: decodedEvent.eraId,
                            validatorId: decodedEvent.validator,
                            payersMerkleRootHash,
                            payeesMerkleRootHash,
                            payersBatchMerkleRootHashes,
                            payeesBatchMerkleRootHashes,
                        }

                        this._state.push(data)
                    }
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
