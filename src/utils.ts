import { BlockHeader, Event } from '@subsquid/substrate-processor'
import * as ss58 from '@subsquid/ss58'

export const throwUnsupportedSpec = (event: Event, block: BlockHeader) => {
    throw Error(`Unsupported spec version for event ${event.name} at block ${block.height} (${block.hash})`)
}

export const throwUnsupportedStorageSpec = (block: BlockHeader) => {
    throw Error(`Unsupported storage spec version at block ${block.height} (${block.hash})`)
}

export const logStorageError = (entity: string, key: any, block: BlockHeader) => {
    // TODO throw Error(`Unable to find ${entity} by key ${key} at block ${block.height} (${block.hash})`)
    console.log(`Unable to find ${entity} by key ${key} at block ${block.height} (${block.hash})`)
}

export const toCereAddress = (accoutnId: string) => {
    return ss58.codec('cere').encode(accoutnId)
}
