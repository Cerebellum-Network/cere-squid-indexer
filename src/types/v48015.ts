import {sts, Result, Option, Bytes, BitSequence} from './support'

export const PalletId = sts.bytes()

export interface BillingReport {
    state: State
    vault: AccountId32
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

export interface ClusterGovParams {
    treasuryShare: Perquintill
    validatorsShare: Perquintill
    clusterReserveShare: Perquintill
    cdnBondSize: bigint
    cdnChillDelay: number
    cdnUnbondingDelay: number
    storageBondSize: bigint
    storageChillDelay: number
    storageUnbondingDelay: number
    unitPerMbStored: bigint
    unitPerMbStreamed: bigint
    unitPerPutRequest: bigint
    unitPerGetRequest: bigint
}

export type Perquintill = bigint

export const ClusterGovParams: sts.Type<ClusterGovParams> = sts.struct(() => {
    return  {
        treasuryShare: Perquintill,
        validatorsShare: Perquintill,
        clusterReserveShare: Perquintill,
        cdnBondSize: sts.bigint(),
        cdnChillDelay: sts.number(),
        cdnUnbondingDelay: sts.number(),
        storageBondSize: sts.bigint(),
        storageChillDelay: sts.number(),
        storageUnbondingDelay: sts.number(),
        unitPerMbStored: sts.bigint(),
        unitPerMbStreamed: sts.bigint(),
        unitPerPutRequest: sts.bigint(),
        unitPerGetRequest: sts.bigint(),
    }
})

export const Perquintill = sts.bigint()

export type H160 = Bytes

export type AccountId32 = Bytes

export interface Type_570 {
    stash: AccountId32
    total: bigint
    active: bigint
    chilling?: (number | undefined)
    unlocking: Type_572[]
}

export interface Type_572 {
    value: bigint
    block: number
}

export const Type_570: sts.Type<Type_570> = sts.struct(() => {
    return  {
        stash: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        chilling: sts.option(() => sts.number()),
        unlocking: sts.array(() => Type_572),
    }
})

export const Type_572: sts.Type<Type_572> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        block: sts.number(),
    }
})

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()
