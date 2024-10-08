import { TypeRegistry, VecFixed } from '@polkadot/types'
import { HexString } from '@polkadot/util/types'
import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { QualifiedName } from '@subsquid/substrate-runtime'
import * as ss58 from '@subsquid/ss58'

export const logUnsupportedEventVersion = (event: Event) => {
    console.log(
        `Unsupported version of event ${event.name} at block ${event.block.height} (${event.block.hash}), spec ${event.block.specVersion}`,
    )
}

export const logUnsupportedStorageVersion = (item: QualifiedName, block: BlockHeader) => {
    console.log(
        `Unsupported version of storage item ${item} at block ${block.height} (${block.hash}), spec ${block.specVersion}`,
    )
}

export const logEmptyStorage = (item: QualifiedName, key: string, block: BlockHeader) => {
    console.log(
        `Unexpectedly empty storage value ${item} by key ${key} at block ${block.height} (${block.hash}), spec ${block.specVersion}`,
    )
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
