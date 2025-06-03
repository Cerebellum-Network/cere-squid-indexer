import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v63002: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV63002,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v63002: new StorageType('Balances.Account', 'Default', [v63002.AccountId32], v63002.AccountData) as AccountV63002,
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV63002  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v63002.AccountData
    get(block: Block, key: v63002.AccountId32): Promise<(v63002.AccountData | undefined)>
    getMany(block: Block, keys: v63002.AccountId32[]): Promise<(v63002.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v63002.AccountId32[]>
    getKeys(block: Block, key: v63002.AccountId32): Promise<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63002.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<v63002.AccountId32[]>
    getPairs(block: Block): Promise<[k: v63002.AccountId32, v: (v63002.AccountData | undefined)][]>
    getPairs(block: Block, key: v63002.AccountId32): Promise<[k: v63002.AccountId32, v: (v63002.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63002.AccountId32): AsyncIterable<[k: v63002.AccountId32, v: (v63002.AccountData | undefined)][]>
}
