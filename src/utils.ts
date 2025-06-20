import { TypeRegistry, VecFixed } from '@polkadot/types'
import { HexString } from '@polkadot/util/types'
import { BlockHeader, Event } from '@subsquid/substrate-processor'
import { QualifiedName } from '@subsquid/substrate-runtime'
import * as ss58 from '@subsquid/ss58'

// Default cluster IDs for different networks
const DEFAULT_CLUSTERS = {
    DEVNET: '0x7f82864e4f097e63d04cc279e4d8d2eb45a42ffa',
    TESTNET: '0x825c4b2352850de9986d9d28568db6f0c023a1e3',
    QANET: '0xb1242a78440e20f50841ffa399fd9d607a2e93b8',
    MAINNET: '0x0059f5ada35eee46802d80750d5ca4a490640511'
} as const

// Get environment-based default cluster ID with validation
const CHAIN_ENV = process.env.CHAIN_ENV || 'DEVNET'
const DEFAULT_CLUSTER_ID = DEFAULT_CLUSTERS[CHAIN_ENV as keyof typeof DEFAULT_CLUSTERS]

if (!DEFAULT_CLUSTER_ID) {
    throw new Error(`Invalid CHAIN_ENV: ${CHAIN_ENV}. Must be one of: ${Object.keys(DEFAULT_CLUSTERS).join(', ')}`)
}

/**
 * Get cluster ID from event or use environment-based default
 * @param decoded - The decoded event data
 * @returns The cluster ID from the event or the default cluster ID
 */
export function getClusterIdFromEventOrDefault(decoded: any): string {
    return decoded.clusterId ?? DEFAULT_CLUSTER_ID
}

/**
 * Get the default cluster ID for the current environment
 * @returns The default cluster ID
 */
export function getDefaultClusterId(): string {
    return DEFAULT_CLUSTER_ID
}

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
