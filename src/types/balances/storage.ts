import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v48900 from '../v48900'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v266: new StorageType('Balances.TotalIssuance', 'Default', [], v266.Balance) as TotalIssuanceV266,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.Balance
    get(block: Block): Promise<(v266.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    v266: new StorageType('Balances.Account', 'Default', [v266.AccountId], v266.AccountData) as AccountV266,
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
    v48900: new StorageType('Balances.Account', 'Default', [v48900.AccountId32], v48900.AccountData) as AccountV48900,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface AccountV266  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v266.AccountData
    get(block: Block, key: v266.AccountId): Promise<(v266.AccountData | undefined)>
    getMany(block: Block, keys: v266.AccountId[]): Promise<(v266.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v266.AccountId[]>
    getKeys(block: Block, key: v266.AccountId): Promise<v266.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v266.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v266.AccountId): AsyncIterable<v266.AccountId[]>
    getPairs(block: Block): Promise<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
    getPairs(block: Block, key: v266.AccountId): Promise<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v266.AccountId): AsyncIterable<[k: v266.AccountId, v: (v266.AccountData | undefined)][]>
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
export interface AccountV48900  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v48900.AccountData
    get(block: Block, key: v48900.AccountId32): Promise<(v48900.AccountData | undefined)>
    getMany(block: Block, keys: v48900.AccountId32[]): Promise<(v48900.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v48900.AccountId32[]>
    getKeys(block: Block, key: v48900.AccountId32): Promise<v48900.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48900.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v48900.AccountId32): AsyncIterable<v48900.AccountId32[]>
    getPairs(block: Block): Promise<[k: v48900.AccountId32, v: (v48900.AccountData | undefined)][]>
    getPairs(block: Block, key: v48900.AccountId32): Promise<[k: v48900.AccountId32, v: (v48900.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48900.AccountId32, v: (v48900.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48900.AccountId32): AsyncIterable<[k: v48900.AccountId32, v: (v48900.AccountData | undefined)][]>
}
