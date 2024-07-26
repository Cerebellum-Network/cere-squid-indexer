import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H160 = Bytes

export interface BillingReport {
    state: State
    vault: AccountId32
    startEra: bigint
    endEra: bigint
    totalCustomerCharge: CustomerCharge
    totalDistributedReward: bigint
    totalNodeUsage: NodeUsage
    chargingMaxBatchIndex: number
    chargingProcessedBatches: number[]
    rewardingMaxBatchIndex: number
    rewardingProcessedBatches: number[]
}

export interface NodeUsage {
    transferredBytes: bigint
    storedBytes: bigint
    numberOfPuts: bigint
    numberOfGets: bigint
}

export interface CustomerCharge {
    transfer: bigint
    storage: bigint
    puts: bigint
    gets: bigint
}

export type AccountId32 = Bytes

export type State = State_ChargingCustomers | State_CustomersChargedWithFees | State_Finalized | State_Initialized | State_NotInitialized | State_ProvidersRewarded | State_RewardingProviders

export interface State_ChargingCustomers {
    __kind: 'ChargingCustomers'
}

export interface State_CustomersChargedWithFees {
    __kind: 'CustomersChargedWithFees'
}

export interface State_Finalized {
    __kind: 'Finalized'
}

export interface State_Initialized {
    __kind: 'Initialized'
}

export interface State_NotInitialized {
    __kind: 'NotInitialized'
}

export interface State_ProvidersRewarded {
    __kind: 'ProvidersRewarded'
}

export interface State_RewardingProviders {
    __kind: 'RewardingProviders'
}

export const BillingReport: sts.Type<BillingReport> = sts.struct(() => {
    return  {
        state: State,
        vault: AccountId32,
        startEra: sts.bigint(),
        endEra: sts.bigint(),
        totalCustomerCharge: CustomerCharge,
        totalDistributedReward: sts.bigint(),
        totalNodeUsage: NodeUsage,
        chargingMaxBatchIndex: sts.number(),
        chargingProcessedBatches: sts.array(() => sts.number()),
        rewardingMaxBatchIndex: sts.number(),
        rewardingProcessedBatches: sts.array(() => sts.number()),
    }
})

export const NodeUsage: sts.Type<NodeUsage> = sts.struct(() => {
    return  {
        transferredBytes: sts.bigint(),
        storedBytes: sts.bigint(),
        numberOfPuts: sts.bigint(),
        numberOfGets: sts.bigint(),
    }
})

export const CustomerCharge: sts.Type<CustomerCharge> = sts.struct(() => {
    return  {
        transfer: sts.bigint(),
        storage: sts.bigint(),
        puts: sts.bigint(),
        gets: sts.bigint(),
    }
})

export const State: sts.Type<State> = sts.closedEnum(() => {
    return  {
        ChargingCustomers: sts.unit(),
        CustomersChargedWithFees: sts.unit(),
        Finalized: sts.unit(),
        Initialized: sts.unit(),
        NotInitialized: sts.unit(),
        ProvidersRewarded: sts.unit(),
        RewardingProviders: sts.unit(),
    }
})

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()
