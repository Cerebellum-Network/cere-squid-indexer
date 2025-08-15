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

const SMART_CONTRACT_ABI = require('../abi/customer_deposit.json')

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
            console.log(`[SmartContract] DEBUG: queryContractBalance - Calling get_balance with selector 0xa40735c6`)

            // Try different calling patterns for ink! contracts
            let result, output

            try {
                // Pattern 1: Use the selector directly (most reliable for ink! contracts)
                const response = await this.contract!.query['0xa40735c6'](
                    accountId,
                    { gasLimit: -1 }
                )
                result = response.result
                output = response.output
                console.log(`[SmartContract] DEBUG: Pattern 1 success`)
            } catch (error1: any) {
                console.log(`[SmartContract] DEBUG: Pattern 1 failed:`, error1.message)

                try {
                    // Pattern 2: Try without gas limit
                    const response = await this.contract!.query['0xa40735c6'](accountId, {})
                    result = response.result
                    output = response.output
                    console.log(`[SmartContract] DEBUG: Pattern 2 success`)
                } catch (error2: any) {
                    console.log(`[SmartContract] DEBUG: Pattern 2 failed:`, error2.message)

                    try {
                        // Pattern 3: Try with contract.query directly using dot notation
                        const response = await (this.contract!.query as any).getBalance(accountId, {})
                        result = response.result
                        output = response.output
                        console.log(`[SmartContract] DEBUG: Pattern 3 success`)
                    } catch (error3: any) {
                        console.log(`[SmartContract] DEBUG: Pattern 3 failed:`, error3.message)
                        throw new Error(`All calling patterns failed: ${error1.message}, ${error2.message}, ${error3.message}`)
                    }
                }
            }

            console.log(`[SmartContract] DEBUG: queryContractBalance - Result:`, result)
            console.log(`[SmartContract] DEBUG: queryContractBalance - Output:`, output)

            if (!result.isOk || !output) {
                console.log(`[SmartContract] DEBUG: queryContractBalance - Result not OK or no output`)
                return null
            }

            // Parse the Result<Option<Ledger>, LangError> return type
            const humanOutput = (output as any).toHuman()
            console.log(`[SmartContract] DEBUG: queryContractBalance - Human output:`, humanOutput)

            if (humanOutput.Err || !humanOutput.Ok) {
                console.log(`[SmartContract] DEBUG: queryContractBalance - Error in output:`, humanOutput.Err)
                return null
            }

            const optionLedger = humanOutput.Ok
            if (!optionLedger) {
                // Option::None - no balance found
                console.log(`[SmartContract] DEBUG: queryContractBalance - Option::None - no balance found`)
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
     * Check for events that should trigger immediate balance refresh
     */
    private checkForDepositEvents(event: Event): void {
        // Debug: Log only contract events we're interested in
        if (event.name === 'Contracts.ContractEmitted') {
            console.log(`[SmartContract] DEBUG: Found Contracts.ContractEmitted event!`)
        }

        // Check for deposit-related pallet events
        switch (event.name) {
            case events.ddcCustomers.deposited.name: {
                // Extract account ID from deposit event
                let accountId: string | undefined

                if (events.ddcCustomers.deposited.v48013.is(event)) {
                    const decoded = events.ddcCustomers.deposited.v48013.decode(event)
                    accountId = Array.isArray(decoded) ? decoded[0] : decoded
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

            case events.ddcCustomers.withdrawn.name: {
                // Extract account ID from withdrawal event
                let accountId: string | undefined

                if (events.ddcCustomers.withdrawn.v48013.is(event)) {
                    const decoded = events.ddcCustomers.withdrawn.v48013.decode(event)
                    accountId = Array.isArray(decoded) ? decoded[0] : decoded
                } else if (events.ddcCustomers.withdrawn.v48800.is(event)) {
                    accountId = events.ddcCustomers.withdrawn.v48800.decode(event).ownerId
                } else if (events.ddcCustomers.withdrawn.v73160.is(event)) {
                    accountId = events.ddcCustomers.withdrawn.v73160.decode(event).ownerId
                }

                if (accountId) {
                    console.log(`[SmartContract] Withdrawal detected for account ${accountId}, forcing immediate refresh`)
                    this.accountsToRefresh.add(accountId)
                    this.forcePollNextBlock = true
                }
                break
            }

            case events.ddcCustomers.charged.name: {
                // Extract account ID from charge event
                let accountId: string | undefined

                if (events.ddcCustomers.charged.v48013.is(event)) {
                    const decoded = events.ddcCustomers.charged.v48013.decode(event)
                    accountId = Array.isArray(decoded) ? decoded[0] : decoded
                } else if (events.ddcCustomers.charged.v48800.is(event)) {
                    accountId = events.ddcCustomers.charged.v48800.decode(event).ownerId
                } else if (events.ddcCustomers.charged.v73160.is(event)) {
                    accountId = events.ddcCustomers.charged.v73160.decode(event).ownerId
                }

                if (accountId) {
                    console.log(`[SmartContract] Charge detected for account ${accountId}, forcing immediate refresh`)
                    this.accountsToRefresh.add(accountId)
                    this.forcePollNextBlock = true
                }
                break
            }

            case events.ddcCustomers.initiatDepositUnlock.name:
            case events.ddcCustomers.initialDepositUnlock.name: {
                // These events also affect balances, so trigger refresh
                this.forcePollNextBlock = true
                break
            }

            // Handle smart contract events
            case 'Contracts.ContractEmitted': {
                // Check if it's from our customer-deposit contract
                let contractAddress: string
                let rawData: string

                // Try to extract data from different event formats
                const eventData = (event as any).args
                console.log(`[SmartContract] DEBUG: ===== CONTRACT EVENT DEBUG =====`)
                console.log(`[SmartContract] DEBUG: Full event object:`, event)
                console.log(`[SmartContract] DEBUG: Event name:`, event.name)
                console.log(`[SmartContract] DEBUG: Event args:`, event.args)
                console.log(`[SmartContract] DEBUG: Event data:`, eventData)
                console.log(`[SmartContract] DEBUG: Is array:`, Array.isArray(eventData))
                console.log(`[SmartContract] DEBUG: Length:`, eventData?.length)
                console.log(`[SmartContract] DEBUG: Event keys:`, Object.keys(event))
                console.log(`[SmartContract] DEBUG: EventData keys:`, eventData ? Object.keys(eventData) : 'undefined')
                console.log(`[SmartContract] DEBUG: Event topics:`, (event as any).topics)
                console.log(`[SmartContract] DEBUG: ================================`)

                // Try to extract indexed parameters from topics (cluster_id, owner_id)
                let clusterId: string | undefined
                let ownerId: string | undefined

                if ((event as any).topics && Array.isArray((event as any).topics) && (event as any).topics.length >= 3) {
                    // topics[1] = cluster_id (indexed), topics[2] = owner_id (indexed)
                    clusterId = (event as any).topics[1]
                    ownerId = (event as any).topics[2]

                    console.log(`[SmartContract] DEBUG: Found indexed parameters in topics:`)
                    console.log(`[SmartContract] DEBUG: - Cluster ID (topic[1]): ${clusterId}`)
                    console.log(`[SmartContract] DEBUG: - Owner ID (topic[2]): ${ownerId}`)

                    if (ownerId) {
                        // Convert hex owner_id to SS58 if needed
                        let ownerIdSS58 = ownerId
                        try {
                            if (ownerId.startsWith('0x')) {
                                ownerIdSS58 = toCereAddress(ownerId)
                                console.log(`[SmartContract] DEBUG: - Owner ID (SS58): ${ownerIdSS58}`)
                            }
                        } catch (conversionError) {
                            console.log(`[SmartContract] DEBUG: - SS58 conversion failed:`, conversionError)
                        }

                        // Add to refresh queue
                        this.accountsToRefresh.add(ownerId)
                        if (ownerIdSS58 !== ownerId) {
                            this.accountsToRefresh.add(ownerIdSS58)
                        }

                        console.log(`[SmartContract] DEBUG: Added owner_id from topics to refresh queue`)
                        this.forcePollNextBlock = true
                    }
                } else {
                    console.log(`[SmartContract] DEBUG: No indexed parameters found in topics, falling back to raw data parsing`)
                }

                // Format 1: Array format [contractAddress, data] (DevConsole shows this)
                if (eventData && Array.isArray(eventData) && eventData.length >= 2) {
                    contractAddress = eventData[0]
                    rawData = eventData[1]
                    console.log(`[SmartContract] DEBUG: Using ARRAY format`)
                }
                // Format 2: Object format { contract: '...', data: '...' } (newer Squid)
                else if (eventData && typeof eventData === 'object' && eventData.contract && eventData.data) {
                    contractAddress = eventData.contract
                    rawData = eventData.data
                    console.log(`[SmartContract] DEBUG: Using OBJECT format`)
                }
                // Format 3: Direct properties on event
                else if (eventData && typeof eventData === 'object') {
                    contractAddress = (eventData as any).contract || (eventData as any).contractAddress
                    rawData = (eventData as any).data || (eventData as any).rawData
                    console.log(`[SmartContract] DEBUG: Using DIRECT PROPERTIES format`)
                }
                else {
                    console.log(`[SmartContract] DEBUG: Unknown event format, skipping`)
                    break
                }

                if (!contractAddress || !rawData) {
                    console.log(`[SmartContract] DEBUG: Missing contractAddress or rawData, skipping`)
                    break
                }

                // Get contract address for current environment
                const chainEnv = process.env.CHAIN_ENV || 'DEVNET'
                const expectedAddress = SMART_CONTRACT_ADDRESSES[chainEnv as keyof typeof SMART_CONTRACT_ADDRESSES]

                // Try to convert hex address to SS58 for comparison
                let contractAddressSS58 = contractAddress
                try {
                    if (contractAddress.startsWith('0x')) {
                        contractAddressSS58 = toCereAddress(contractAddress)
                        console.log(`[SmartContract] DEBUG: Converted hex to SS58: ${contractAddress} → ${contractAddressSS58}`)
                    }
                } catch (conversionError) {
                    console.log(`[SmartContract] DEBUG: Failed to convert hex address:`, conversionError)
                }

                console.log(`[SmartContract] DEBUG: Contract address comparison:`)
                console.log(`[SmartContract] DEBUG: - Event contract (original): ${contractAddress}`)
                console.log(`[SmartContract] DEBUG: - Event contract (SS58): ${contractAddressSS58}`)
                console.log(`[SmartContract] DEBUG: - Expected (${chainEnv}): ${expectedAddress}`)
                console.log(`[SmartContract] DEBUG: - Match (original): ${contractAddress === expectedAddress}`)
                console.log(`[SmartContract] DEBUG: - Match (SS58): ${contractAddressSS58 === expectedAddress}`)

                if (contractAddress === expectedAddress || contractAddressSS58 === expectedAddress) {
                    // Force immediate refresh for contract events
                    this.forcePollNextBlock = true

                    // Try to extract account ID from the event data
                    // For DdcBalanceDeposited: cluster_id (32 bytes) + owner_id (32 bytes)
                    try {
                        if (typeof rawData === 'string' && rawData.startsWith('0x') && rawData.length >= 130) {
                            // Raw data: 0x + 64 bytes = 130 characters
                            // Skip '0x' (2 chars) + cluster_id (32 bytes = 64 chars) = 66 chars
                            const clusterId = '0x' + rawData.slice(2, 66)   // bytes 0-31
                            const ownerIdRaw = '0x' + rawData.slice(66, 130) // bytes 32-63

                            console.log(`[SmartContract] DEBUG: Raw data analysis:`)
                            console.log(`[SmartContract] DEBUG: - Total length: ${rawData.length} chars`)
                            console.log(`[SmartContract] DEBUG: - Cluster ID slice: 2-66 (${rawData.slice(2, 66).length} chars)`)
                            console.log(`[SmartContract] DEBUG: - Owner ID slice: 66-130 (${rawData.slice(66, 130).length} chars)`)
                            console.log(`[SmartContract] DEBUG: - Expected owner ID: 6SMyixxnAdhxFwATJ2C3rjB9J1BMu9fhjmMNrQQCETU2qFsT`)

                            console.log(`[SmartContract] Parsed event data:`)
                            console.log(`[SmartContract] - Cluster ID: ${clusterId}`)
                            console.log(`[SmartContract] - Owner ID (raw): ${ownerIdRaw}`)
                            console.log(`[SmartContract] - Full raw data: ${rawData}`)

                            // Add both raw owner ID and try to convert to different formats
                            this.accountsToRefresh.add(ownerIdRaw)

                            // Also try to convert raw bytes to SS58 format if possible
                            try {
                                const { toCereAddress } = require('../utils')
                                const ownerIdSS58 = toCereAddress(ownerIdRaw)
                                console.log(`[SmartContract] - Owner ID (SS58): ${ownerIdSS58}`)
                                this.accountsToRefresh.add(ownerIdSS58)
                            } catch (conversionError) {
                                console.log(`[SmartContract] - SS58 conversion failed:`, conversionError)
                            }

                            console.log(`[SmartContract] Added accounts to refresh queue`)
                        } else {
                            console.log(`[SmartContract] Raw data too short or invalid: ${rawData} (length: ${rawData?.length})`)
                        }
                    } catch (error) {
                        console.warn(`[SmartContract] Failed to parse event data:`, error)
                    }
                } else {
                    console.log(`[SmartContract] DEBUG: Contract address mismatch, skipping`)
                }
                break
            }
        }
    }

    /**
     * Get all accounts that need to be polled
     */
    private getAccountsToPolling(): string[] {
        // Get known accounts from internal state
        const knownAccounts = Array.from(this._state.keys()).map(key => {
            const parts = key.split('-')
            return parts[0] // accountId part
        })

        const priorityAccounts = Array.from(this.accountsToRefresh)

        const allAccounts = [...new Set([...knownAccounts, ...priorityAccounts])]

        return allAccounts
    }

    async process(event: Event, block: Block): Promise<void> {
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

            // Get all accounts to check (includes both known accounts and priority refresh accounts)
            const allAccountsToCheck = this.getAccountsToPolling()
            const priorityAccountsCount = this.accountsToRefresh.size

            console.log(`[SmartContract] DEBUG: Process method - accounts to check:`, allAccountsToCheck)
            console.log(`[SmartContract] DEBUG: Process method - priority accounts count:`, priorityAccountsCount)

            // Clear the priority accounts set after getting the list
            this.accountsToRefresh.clear()

            for (const accountId of allAccountsToCheck) {
                console.log(`[SmartContract] DEBUG: Querying balance for account: ${accountId}`)
                const balance = await this.queryContractBalance(accountId)
                if (balance) {
                    const key = `${balance.accountId}${balance.clusterId ? `-${balance.clusterId}` : ''}`
                    this._state.set(key, balance)
                    console.log(`[SmartContract] DEBUG: Balance found and saved:`, balance)
                } else {
                    console.log(`[SmartContract] DEBUG: No balance found for account: ${accountId}`)
                }
            }

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
