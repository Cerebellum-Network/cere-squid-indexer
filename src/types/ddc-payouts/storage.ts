import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'
import * as v64000 from '../v64000'
import * as v72000 from '../v72000'
import * as v73007 from '../v73007'
import * as v73012 from '../v73012'

export const activeBillingReports =  {
    v63002: new StorageType('DdcPayouts.ActiveBillingReports', 'Optional', [v63002.H160, sts.number()], v63002.BillingReport) as ActiveBillingReportsV63002,
    v64000: new StorageType('DdcPayouts.ActiveBillingReports', 'Optional', [v64000.H160, sts.number()], v64000.BillingReport) as ActiveBillingReportsV64000,
}

export interface ActiveBillingReportsV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v63002.H160, key2: number): Promise<(v63002.BillingReport | undefined)>
    getMany(block: Block, keys: [v63002.H160, number][]): Promise<(v63002.BillingReport | undefined)[]>
    getKeys(block: Block): Promise<[v63002.H160, number][]>
    getKeys(block: Block, key1: v63002.H160): Promise<[v63002.H160, number][]>
    getKeys(block: Block, key1: v63002.H160, key2: number): Promise<[v63002.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v63002.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[v63002.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160, key2: number): AsyncIterable<[v63002.H160, number][]>
    getPairs(block: Block): Promise<[k: [v63002.H160, number], v: (v63002.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v63002.H160): Promise<[k: [v63002.H160, number], v: (v63002.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v63002.H160, key2: number): Promise<[k: [v63002.H160, number], v: (v63002.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v63002.H160, number], v: (v63002.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[k: [v63002.H160, number], v: (v63002.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160, key2: number): AsyncIterable<[k: [v63002.H160, number], v: (v63002.BillingReport | undefined)][]>
}

export interface ActiveBillingReportsV64000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v64000.H160, key2: number): Promise<(v64000.BillingReport | undefined)>
    getMany(block: Block, keys: [v64000.H160, number][]): Promise<(v64000.BillingReport | undefined)[]>
    getKeys(block: Block): Promise<[v64000.H160, number][]>
    getKeys(block: Block, key1: v64000.H160): Promise<[v64000.H160, number][]>
    getKeys(block: Block, key1: v64000.H160, key2: number): Promise<[v64000.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64000.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64000.H160): AsyncIterable<[v64000.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64000.H160, key2: number): AsyncIterable<[v64000.H160, number][]>
    getPairs(block: Block): Promise<[k: [v64000.H160, number], v: (v64000.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v64000.H160): Promise<[k: [v64000.H160, number], v: (v64000.BillingReport | undefined)][]>
    getPairs(block: Block, key1: v64000.H160, key2: number): Promise<[k: [v64000.H160, number], v: (v64000.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64000.H160, number], v: (v64000.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64000.H160): AsyncIterable<[k: [v64000.H160, number], v: (v64000.BillingReport | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64000.H160, key2: number): AsyncIterable<[k: [v64000.H160, number], v: (v64000.BillingReport | undefined)][]>
}

export const debtorCustomers =  {
    v63002: new StorageType('DdcPayouts.DebtorCustomers', 'Optional', [v63002.H160, v63002.AccountId32], sts.bigint()) as DebtorCustomersV63002,
}

export interface DebtorCustomersV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v63002.H160, key2: v63002.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v63002.H160, v63002.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v63002.H160, v63002.AccountId32][]>
    getKeys(block: Block, key1: v63002.H160): Promise<[v63002.H160, v63002.AccountId32][]>
    getKeys(block: Block, key1: v63002.H160, key2: v63002.AccountId32): Promise<[v63002.H160, v63002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v63002.H160, v63002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[v63002.H160, v63002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160, key2: v63002.AccountId32): AsyncIterable<[v63002.H160, v63002.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v63002.H160): Promise<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v63002.H160, key2: v63002.AccountId32): Promise<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160, key2: v63002.AccountId32): AsyncIterable<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
}

export const owingProviders =  {
    v63002: new StorageType('DdcPayouts.OwingProviders', 'Optional', [v63002.H160, v63002.AccountId32], sts.bigint()) as OwingProvidersV63002,
}

export interface OwingProvidersV63002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v63002.H160, key2: v63002.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v63002.H160, v63002.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v63002.H160, v63002.AccountId32][]>
    getKeys(block: Block, key1: v63002.H160): Promise<[v63002.H160, v63002.AccountId32][]>
    getKeys(block: Block, key1: v63002.H160, key2: v63002.AccountId32): Promise<[v63002.H160, v63002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v63002.H160, v63002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[v63002.H160, v63002.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v63002.H160, key2: v63002.AccountId32): AsyncIterable<[v63002.H160, v63002.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v63002.H160): Promise<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v63002.H160, key2: v63002.AccountId32): Promise<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160): AsyncIterable<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v63002.H160, key2: v63002.AccountId32): AsyncIterable<[k: [v63002.H160, v63002.AccountId32], v: (bigint | undefined)][]>
}

export const billingFingerprints =  {
    v64000: new StorageType('DdcPayouts.BillingFingerprints', 'Optional', [v64000.H256], v64000.BillingFingerprint) as BillingFingerprintsV64000,
}

export interface BillingFingerprintsV64000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v64000.H256): Promise<(v64000.BillingFingerprint | undefined)>
    getMany(block: Block, keys: v64000.H256[]): Promise<(v64000.BillingFingerprint | undefined)[]>
    getKeys(block: Block): Promise<v64000.H256[]>
    getKeys(block: Block, key: v64000.H256): Promise<v64000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v64000.H256): AsyncIterable<v64000.H256[]>
    getPairs(block: Block): Promise<[k: v64000.H256, v: (v64000.BillingFingerprint | undefined)][]>
    getPairs(block: Block, key: v64000.H256): Promise<[k: v64000.H256, v: (v64000.BillingFingerprint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64000.H256, v: (v64000.BillingFingerprint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64000.H256): AsyncIterable<[k: v64000.H256, v: (v64000.BillingFingerprint | undefined)][]>
}

export const payoutReceipts =  {
    v72000: new StorageType('DdcPayouts.PayoutReceipts', 'Optional', [v72000.H160, sts.number()], v72000.PayoutReceipt) as PayoutReceiptsV72000,
    v73007: new StorageType('DdcPayouts.PayoutReceipts', 'Optional', [v73007.H160, sts.number()], v73007.PayoutReceipt) as PayoutReceiptsV73007,
}

export interface PayoutReceiptsV72000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v72000.H160, key2: number): Promise<(v72000.PayoutReceipt | undefined)>
    getMany(block: Block, keys: [v72000.H160, number][]): Promise<(v72000.PayoutReceipt | undefined)[]>
    getKeys(block: Block): Promise<[v72000.H160, number][]>
    getKeys(block: Block, key1: v72000.H160): Promise<[v72000.H160, number][]>
    getKeys(block: Block, key1: v72000.H160, key2: number): Promise<[v72000.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v72000.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v72000.H160): AsyncIterable<[v72000.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v72000.H160, key2: number): AsyncIterable<[v72000.H160, number][]>
    getPairs(block: Block): Promise<[k: [v72000.H160, number], v: (v72000.PayoutReceipt | undefined)][]>
    getPairs(block: Block, key1: v72000.H160): Promise<[k: [v72000.H160, number], v: (v72000.PayoutReceipt | undefined)][]>
    getPairs(block: Block, key1: v72000.H160, key2: number): Promise<[k: [v72000.H160, number], v: (v72000.PayoutReceipt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v72000.H160, number], v: (v72000.PayoutReceipt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v72000.H160): AsyncIterable<[k: [v72000.H160, number], v: (v72000.PayoutReceipt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v72000.H160, key2: number): AsyncIterable<[k: [v72000.H160, number], v: (v72000.PayoutReceipt | undefined)][]>
}

export interface PayoutReceiptsV73007  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v73007.H160, key2: number): Promise<(v73007.PayoutReceipt | undefined)>
    getMany(block: Block, keys: [v73007.H160, number][]): Promise<(v73007.PayoutReceipt | undefined)[]>
    getKeys(block: Block): Promise<[v73007.H160, number][]>
    getKeys(block: Block, key1: v73007.H160): Promise<[v73007.H160, number][]>
    getKeys(block: Block, key1: v73007.H160, key2: number): Promise<[v73007.H160, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v73007.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v73007.H160): AsyncIterable<[v73007.H160, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v73007.H160, key2: number): AsyncIterable<[v73007.H160, number][]>
    getPairs(block: Block): Promise<[k: [v73007.H160, number], v: (v73007.PayoutReceipt | undefined)][]>
    getPairs(block: Block, key1: v73007.H160): Promise<[k: [v73007.H160, number], v: (v73007.PayoutReceipt | undefined)][]>
    getPairs(block: Block, key1: v73007.H160, key2: number): Promise<[k: [v73007.H160, number], v: (v73007.PayoutReceipt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v73007.H160, number], v: (v73007.PayoutReceipt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v73007.H160): AsyncIterable<[k: [v73007.H160, number], v: (v73007.PayoutReceipt | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v73007.H160, key2: number): AsyncIterable<[k: [v73007.H160, number], v: (v73007.PayoutReceipt | undefined)][]>
}

export const payoutFingerprints =  {
    v72000: new StorageType('DdcPayouts.PayoutFingerprints', 'Optional', [v72000.H256], v72000.PayoutFingerprint) as PayoutFingerprintsV72000,
    v73012: new StorageType('DdcPayouts.PayoutFingerprints', 'Optional', [v73012.H256], v73012.PayoutFingerprint) as PayoutFingerprintsV73012,
}

export interface PayoutFingerprintsV72000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v72000.H256): Promise<(v72000.PayoutFingerprint | undefined)>
    getMany(block: Block, keys: v72000.H256[]): Promise<(v72000.PayoutFingerprint | undefined)[]>
    getKeys(block: Block): Promise<v72000.H256[]>
    getKeys(block: Block, key: v72000.H256): Promise<v72000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v72000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v72000.H256): AsyncIterable<v72000.H256[]>
    getPairs(block: Block): Promise<[k: v72000.H256, v: (v72000.PayoutFingerprint | undefined)][]>
    getPairs(block: Block, key: v72000.H256): Promise<[k: v72000.H256, v: (v72000.PayoutFingerprint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v72000.H256, v: (v72000.PayoutFingerprint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v72000.H256): AsyncIterable<[k: v72000.H256, v: (v72000.PayoutFingerprint | undefined)][]>
}

export interface PayoutFingerprintsV73012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v73012.H256): Promise<(v73012.PayoutFingerprint | undefined)>
    getMany(block: Block, keys: v73012.H256[]): Promise<(v73012.PayoutFingerprint | undefined)[]>
    getKeys(block: Block): Promise<v73012.H256[]>
    getKeys(block: Block, key: v73012.H256): Promise<v73012.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v73012.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v73012.H256): AsyncIterable<v73012.H256[]>
    getPairs(block: Block): Promise<[k: v73012.H256, v: (v73012.PayoutFingerprint | undefined)][]>
    getPairs(block: Block, key: v73012.H256): Promise<[k: v73012.H256, v: (v73012.PayoutFingerprint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v73012.H256, v: (v73012.PayoutFingerprint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v73012.H256): AsyncIterable<[k: v73012.H256, v: (v73012.PayoutFingerprint | undefined)][]>
}
