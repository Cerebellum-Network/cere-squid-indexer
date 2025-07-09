import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v48015 from '../v48015'
import * as v48400 from '../v48400'
import * as v48800 from '../v48800'

export const activeBillingReports =  {
    v48015: new StorageType('DdcPayouts.ActiveBillingReports', 'Optional', [v48015.H160, sts.number()], v48015.BillingReport) as ActiveBillingReportsV48015,
    v48800: new StorageType('DdcPayouts.ActiveBillingReports', 'Optional', [v48800.H160, sts.number()], v48800.BillingReport) as ActiveBillingReportsV48800,
}

export interface ActiveBillingReportsV48015  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v48015.H160, key2: number): Promise<(v48015.BillingReport | undefined)>
    getMany(block: Block, keys: [v48015.H160, number][]): Promise<(v48015.BillingReport | undefined)[]>
    getKeys(block: Block): Promise<[v48015.H160, number][]>
    getKeys(block: Block, key1: v48015.H160): Promise<[v48015.H160, number][]>
    getKeys(block: Block, key1: v48015.H160, key2: number): Promise<[v48015.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48015.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48015.H160): AsyncIterable<[v48015.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48015.H160, key2: number): AsyncIterable<[v48015.H160, number][]>
    getPairs(block: Block): Promise<[k: [v48015.H160, number], v: (v48015.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v48015.H160): Promise<[k: [v48015.H160, number], v: (v48015.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v48015.H160, key2: number): Promise<[k: [v48015.H160, number], v: (v48015.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48015.H160, number], v: (v48015.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48015.H160): AsyncIterable<[k: [v48015.H160, number], v: (v48015.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48015.H160, key2: number): AsyncIterable<[k: [v48015.H160, number], v: (v48015.BillingReport | undefined)][]>
}

export interface ActiveBillingReportsV48800  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v48800.H160, key2: number): Promise<(v48800.BillingReport | undefined)>
    getMany(block: Block, keys: [v48800.H160, number][]): Promise<(v48800.BillingReport | undefined)[]>
    getKeys(block: Block): Promise<[v48800.H160, number][]>
    getKeys(block: Block, key1: v48800.H160): Promise<[v48800.H160, number][]>
    getKeys(block: Block, key1: v48800.H160, key2: number): Promise<[v48800.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48800.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48800.H160): AsyncIterable<[v48800.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48800.H160, key2: number): AsyncIterable<[v48800.H160, number][]>
    getPairs(block: Block): Promise<[k: [v48800.H160, number], v: (v48800.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v48800.H160): Promise<[k: [v48800.H160, number], v: (v48800.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v48800.H160, key2: number): Promise<[k: [v48800.H160, number], v: (v48800.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48800.H160, number], v: (v48800.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48800.H160): AsyncIterable<[k: [v48800.H160, number], v: (v48800.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48800.H160, key2: number): AsyncIterable<[k: [v48800.H160, number], v: (v48800.BillingReport | undefined)][]>
}

export const authorisedCaller =  {
    v48015: new StorageType('DdcPayouts.AuthorisedCaller', 'Optional', [], v48015.AccountId32) as AuthorisedCallerV48015,
}

export interface AuthorisedCallerV48015  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v48015.AccountId32 | undefined)>
}

export const debtorCustomers =  {
    v48015: new StorageType('DdcPayouts.DebtorCustomers', 'Optional', [v48015.H160, v48015.AccountId32], sts.bigint()) as DebtorCustomersV48015,
}

export interface DebtorCustomersV48015  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v48015.H160, key2: v48015.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v48015.H160, v48015.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v48015.H160, v48015.AccountId32][]>
    getKeys(block: Block, key1: v48015.H160): Promise<[v48015.H160, v48015.AccountId32][]>
    getKeys(block: Block, key1: v48015.H160, key2: v48015.AccountId32): Promise<[v48015.H160, v48015.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48015.H160, v48015.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48015.H160): AsyncIterable<[v48015.H160, v48015.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48015.H160, key2: v48015.AccountId32): AsyncIterable<[v48015.H160, v48015.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v48015.H160, v48015.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v48015.H160): Promise<[k: [v48015.H160, v48015.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v48015.H160, key2: v48015.AccountId32): Promise<[k: [v48015.H160, v48015.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48015.H160, v48015.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48015.H160): AsyncIterable<[k: [v48015.H160, v48015.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48015.H160, key2: v48015.AccountId32): AsyncIterable<[k: [v48015.H160, v48015.AccountId32], v: (bigint | undefined)][]>
}

export const owingProviders =  {
    v48400: new StorageType('DdcPayouts.OwingProviders', 'Optional', [v48400.H160, v48400.AccountId32], sts.bigint()) as OwingProvidersV48400,
}

export interface OwingProvidersV48400  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v48400.H160, key2: v48400.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v48400.H160, v48400.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v48400.H160, v48400.AccountId32][]>
    getKeys(block: Block, key1: v48400.H160): Promise<[v48400.H160, v48400.AccountId32][]>
    getKeys(block: Block, key1: v48400.H160, key2: v48400.AccountId32): Promise<[v48400.H160, v48400.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v48400.H160, v48400.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48400.H160): AsyncIterable<[v48400.H160, v48400.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v48400.H160, key2: v48400.AccountId32): AsyncIterable<[v48400.H160, v48400.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v48400.H160, v48400.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v48400.H160): Promise<[k: [v48400.H160, v48400.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v48400.H160, key2: v48400.AccountId32): Promise<[k: [v48400.H160, v48400.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v48400.H160, v48400.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48400.H160): AsyncIterable<[k: [v48400.H160, v48400.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v48400.H160, key2: v48400.AccountId32): AsyncIterable<[k: [v48400.H160, v48400.AccountId32], v: (bigint | undefined)][]>
}
