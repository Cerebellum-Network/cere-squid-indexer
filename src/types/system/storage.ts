import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v282 from '../v282'
import * as v283 from '../v283'
import * as v285 from '../v285'
import * as v287 from '../v287'
import * as v293 from '../v293'
import * as v295 from '../v295'
import * as v296 from '../v296'
import * as v297 from '../v297'
import * as v299 from '../v299'
import * as v300 from '../v300'
import * as v301 from '../v301'
import * as v302 from '../v302'
import * as v30400 from '../v30400'
import * as v30500 from '../v30500'
import * as v30800 from '../v30800'
import * as v43000 from '../v43000'
import * as v44000 from '../v44000'
import * as v46000 from '../v46000'
import * as v47000 from '../v47000'
import * as v48001 from '../v48001'
import * as v48003 from '../v48003'
import * as v48004 from '../v48004'
import * as v48005 from '../v48005'
import * as v48008 from '../v48008'
import * as v48013 from '../v48013'
import * as v48014 from '../v48014'
import * as v48015 from '../v48015'
import * as v48016 from '../v48016'
import * as v48017 from '../v48017'
import * as v48200 from '../v48200'
import * as v48400 from '../v48400'
import * as v48500 from '../v48500'
import * as v48600 from '../v48600'
import * as v48700 from '../v48700'
import * as v48800 from '../v48800'
import * as v48900 from '../v48900'
import * as v48901 from '../v48901'
import * as v50000 from '../v50000'
import * as v51301 from '../v51301'
import * as v53001 from '../v53001'
import * as v54001 from '../v54001'
import * as v54002 from '../v54002'
import * as v54004 from '../v54004'
import * as v54100 from '../v54100'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v266: new StorageType('System.Account', 'Default', [v266.AccountId], v266.AccountInfo) as AccountV266,
    /**
     *  The full account information for a particular account ID.
     */
    v295: new StorageType('System.Account', 'Default', [v295.AccountId32], v295.AccountInfo) as AccountV295,
    /**
     *  The full account information for a particular account ID.
     */
    v48900: new StorageType('System.Account', 'Default', [v48900.AccountId32], v48900.AccountInfo) as AccountV48900,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.AccountInfo
    get(block: Block, key: v266.AccountId): Promise<(v266.AccountInfo | undefined)>
    getMany(block: Block, keys: v266.AccountId[]): Promise<(v266.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v266.AccountId[]>
    getKeys(block: Block, key: v266.AccountId): Promise<v266.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.AccountId): AsyncIterable<v266.AccountId[]>
    getPairs(block: Block): Promise<[k: v266.AccountId, v: (v266.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v266.AccountId): Promise<[k: v266.AccountId, v: (v266.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.AccountId, v: (v266.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.AccountId): AsyncIterable<[k: v266.AccountId, v: (v266.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV295  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v295.AccountInfo
    get(block: Block, key: v295.AccountId32): Promise<(v295.AccountInfo | undefined)>
    getMany(block: Block, keys: v295.AccountId32[]): Promise<(v295.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v295.AccountId32[]>
    getKeys(block: Block, key: v295.AccountId32): Promise<v295.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v295.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v295.AccountId32): AsyncIterable<v295.AccountId32[]>
    getPairs(block: Block): Promise<[k: v295.AccountId32, v: (v295.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v295.AccountId32): Promise<[k: v295.AccountId32, v: (v295.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v295.AccountId32, v: (v295.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v295.AccountId32): AsyncIterable<[k: v295.AccountId32, v: (v295.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV48900  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48900.AccountInfo
    get(block: Block, key: v48900.AccountId32): Promise<(v48900.AccountInfo | undefined)>
    getMany(block: Block, keys: v48900.AccountId32[]): Promise<(v48900.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v48900.AccountId32[]>
    getKeys(block: Block, key: v48900.AccountId32): Promise<v48900.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48900.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48900.AccountId32): AsyncIterable<v48900.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48900.AccountId32, v: (v48900.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v48900.AccountId32): Promise<[k: v48900.AccountId32, v: (v48900.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48900.AccountId32, v: (v48900.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48900.AccountId32): AsyncIterable<[k: v48900.AccountId32, v: (v48900.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v266: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV266,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v266: new StorageType('System.BlockWeight', 'Default', [], v266.ExtrinsicsWeight) as BlockWeightV266,
    /**
     *  The current weight for the block.
     */
    v282: new StorageType('System.BlockWeight', 'Default', [], v282.ConsumedWeight) as BlockWeightV282,
    /**
     *  The current weight for the block.
     */
    v47000: new StorageType('System.BlockWeight', 'Default', [], v47000.PerDispatchClass) as BlockWeightV47000,
    /**
     *  The current weight for the block.
     */
    v48016: new StorageType('System.BlockWeight', 'Default', [], v48016.PerDispatchClass) as BlockWeightV48016,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.ExtrinsicsWeight
    get(block: Block): Promise<(v266.ExtrinsicsWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV282  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v282.ConsumedWeight
    get(block: Block): Promise<(v282.ConsumedWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV47000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v47000.PerDispatchClass
    get(block: Block): Promise<(v47000.PerDispatchClass | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV48016  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48016.PerDispatchClass
    get(block: Block): Promise<(v48016.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v266: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV266,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v266: new StorageType('System.BlockHash', 'Default', [v266.BlockNumber], v266.Hash) as BlockHashV266,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.Hash
    get(block: Block, key: v266.BlockNumber): Promise<(v266.Hash | undefined)>
    getMany(block: Block, keys: v266.BlockNumber[]): Promise<(v266.Hash | undefined)[]>
    getKeys(block: Block): Promise<v266.BlockNumber[]>
    getKeys(block: Block, key: v266.BlockNumber): Promise<v266.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.BlockNumber): AsyncIterable<v266.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v266.BlockNumber, v: (v266.Hash | undefined)][]>
    getPairs(block: Block, key: v266.BlockNumber): Promise<[k: v266.BlockNumber, v: (v266.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.BlockNumber, v: (v266.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.BlockNumber): AsyncIterable<[k: v266.BlockNumber, v: (v266.Hash | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v266: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV266,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV266  {
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
    v266: new StorageType('System.Number', 'Default', [], v266.BlockNumber) as NumberV266,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.BlockNumber
    get(block: Block): Promise<(v266.BlockNumber | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v266: new StorageType('System.ParentHash', 'Default', [], v266.Hash) as ParentHashV266,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.Hash
    get(block: Block): Promise<(v266.Hash | undefined)>
}

export const extrinsicsRoot =  {
    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    v266: new StorageType('System.ExtrinsicsRoot', 'Default', [], v266.Hash) as ExtrinsicsRootV266,
}

/**
 *  Extrinsics root of the current block, also part of the block header.
 */
export interface ExtrinsicsRootV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.Hash
    get(block: Block): Promise<(v266.Hash | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v266: new StorageType('System.Digest', 'Default', [], v266.DigestOf) as DigestV266,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v295: new StorageType('System.Digest', 'Default', [], v295.Digest) as DigestV295,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v297: new StorageType('System.Digest', 'Default', [], v297.Digest) as DigestV297,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.DigestOf
    get(block: Block): Promise<(v266.DigestOf | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV295  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v295.Digest
    get(block: Block): Promise<(v295.Digest | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV297  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v297.Digest
    get(block: Block): Promise<(v297.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     */
    v266: new StorageType('System.Events', 'Default', [], sts.array(() => v266.EventRecord)) as EventsV266,
    /**
     *  Events deposited for the current block.
     */
    v282: new StorageType('System.Events', 'Default', [], sts.array(() => v282.EventRecord)) as EventsV282,
    /**
     *  Events deposited for the current block.
     */
    v283: new StorageType('System.Events', 'Default', [], sts.array(() => v283.EventRecord)) as EventsV283,
    /**
     *  Events deposited for the current block.
     */
    v285: new StorageType('System.Events', 'Default', [], sts.array(() => v285.EventRecord)) as EventsV285,
    /**
     *  Events deposited for the current block.
     */
    v287: new StorageType('System.Events', 'Default', [], sts.array(() => v287.EventRecord)) as EventsV287,
    /**
     *  Events deposited for the current block.
     */
    v293: new StorageType('System.Events', 'Default', [], sts.array(() => v293.EventRecord)) as EventsV293,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v295: new StorageType('System.Events', 'Default', [], sts.array(() => v295.EventRecord)) as EventsV295,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v296: new StorageType('System.Events', 'Default', [], sts.array(() => v296.EventRecord)) as EventsV296,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v297: new StorageType('System.Events', 'Default', [], sts.array(() => v297.EventRecord)) as EventsV297,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v299: new StorageType('System.Events', 'Default', [], sts.array(() => v299.EventRecord)) as EventsV299,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v300: new StorageType('System.Events', 'Default', [], sts.array(() => v300.EventRecord)) as EventsV300,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v301: new StorageType('System.Events', 'Default', [], sts.array(() => v301.EventRecord)) as EventsV301,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    v302: new StorageType('System.Events', 'Default', [], sts.array(() => v302.EventRecord)) as EventsV302,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v30400: new StorageType('System.Events', 'Default', [], sts.array(() => v30400.EventRecord)) as EventsV30400,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v30500: new StorageType('System.Events', 'Default', [], sts.array(() => v30500.EventRecord)) as EventsV30500,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v30800: new StorageType('System.Events', 'Default', [], sts.array(() => v30800.EventRecord)) as EventsV30800,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v43000: new StorageType('System.Events', 'Default', [], sts.array(() => v43000.EventRecord)) as EventsV43000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v44000: new StorageType('System.Events', 'Default', [], sts.array(() => v44000.EventRecord)) as EventsV44000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v46000: new StorageType('System.Events', 'Default', [], sts.array(() => v46000.EventRecord)) as EventsV46000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v47000: new StorageType('System.Events', 'Default', [], sts.array(() => v47000.EventRecord)) as EventsV47000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48001: new StorageType('System.Events', 'Default', [], sts.array(() => v48001.EventRecord)) as EventsV48001,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48003: new StorageType('System.Events', 'Default', [], sts.array(() => v48003.EventRecord)) as EventsV48003,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48004: new StorageType('System.Events', 'Default', [], sts.array(() => v48004.EventRecord)) as EventsV48004,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48005: new StorageType('System.Events', 'Default', [], sts.array(() => v48005.EventRecord)) as EventsV48005,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48008: new StorageType('System.Events', 'Default', [], sts.array(() => v48008.EventRecord)) as EventsV48008,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48013: new StorageType('System.Events', 'Default', [], sts.array(() => v48013.EventRecord)) as EventsV48013,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48014: new StorageType('System.Events', 'Default', [], sts.array(() => v48014.EventRecord)) as EventsV48014,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48200: new StorageType('System.Events', 'Default', [], sts.array(() => v48200.EventRecord)) as EventsV48200,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48015: new StorageType('System.Events', 'Default', [], sts.array(() => v48015.EventRecord)) as EventsV48015,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48016: new StorageType('System.Events', 'Default', [], sts.array(() => v48016.EventRecord)) as EventsV48016,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48017: new StorageType('System.Events', 'Default', [], sts.array(() => v48017.EventRecord)) as EventsV48017,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48400: new StorageType('System.Events', 'Default', [], sts.array(() => v48400.EventRecord)) as EventsV48400,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48500: new StorageType('System.Events', 'Default', [], sts.array(() => v48500.EventRecord)) as EventsV48500,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48600: new StorageType('System.Events', 'Default', [], sts.array(() => v48600.EventRecord)) as EventsV48600,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48700: new StorageType('System.Events', 'Default', [], sts.array(() => v48700.EventRecord)) as EventsV48700,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48800: new StorageType('System.Events', 'Default', [], sts.array(() => v48800.EventRecord)) as EventsV48800,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48900: new StorageType('System.Events', 'Default', [], sts.array(() => v48900.EventRecord)) as EventsV48900,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v48901: new StorageType('System.Events', 'Default', [], sts.array(() => v48901.EventRecord)) as EventsV48901,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v50000: new StorageType('System.Events', 'Default', [], sts.array(() => v50000.EventRecord)) as EventsV50000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v51301: new StorageType('System.Events', 'Default', [], sts.array(() => v51301.EventRecord)) as EventsV51301,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v53001: new StorageType('System.Events', 'Default', [], sts.array(() => v53001.EventRecord)) as EventsV53001,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v54001: new StorageType('System.Events', 'Default', [], sts.array(() => v54001.EventRecord)) as EventsV54001,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v54002: new StorageType('System.Events', 'Default', [], sts.array(() => v54002.EventRecord)) as EventsV54002,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v54004: new StorageType('System.Events', 'Default', [], sts.array(() => v54004.EventRecord)) as EventsV54004,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v54100: new StorageType('System.Events', 'Default', [], sts.array(() => v54100.EventRecord)) as EventsV54100,
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.EventRecord[]
    get(block: Block): Promise<(v266.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV282  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v282.EventRecord[]
    get(block: Block): Promise<(v282.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV283  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v283.EventRecord[]
    get(block: Block): Promise<(v283.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV285  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v285.EventRecord[]
    get(block: Block): Promise<(v285.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV287  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v287.EventRecord[]
    get(block: Block): Promise<(v287.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV293  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v293.EventRecord[]
    get(block: Block): Promise<(v293.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV295  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v295.EventRecord[]
    get(block: Block): Promise<(v295.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV296  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v296.EventRecord[]
    get(block: Block): Promise<(v296.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV297  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v297.EventRecord[]
    get(block: Block): Promise<(v297.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV299  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v299.EventRecord[]
    get(block: Block): Promise<(v299.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV300  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v300.EventRecord[]
    get(block: Block): Promise<(v300.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV301  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v301.EventRecord[]
    get(block: Block): Promise<(v301.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface EventsV302  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v302.EventRecord[]
    get(block: Block): Promise<(v302.EventRecord[] | undefined)>
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
export interface EventsV30400  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v30400.EventRecord[]
    get(block: Block): Promise<(v30400.EventRecord[] | undefined)>
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
export interface EventsV30500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v30500.EventRecord[]
    get(block: Block): Promise<(v30500.EventRecord[] | undefined)>
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
export interface EventsV30800  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v30800.EventRecord[]
    get(block: Block): Promise<(v30800.EventRecord[] | undefined)>
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
export interface EventsV43000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v43000.EventRecord[]
    get(block: Block): Promise<(v43000.EventRecord[] | undefined)>
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
export interface EventsV44000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v44000.EventRecord[]
    get(block: Block): Promise<(v44000.EventRecord[] | undefined)>
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
export interface EventsV46000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v46000.EventRecord[]
    get(block: Block): Promise<(v46000.EventRecord[] | undefined)>
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
export interface EventsV47000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v47000.EventRecord[]
    get(block: Block): Promise<(v47000.EventRecord[] | undefined)>
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
export interface EventsV48001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48001.EventRecord[]
    get(block: Block): Promise<(v48001.EventRecord[] | undefined)>
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
export interface EventsV48003  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48003.EventRecord[]
    get(block: Block): Promise<(v48003.EventRecord[] | undefined)>
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
export interface EventsV48004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48004.EventRecord[]
    get(block: Block): Promise<(v48004.EventRecord[] | undefined)>
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
export interface EventsV48005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48005.EventRecord[]
    get(block: Block): Promise<(v48005.EventRecord[] | undefined)>
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
export interface EventsV48008  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48008.EventRecord[]
    get(block: Block): Promise<(v48008.EventRecord[] | undefined)>
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
export interface EventsV48013  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48013.EventRecord[]
    get(block: Block): Promise<(v48013.EventRecord[] | undefined)>
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
export interface EventsV48014  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48014.EventRecord[]
    get(block: Block): Promise<(v48014.EventRecord[] | undefined)>
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
export interface EventsV48200  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48200.EventRecord[]
    get(block: Block): Promise<(v48200.EventRecord[] | undefined)>
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
export interface EventsV48015  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48015.EventRecord[]
    get(block: Block): Promise<(v48015.EventRecord[] | undefined)>
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
export interface EventsV48016  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48016.EventRecord[]
    get(block: Block): Promise<(v48016.EventRecord[] | undefined)>
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
export interface EventsV48017  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48017.EventRecord[]
    get(block: Block): Promise<(v48017.EventRecord[] | undefined)>
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
export interface EventsV48400  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48400.EventRecord[]
    get(block: Block): Promise<(v48400.EventRecord[] | undefined)>
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
export interface EventsV48500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48500.EventRecord[]
    get(block: Block): Promise<(v48500.EventRecord[] | undefined)>
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
export interface EventsV48600  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48600.EventRecord[]
    get(block: Block): Promise<(v48600.EventRecord[] | undefined)>
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
export interface EventsV48700  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48700.EventRecord[]
    get(block: Block): Promise<(v48700.EventRecord[] | undefined)>
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
export interface EventsV48800  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48800.EventRecord[]
    get(block: Block): Promise<(v48800.EventRecord[] | undefined)>
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
export interface EventsV48900  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48900.EventRecord[]
    get(block: Block): Promise<(v48900.EventRecord[] | undefined)>
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
export interface EventsV48901  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48901.EventRecord[]
    get(block: Block): Promise<(v48901.EventRecord[] | undefined)>
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
export interface EventsV50000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v50000.EventRecord[]
    get(block: Block): Promise<(v50000.EventRecord[] | undefined)>
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
export interface EventsV51301  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v51301.EventRecord[]
    get(block: Block): Promise<(v51301.EventRecord[] | undefined)>
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
export interface EventsV53001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v53001.EventRecord[]
    get(block: Block): Promise<(v53001.EventRecord[] | undefined)>
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
export interface EventsV54001  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54001.EventRecord[]
    get(block: Block): Promise<(v54001.EventRecord[] | undefined)>
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
export interface EventsV54002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54002.EventRecord[]
    get(block: Block): Promise<(v54002.EventRecord[] | undefined)>
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
export interface EventsV54004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54004.EventRecord[]
    get(block: Block): Promise<(v54004.EventRecord[] | undefined)>
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
export interface EventsV54100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54100.EventRecord[]
    get(block: Block): Promise<(v54100.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v266: new StorageType('System.EventCount', 'Default', [], v266.EventIndex) as EventCountV266,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.EventIndex
    get(block: Block): Promise<(v266.EventIndex | undefined)>
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
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v266: new StorageType('System.EventTopics', 'Default', [v266.Hash], sts.array(() => sts.tuple(() => [v266.BlockNumber, v266.EventIndex]))) as EventTopicsV266,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v266.BlockNumber, v266.EventIndex][]
    get(block: Block, key: v266.Hash): Promise<([v266.BlockNumber, v266.EventIndex][] | undefined)>
    getMany(block: Block, keys: v266.Hash[]): Promise<([v266.BlockNumber, v266.EventIndex][] | undefined)[]>
    getKeys(block: Block): Promise<v266.Hash[]>
    getKeys(block: Block, key: v266.Hash): Promise<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<v266.Hash[]>
    getPairs(block: Block): Promise<[k: v266.Hash, v: ([v266.BlockNumber, v266.EventIndex][] | undefined)][]>
    getPairs(block: Block, key: v266.Hash): Promise<[k: v266.Hash, v: ([v266.BlockNumber, v266.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.Hash, v: ([v266.BlockNumber, v266.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.Hash): AsyncIterable<[k: v266.Hash, v: ([v266.BlockNumber, v266.EventIndex][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v266: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v266.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV266,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v266.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v266: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV266,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v266: new StorageType('System.ExecutionPhase', 'Optional', [], v266.Phase) as ExecutionPhaseV266,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV266  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v266.Phase | undefined)>
}

export const upgradedToDualRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    v283: new StorageType('System.UpgradedToDualRefCount', 'Default', [], sts.boolean()) as UpgradedToDualRefCountV283,
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToDualRefCountV283  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v285: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV285,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV285  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
