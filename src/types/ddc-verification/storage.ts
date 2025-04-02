import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v54100 from '../v54100'

export const eraValidations =  {
    /**
     *  Era validations
     */
    v54100: new StorageType('DdcVerification.EraValidations', 'Optional', [v54100.H160, sts.number()], v54100.EraValidation) as EraValidationsV54100,
}

/**
 *  Era validations
 */
export interface EraValidationsV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v54100.H160, key2: number): Promise<(v54100.EraValidation | undefined)>
    getMany(block: Block, keys: [v54100.H160, number][]): Promise<(v54100.EraValidation | undefined)[]>
    getKeys(block: Block): Promise<[v54100.H160, number][]>
    getKeys(block: Block, key1: v54100.H160): Promise<[v54100.H160, number][]>
    getKeys(block: Block, key1: v54100.H160, key2: number): Promise<[v54100.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v54100.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54100.H160): AsyncIterable<[v54100.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54100.H160, key2: number): AsyncIterable<[v54100.H160, number][]>
    getPairs(block: Block): Promise<[k: [v54100.H160, number], v: (v54100.EraValidation | undefined)][]>
    getPairs(block: Block, key1: v54100.H160): Promise<[k: [v54100.H160, number], v: (v54100.EraValidation | undefined)][]>
    getPairs(block: Block, key1: v54100.H160, key2: number): Promise<[k: [v54100.H160, number], v: (v54100.EraValidation | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v54100.H160, number], v: (v54100.EraValidation | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54100.H160): AsyncIterable<[k: [v54100.H160, number], v: (v54100.EraValidation | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54100.H160, key2: number): AsyncIterable<[k: [v54100.H160, number], v: (v54100.EraValidation | undefined)][]>
}

export const clusterToValidate =  {
    /**
     *  Cluster id storage
     */
    v54100: new StorageType('DdcVerification.ClusterToValidate', 'Optional', [], v54100.H160) as ClusterToValidateV54100,
}

/**
 *  Cluster id storage
 */
export interface ClusterToValidateV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v54100.H160 | undefined)>
}

export const validatorSet =  {
    /**
     *  List of validators.
     */
    v54100: new StorageType('DdcVerification.ValidatorSet', 'Default', [], sts.array(() => v54100.AccountId32)) as ValidatorSetV54100,
}

/**
 *  List of validators.
 */
export interface ValidatorSetV54100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54100.AccountId32[]
    get(block: Block): Promise<(v54100.AccountId32[] | undefined)>
}

export const validatorToStashKey =  {
    /**
     *  Validator stash key mapping
     */
    v54100: new StorageType('DdcVerification.ValidatorToStashKey', 'Optional', [v54100.AccountId32], v54100.AccountId32) as ValidatorToStashKeyV54100,
}

/**
 *  Validator stash key mapping
 */
export interface ValidatorToStashKeyV54100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54100.AccountId32): Promise<(v54100.AccountId32 | undefined)>
    getMany(block: Block, keys: v54100.AccountId32[]): Promise<(v54100.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v54100.AccountId32[]>
    getKeys(block: Block, key: v54100.AccountId32): Promise<v54100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v54100.AccountId32): AsyncIterable<v54100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v54100.AccountId32, v: (v54100.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v54100.AccountId32): Promise<[k: v54100.AccountId32, v: (v54100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54100.AccountId32, v: (v54100.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54100.AccountId32): AsyncIterable<[k: v54100.AccountId32, v: (v54100.AccountId32 | undefined)][]>
}
