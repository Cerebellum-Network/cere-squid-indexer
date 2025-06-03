import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'
import * as v64000 from '../v64000'
import * as v65000 from '../v65000'
import * as v66000 from '../v66000'
import * as v69000 from '../v69000'
import * as v71000 from '../v71000'
import * as v72000 from '../v72000'
import * as v73000 from '../v73000'
import * as v73007 from '../v73007'
import * as v73012 from '../v73012'
import * as v73034 from '../v73034'
import * as v73035 from '../v73035'
import * as v73038 from '../v73038'
import * as v73039 from '../v73039'
import * as v73047 from '../v73047'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v63002: new StorageType('System.Account', 'Default', [v63002.AccountId32], v63002.AccountInfo) as AccountV63002,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.AccountInfo
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.AccountInfo | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v63002: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV63002,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v63002: new StorageType('System.BlockWeight', 'Default', [], v63002.PerDispatchClass) as BlockWeightV63002,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.PerDispatchClass
    get(block: Block): Promise<(v63002.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v63002: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV63002,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v63002: new StorageType('System.BlockHash', 'Default', [sts.number()], v63002.H256) as BlockHashV63002,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.H256
    get(block: Block, key: number): Promise<(v63002.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v63002.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v63002.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v63002.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v63002.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v63002.H256 | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v63002: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV63002,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    v63002: new StorageType('System.Number', 'Default', [], sts.number()) as NumberV63002,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v63002: new StorageType('System.ParentHash', 'Default', [], v63002.H256) as ParentHashV63002,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.H256
    get(block: Block): Promise<(v63002.H256 | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v63002: new StorageType('System.Digest', 'Default', [], v63002.Digest) as DigestV63002,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.Digest
    get(block: Block): Promise<(v63002.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v63002: new StorageType('System.Events', 'Default', [], sts.array(() => v63002.EventRecord)) as EventsV63002,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v64000: new StorageType('System.Events', 'Default', [], sts.array(() => v64000.EventRecord)) as EventsV64000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v65000: new StorageType('System.Events', 'Default', [], sts.array(() => v65000.EventRecord)) as EventsV65000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v66000: new StorageType('System.Events', 'Default', [], sts.array(() => v66000.EventRecord)) as EventsV66000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v69000: new StorageType('System.Events', 'Default', [], sts.array(() => v69000.EventRecord)) as EventsV69000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v71000: new StorageType('System.Events', 'Default', [], sts.array(() => v71000.EventRecord)) as EventsV71000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v72000: new StorageType('System.Events', 'Default', [], sts.array(() => v72000.EventRecord)) as EventsV72000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73000: new StorageType('System.Events', 'Default', [], sts.array(() => v73000.EventRecord)) as EventsV73000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73007: new StorageType('System.Events', 'Default', [], sts.array(() => v73007.EventRecord)) as EventsV73007,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73012: new StorageType('System.Events', 'Default', [], sts.array(() => v73012.EventRecord)) as EventsV73012,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73034: new StorageType('System.Events', 'Default', [], sts.array(() => v73034.EventRecord)) as EventsV73034,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73035: new StorageType('System.Events', 'Default', [], sts.array(() => v73035.EventRecord)) as EventsV73035,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73038: new StorageType('System.Events', 'Default', [], sts.array(() => v73038.EventRecord)) as EventsV73038,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73039: new StorageType('System.Events', 'Default', [], sts.array(() => v73039.EventRecord)) as EventsV73039,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v73047: new StorageType('System.Events', 'Default', [], sts.array(() => v73047.EventRecord)) as EventsV73047,
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.EventRecord[]
    get(block: Block): Promise<(v63002.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV64000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v64000.EventRecord[]
    get(block: Block): Promise<(v64000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV65000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v65000.EventRecord[]
    get(block: Block): Promise<(v65000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV66000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v66000.EventRecord[]
    get(block: Block): Promise<(v66000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV69000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v69000.EventRecord[]
    get(block: Block): Promise<(v69000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV71000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v71000.EventRecord[]
    get(block: Block): Promise<(v71000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV72000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v72000.EventRecord[]
    get(block: Block): Promise<(v72000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73000.EventRecord[]
    get(block: Block): Promise<(v73000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73007  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73007.EventRecord[]
    get(block: Block): Promise<(v73007.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73012.EventRecord[]
    get(block: Block): Promise<(v73012.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73034  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73034.EventRecord[]
    get(block: Block): Promise<(v73034.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73035  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73035.EventRecord[]
    get(block: Block): Promise<(v73035.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73038  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73038.EventRecord[]
    get(block: Block): Promise<(v73038.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73039  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73039.EventRecord[]
    get(block: Block): Promise<(v73039.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV73047  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v73047.EventRecord[]
    get(block: Block): Promise<(v73047.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v63002: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountV63002,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v63002: new StorageType('System.EventTopics', 'Default', [v63002.H256], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as EventTopicsV63002,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: v63002.H256): Promise<([number, number][] | undefined)>
    getMany(block: Block, keys: v63002.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<v63002.H256[]>
    getKeys(block: Block, key: v63002.H256): Promise<v63002.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.H256): AsyncIterable<v63002.H256[]>
    getPairs(block: Block): Promise<[k: v63002.H256, v: ([number, number][] | undefined)][]>
    getPairs(block: Block, key: v63002.H256): Promise<[k: v63002.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.H256): AsyncIterable<[k: v63002.H256, v: ([number, number][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v63002: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v63002.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV63002,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v63002.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v63002: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV63002,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v63002: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV63002,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v63002: new StorageType('System.ExecutionPhase', 'Optional', [], v63002.Type_354) as ExecutionPhaseV63002,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v63002.Type_354 | undefined)>
}

export const authorizedUpgrade =  {
    /**
     *  `Some` if a code upgrade has been authorized.
     */
    v63002: new StorageType('System.AuthorizedUpgrade', 'Optional', [], v63002.CodeUpgradeAuthorization) as AuthorizedUpgradeV63002,
}

/**
 *  `Some` if a code upgrade has been authorized.
 */
export interface AuthorizedUpgradeV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v63002.CodeUpgradeAuthorization | undefined)>
}

export const inherentsApplied =  {
    /**
     *  Whether all inherents have been applied.
     */
    v66000: new StorageType('System.InherentsApplied', 'Default', [], sts.boolean()) as InherentsAppliedV66000,
}

/**
 *  Whether all inherents have been applied.
 */
export interface InherentsAppliedV66000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
