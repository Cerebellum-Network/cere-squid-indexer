import { Event } from '@subsquid/substrate-processor'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import { Block } from '../processor'
import { BaseProcessor } from './processor'
import { DdcCustomerBalance } from './ddcBalancesProcessor'
import { toCereAddress } from '../utils'
import { events } from '../types'
import { WeightV2 } from '@polkadot/types/interfaces'

// Smart contract addresses for different networks
const SMART_CONTRACT_ADDRESSES = {
    DEVNET: '6TZJb1s7PMa9UcHnjickVtiNG2JjYN6wNYU3CTMvji1VxTMY',
    TESTNET: '', // @TODO: Add when deployed
    QANET: '', // @TODO: Add when deployed
    MAINNET: '', // @TODO: Add when deployed
} as const

const path = require('path')
const SMART_CONTRACT_ABI = require(path.resolve(process.cwd(), 'src/abi/customer_deposit.json'))

type State = Map<string, DdcCustomerBalance>

export class SmartContractBalancesProcessor extends BaseProcessor<State> {
    private api?: ApiPromise
    private contract?: ContractPromise
    private lastProcessedBlock: number = 0
    private readonly POLL_INTERVAL_BLOCKS = 1 // Poll every block for near real-time updates
    private forcePollNextBlock = false // Force polling on next block
    private accountsToRefresh = new Set<string>() // Accounts that need immediate refresh

    constructor() {
        super(new Map<string, DdcCustomerBalance>())
    }

    private async initializeApi(): Promise<void> {
        if (this.api && this.api.isConnected) {
            return
        }

        const rpcEndpoint = process.env.RPC_CERE_WS || process.env.RPC_CERE_HTTP?.replace('http', 'ws')
        if (!rpcEndpoint) {
            throw new Error('No WebSocket RPC endpoint available for smart contract queries')
        }

        const provider = new WsProvider(rpcEndpoint)
        this.api = await ApiPromise.create({ provider })

        // Get smart contract address for current environment
        const chainEnv = process.env.CHAIN_ENV || 'DEVNET'
        const contractAddress = SMART_CONTRACT_ADDRESSES[chainEnv as keyof typeof SMART_CONTRACT_ADDRESSES]

        if (!contractAddress) {
            throw new Error(`No smart contract address configured for environment: ${chainEnv}`)
        }

        this.contract = new ContractPromise(this.api, SMART_CONTRACT_ABI, contractAddress)
    }

    /**
     * Query smart contract balance for a specific account
     */
    private async queryContractBalance(accountId: string): Promise<DdcCustomerBalance | null> {
        if (!this.contract || !this.api) {
            await this.initializeApi()
        }

        try {
            const { result, output } = await this.contract!.query['ddcBalancesFetcher::getBalance'](
                accountId, // caller
                { gasLimit: this.api!.registry.createType('WeightV2', { refTime: 10000000000n, proofSize: 10000000000n }) as WeightV2 },
                accountId // actual parameter
            )

            if (!result.isOk || !output) {
                return null
            }

            // Parse the Result<Option<Ledger>, LangError> return type
            const humanOutput = (output as any).toHuman()

            if (humanOutput.Err || !humanOutput.Ok) {
                return null
            }

            const optionLedger = humanOutput.Ok
            if (!optionLedger) {
                // Option::None - no balance found
                return null
            }

            const ledgerData = optionLedger

            return {
                accountId: toCereAddress(accountId),
                clusterId: undefined, // Smart contract balances don't have cluster ID currently
                activeBalance: BigInt(ledgerData.active?.replace(/,/g, '') || '0')
            }
        } catch (error) {
            console.warn(`Failed to query smart contract balance for ${accountId}:`, error)
            return null
        }
    }

    /**
     * Get accounts that have had deposit activity to poll their balances
     */
    private getAccountsToPolling(): string[] {
        // Get accounts that we've seen before in our state
        const knownAccounts = Array.from(this._state.keys()).map(key => {
            const parts = key.split('-')
            return parts[0] // accountId part
        })

        // For now, just return known accounts
        // In the future, this could be enhanced to:
        // 1. Track contract events for new deposits
        // 2. Get a list of active accounts from an external source
        // 3. Poll all accounts that have ever made a deposit

        return [...new Set(knownAccounts)]
    }

    /**
     * Check for events that should trigger immediate balance refresh
     */
    private checkForDepositEvents(event: Event) {

        // Check for deposit-related pallet events
        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                // Extract account ID from deposit event
                let accountId: string | undefined

                if (events.ddcCustomers.deposited.v48013.is(event)) {
                    accountId = events.ddcCustomers.deposited.v48013.decode(event)[0]
                } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                    accountId = events.ddcCustomers.deposited.v48800.decode(event).ownerId
                } else if (events.ddcCustomers.deposited.v73160.is(event)) {
                    accountId = events.ddcCustomers.deposited.v73160.decode(event).ownerId
                }

                if (accountId) {
                    console.log(`[SmartContract] Deposit detected for account ${accountId}, forcing immediate refresh`)
                    this.accountsToRefresh.add(accountId)
                    this.forcePollNextBlock = true
                }
                break
            }

            case events.ddcCustomers.withdrawn.name:
            case events.ddcCustomers.charged.name:
            case events.ddcCustomers.initiatDepositUnlock.name:
            case events.ddcCustomers.initialDepositUnlock.name: {
                // These events also affect balances, so trigger refresh
                this.forcePollNextBlock = true
                break
            }

            // TODO: Add smart contract events when available
            // case 'Contracts.ContractEmitted': {
            //     // Check if it's from our customer-deposit contract
            //     // and if it's a balance-related event
            //     this.forcePollNextBlock = true
            //     break
            // }
        }
    }

    async process(event: Event, block: Block) {
        // Check for deposit-related events that should trigger immediate balance refresh
        this.checkForDepositEvents(event)

        // Poll smart contract state either on interval or when forced
        const shouldPoll = (block.height - this.lastProcessedBlock >= this.POLL_INTERVAL_BLOCKS) ||
                          this.forcePollNextBlock

        if (!shouldPoll) {
            return
        }

        this.lastProcessedBlock = block.height
        this.forcePollNextBlock = false

        try {
            await this.initializeApi()

            const accountsToCheck = this.getAccountsToPolling()

            // Include accounts that need immediate refresh
            const priorityAccounts = Array.from(this.accountsToRefresh)

            // Combine all accounts to check (remove duplicates)
            const allAccountsToCheck = [...new Set([...accountsToCheck, ...priorityAccounts])]

            // Clear the priority accounts set after processing
            this.accountsToRefresh.clear()

            for (const accountId of allAccountsToCheck) {
                const balance = await this.queryContractBalance(accountId)
                if (balance) {
                    const key = `${balance.accountId}${balance.clusterId ? `-${balance.clusterId}` : ''}`
                    this._state.set(key, balance)
                }
            }

            const priorityAccountsCount = priorityAccounts.length
            const totalAccountsCount = allAccountsToCheck.length

            if (priorityAccountsCount > 0) {
                console.log(`[SmartContract] PRIORITY REFRESH: ${priorityAccountsCount} accounts, Total: ${totalAccountsCount} at block ${block.height}`)
            } else {
                console.log(`[SmartContract] Regular poll: ${totalAccountsCount} accounts at block ${block.height}`)
            }

        } catch (error) {
            console.error(`[SmartContract] Failed to poll smart contract state at block ${block.height}:`, error)
        }
    }

    async cleanup(): Promise<void> {
        if (this.api && this.api.isConnected) {
            await this.api.disconnect()
        }
    }
}
