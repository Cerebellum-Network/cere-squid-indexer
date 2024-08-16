import { TypeRegistry, VecFixed } from '@polkadot/types'
import { HexString } from '@polkadot/util/types'
import { BlockHeader, Event } from '@subsquid/substrate-processor'
import * as ss58 from '@subsquid/ss58'

export const logUnsupportedEventVersion = (event: Event) => {
    console.log(`Unsupported spec version for event ${event.name} at block ${event.block.height} (${event.block.hash})`)
}

export const logUnsupportedStorageVersion = (block: BlockHeader) => {
    console.log(`Unsupported storage spec version at block ${block.height} (${block.hash})`)
}

export const logStorageError = (entity: string, key: any, block: BlockHeader) => {
    // TODO throw Error(`Unable to find ${entity} by key ${key} at block ${block.height} (${block.hash})`)
    console.log(`Unable to find ${entity} by key ${key} at block ${block.height} (${block.hash})`)
}

export const toCereAddress = (accoutnId: string) => {
    return ss58.codec('cere').encode(accoutnId)
}

const registry = new TypeRegistry()

export const decodeAsciiStringFromScaleVecFixed = (vecMaxLen: number, data: HexString) => {
    // TODO(khssnv): runtime BoundedVec capacity is not available neither from typegen constants nor in the data itself
    // (as it is available in the beginning of a regular Vec). A runtime upgrade can change the capacity, but right now
    // we don't know how to deal with it.
    const decodedVecFixed = new VecFixed(registry, 'u8', vecMaxLen, data)
    const endOfAsciiValue = decodedVecFixed.toU8a().indexOf(0)
    return String.fromCharCode(...decodedVecFixed.toU8a().slice(0, endOfAsciiValue))
}
