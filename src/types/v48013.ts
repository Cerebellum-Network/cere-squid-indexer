import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx, StorageType} from './support'
import * as v63002 from './v63002'

// Re-export types from v63002 that haven't changed between versions
export const AccountId32 = v63002.AccountId32
export const NodePubKey = v63002.NodePubKey
export const H160 = v63002.H160

// Re-export type definitions for use in interfaces
export type AccountId32 = v63002.AccountId32
export type NodePubKey = v63002.NodePubKey
export type H160 = v63002.H160

export const events = {
    ddcCustomers: {
        deposited: {
            name: 'DdcCustomers.Deposited',
            v48013: new EventType(
                'DdcCustomers.Deposited',
                sts.struct({
                    ownerId: AccountId32,
                    amount: sts.bigint(),
                })
            ),
        },
        charged: {
            name: 'DdcCustomers.Charged',
            v48013: new EventType(
                'DdcCustomers.Charged',
                sts.struct({
                    ownerId: AccountId32,
                    charged: sts.bigint(),
                    expectedToCharge: sts.bigint(),
                })
            ),
        },
        withdrawn: {
            name: 'DdcCustomers.Withdrawn', 
            v48013: new EventType(
                'DdcCustomers.Withdrawn',
                sts.struct({
                    ownerId: AccountId32,
                    amount: sts.bigint(),
                })
            ),
        },
        initialDepositUnlock: {
            name: 'DdcCustomers.InitialDepositUnlock',
            v48013: new EventType(
                'DdcCustomers.InitialDepositUnlock',
                sts.struct({
                    ownerId: AccountId32,
                    amount: sts.bigint(),
                })
            ),
        },
        bucketCreated: {
            name: 'DdcCustomers.BucketCreated',
            v48013: new EventType(
                'DdcCustomers.BucketCreated',
                sts.struct({
                    bucketId: sts.bigint(),
                })
            ),
        },
        bucketRemoved: {
            name: 'DdcCustomers.BucketRemoved',
            v48013: new EventType(
                'DdcCustomers.BucketRemoved',
                sts.struct({
                    bucketId: sts.bigint(),
                })
            ),
        },
    },
    ddcClusters: {
        clusterCreated: {
            name: 'DdcClusters.ClusterCreated',
            v48013: new EventType(
                'DdcClusters.ClusterCreated',
                sts.struct({
                    clusterId: sts.string(),
                })
            ),
        },
    },
    ddcNodes: {
        nodeCreated: {
            name: 'DdcNodes.NodeCreated',
            v48013: new EventType(
                'DdcNodes.NodeCreated',
                sts.struct({
                    nodePubKey: NodePubKey,
                })
            ),
        },
        nodeDeleted: {
            name: 'DdcNodes.NodeDeleted',
            v48013: new EventType(
                'DdcNodes.NodeDeleted',
                sts.struct({
                    nodePubKey: NodePubKey,
                })
            ),
        },
    },
    balances: {
        transfer: {
            name: 'Balances.Transfer',
            v48013: new EventType(
                'Balances.Transfer',
                sts.struct({
                    from: AccountId32,
                    to: AccountId32,
                    amount: sts.bigint(),
                })
            ),
        },
        deposit: {
            name: 'Balances.Deposit',
            v48013: new EventType(
                'Balances.Deposit',
                sts.struct({
                    who: AccountId32,
                    amount: sts.bigint(),
                })
            ),
        },
    },
}

export const storage = {
    ddcCustomers: {
        ledger: {
            v48013: new StorageType('DdcCustomers.Ledger', 'Optional', [AccountId32], v63002.AccountsLedger) as LedgerV48013,
        },
        buckets: {
            v48013: new StorageType('DdcCustomers.Buckets', 'Optional', [sts.bigint()], v63002.Bucket) as BucketsV48013,
        },
    },
    system: {
        account: {
            v48013: new StorageType('System.Account', 'Default', [AccountId32], v63002.AccountInfo) as AccountV48013,
        },
    },
}

export interface LedgerV48013 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: AccountId32): Promise<(v63002.AccountsLedger | undefined)>
    getMany(block: Block, keys: AccountId32[]): Promise<(v63002.AccountsLedger | undefined)[]>
    getKeys(block: Block): Promise<AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<AccountId32[]>
    getPairs(block: Block): Promise<[k: AccountId32, v: (v63002.AccountsLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: AccountId32, v: (v63002.AccountsLedger | undefined)][]>
}

export interface BucketsV48013 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v63002.Bucket | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v63002.Bucket | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v63002.Bucket | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v63002.Bucket | undefined)][]>
}

export interface AccountV48013 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.AccountInfo
    get(block: Block, key: AccountId32): Promise<(v63002.AccountInfo | undefined)>
    getMany(block: Block, keys: AccountId32[]): Promise<(v63002.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<AccountId32[]>
    getPairs(block: Block): Promise<[k: AccountId32, v: (v63002.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: AccountId32, v: (v63002.AccountInfo | undefined)][]>
} 