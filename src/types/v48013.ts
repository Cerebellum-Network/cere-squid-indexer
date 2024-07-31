import {sts, Result, Option, Bytes, BitSequence} from './support'

export const PalletId = sts.bytes()

export interface Bucket {
    bucketId: bigint
    ownerId: AccountId32
    clusterId: H160
}

export const Bucket: sts.Type<Bucket> = sts.struct(() => {
    return  {
        bucketId: sts.bigint(),
        ownerId: AccountId32,
        clusterId: H160,
    }
})

export interface AccountsLedger {
    owner: AccountId32
    total: bigint
    active: bigint
    unlocking: Type_568[]
}

export interface Type_568 {
    value: bigint
    block: number
}

export const AccountsLedger: sts.Type<AccountsLedger> = sts.struct(() => {
    return  {
        owner: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        unlocking: sts.array(() => Type_568),
    }
})

export const Type_568: sts.Type<Type_568> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        block: sts.number(),
    }
})

export interface ClusterGovParams {
    treasuryShare: Perbill
    validatorsShare: Perbill
    clusterReserveShare: Perbill
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

export type Perbill = number

export const ClusterGovParams: sts.Type<ClusterGovParams> = sts.struct(() => {
    return  {
        treasuryShare: Perbill,
        validatorsShare: Perbill,
        clusterReserveShare: Perbill,
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

export const Perbill = sts.number()

export interface Cluster {
    clusterId: H160
    managerId: AccountId32
    reserveId: AccountId32
    props: ClusterProps
}

export interface ClusterProps {
    nodeProviderAuthContract: AccountId32
}

export const Cluster: sts.Type<Cluster> = sts.struct(() => {
    return  {
        clusterId: H160,
        managerId: AccountId32,
        reserveId: AccountId32,
        props: ClusterProps,
    }
})

export const ClusterProps: sts.Type<ClusterProps> = sts.struct(() => {
    return  {
        nodeProviderAuthContract: AccountId32,
    }
})

export interface CDNNode {
    pubKey: AccountId32
    providerId: AccountId32
    clusterId?: (H160 | undefined)
    props: CDNNodeProps
}

export interface CDNNodeProps {
    host: Bytes
    httpPort: number
    grpcPort: number
    p2PPort: number
}

export const CDNNode: sts.Type<CDNNode> = sts.struct(() => {
    return  {
        pubKey: AccountId32,
        providerId: AccountId32,
        clusterId: sts.option(() => H160),
        props: CDNNodeProps,
    }
})

export const CDNNodeProps: sts.Type<CDNNodeProps> = sts.struct(() => {
    return  {
        host: sts.bytes(),
        httpPort: sts.number(),
        grpcPort: sts.number(),
        p2PPort: sts.number(),
    }
})

export interface StorageNode {
    pubKey: AccountId32
    providerId: AccountId32
    clusterId?: (H160 | undefined)
    props: StorageNodeProps
}

export interface StorageNodeProps {
    host: Bytes
    domain: Bytes
    ssl: boolean
    httpPort: number
    grpcPort: number
    p2PPort: number
}

export const StorageNode: sts.Type<StorageNode> = sts.struct(() => {
    return  {
        pubKey: AccountId32,
        providerId: AccountId32,
        clusterId: sts.option(() => H160),
        props: StorageNodeProps,
    }
})

export const StorageNodeProps: sts.Type<StorageNodeProps> = sts.struct(() => {
    return  {
        host: sts.bytes(),
        domain: sts.bytes(),
        ssl: sts.boolean(),
        httpPort: sts.number(),
        grpcPort: sts.number(),
        p2PPort: sts.number(),
    }
})

export type NodePubKey = NodePubKey_CDNPubKey | NodePubKey_StoragePubKey

export interface NodePubKey_CDNPubKey {
    __kind: 'CDNPubKey'
    value: AccountId32
}

export interface NodePubKey_StoragePubKey {
    __kind: 'StoragePubKey'
    value: AccountId32
}

export const NodePubKey: sts.Type<NodePubKey> = sts.closedEnum(() => {
    return  {
        CDNPubKey: AccountId32,
        StoragePubKey: AccountId32,
    }
})

export type H160 = Bytes

export type AccountId32 = Bytes

export interface Type_561 {
    stash: AccountId32
    total: bigint
    active: bigint
    chilling?: (number | undefined)
    unlocking: Type_563[]
}

export interface Type_563 {
    value: bigint
    block: number
}

export const Type_561: sts.Type<Type_561> = sts.struct(() => {
    return  {
        stash: AccountId32,
        total: sts.bigint(),
        active: sts.bigint(),
        chilling: sts.option(() => sts.number()),
        unlocking: sts.array(() => Type_563),
    }
})

export const Type_563: sts.Type<Type_563> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        block: sts.number(),
    }
})

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type H256 = Bytes

export type Event = Event_Balances | Event_Bounties | Event_CereDDCModule | Event_ChainBridge | Event_ChildBounties | Event_Contracts | Event_Council | Event_DdcClusters | Event_DdcCustomers | Event_DdcMetricsOffchainWorker | Event_DdcNodes | Event_DdcStaking | Event_Democracy | Event_ElectionProviderMultiPhase | Event_Elections | Event_Erc20 | Event_Erc721 | Event_FastUnstake | Event_Grandpa | Event_Identity | Event_ImOnline | Event_Indices | Event_Multisig | Event_NominationPools | Event_Offences | Event_Proxy | Event_Recovery | Event_Scheduler | Event_Session | Event_Society | Event_Staking | Event_Sudo | Event_System | Event_TechnicalCommittee | Event_TechnicalMembership | Event_Tips | Event_TransactionPayment | Event_Treasury | Event_Utility | Event_Vesting | Event_VoterList

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_CereDDCModule {
    __kind: 'CereDDCModule'
    value: CereDDCModuleEvent
}

export interface Event_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeEvent
}

export interface Event_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesEvent
}

export interface Event_Contracts {
    __kind: 'Contracts'
    value: ContractsEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_DdcClusters {
    __kind: 'DdcClusters'
    value: DdcClustersEvent
}

export interface Event_DdcCustomers {
    __kind: 'DdcCustomers'
    value: DdcCustomersEvent
}

export interface Event_DdcMetricsOffchainWorker {
    __kind: 'DdcMetricsOffchainWorker'
    value: DdcMetricsOffchainWorkerEvent
}

export interface Event_DdcNodes {
    __kind: 'DdcNodes'
    value: DdcNodesEvent
}

export interface Event_DdcStaking {
    __kind: 'DdcStaking'
    value: DdcStakingEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Elections {
    __kind: 'Elections'
    value: ElectionsEvent
}

export interface Event_Erc20 {
    __kind: 'Erc20'
    value: Erc20Event
}

export interface Event_Erc721 {
    __kind: 'Erc721'
    value: Erc721Event
}

export interface Event_FastUnstake {
    __kind: 'FastUnstake'
    value: FastUnstakeEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Recovery {
    __kind: 'Recovery'
    value: RecoveryEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Society {
    __kind: 'Society'
    value: SocietyEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Tips {
    __kind: 'Tips'
    value: TipsEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: AccountId32
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: AccountId32
    newScore: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingCompleted | VestingEvent_VestingUpdated

/**
 * An \[account\] has become fully vested.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    account: AccountId32
}

/**
 * The amount vested has been updated. This could indicate a change in funds available.
 * The balance given is the amount which is left unvested (and thus locked).
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    account: AccountId32
    unvested: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_BatchInterrupted | UtilityEvent_DispatchedAs | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Result<null, DispatchError>
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_UnknownAsset | TokenError_Unsupported | TokenError_WouldDie

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface ModuleError {
    index: number
    error: Bytes
}

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_SpendApproved | TreasuryEvent_Spending

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: AccountId32
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: AccountId32
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: AccountId32
    actualFee: bigint
    tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosed | TipsEvent_TipClosing | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened.
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    tipHash: H256
}

/**
 * A tip suggestion has been closed.
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    tipHash: H256
    who: AccountId32
    payout: bigint
}

/**
 * A tip suggestion has reached threshold and is closing.
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    tipHash: H256
}

/**
 * A tip suggestion has been retracted.
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    tipHash: H256
}

/**
 * A tip suggestion has been slashed.
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    tipHash: H256
    finder: AccountId32
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount | SystemEvent_Remarked

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: AccountId32
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: AccountId32
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: AccountId32
    hash: H256
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface Weight {
    refTime: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer?: (AccountId32 | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Result<null, DispatchError>
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_ValidatorPrefsSet | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: AccountId32
    amount: bigint
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: AccountId32
    stash: AccountId32
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: AccountId32
}

/**
 * The nominator has been rewarded by this amount.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: AccountId32
    amount: bigint
}

/**
 * One staker (and potentially its nominators) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: AccountId32
    amount: bigint
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: AccountId32
    amount: bigint
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: AccountId32
    prefs: ValidatorPrefs
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: AccountId32
    amount: bigint
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SocietyEvent = SocietyEvent_AutoUnbid | SocietyEvent_Bid | SocietyEvent_CandidateSuspended | SocietyEvent_Challenged | SocietyEvent_DefenderVote | SocietyEvent_Deposit | SocietyEvent_Founded | SocietyEvent_Inducted | SocietyEvent_MemberSuspended | SocietyEvent_NewMaxMembers | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_Unbid | SocietyEvent_Unfounded | SocietyEvent_Unvouch | SocietyEvent_Vote | SocietyEvent_Vouch

/**
 * A candidate was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    candidate: AccountId32
}

/**
 * A membership bid just happened. The given account is the candidate's ID and their offer
 * is the second.
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    candidateId: AccountId32
    offer: bigint
}

/**
 * A candidate has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    candidate: AccountId32
}

/**
 * A member has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    member: AccountId32
}

/**
 * A vote has been placed for a defending member
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    voter: AccountId32
    vote: boolean
}

/**
 * Some funds were deposited into the society account.
 */
export interface SocietyEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * The society is founded by the given identity.
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    founder: AccountId32
}

/**
 * A group of candidates have been inducted. The batch's primary is the first value, the
 * batch in full is the second.
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    primary: AccountId32
    candidates: AccountId32[]
}

/**
 * A member has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    member: AccountId32
}

/**
 * A new \[max\] member count has been set
 */
export interface SocietyEvent_NewMaxMembers {
    __kind: 'NewMaxMembers'
    max: number
}

/**
 * A suspended member has been judged.
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    who: AccountId32
    judged: boolean
}

/**
 * A candidate was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    candidate: AccountId32
}

/**
 * Society is unfounded.
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    founder: AccountId32
}

/**
 * A candidate was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    candidate: AccountId32
}

/**
 * A vote has been placed
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    candidate: AccountId32
    voter: AccountId32
    vote: boolean
}

/**
 * A membership bid just happened by vouching. The given account is the candidate's ID and
 * their offer is the second. The vouching party is the third.
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    candidateId: AccountId32
    offer: bigint
    vouching: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_CallLookupFailed | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallLookupFailed {
    __kind: 'CallLookupFailed'
    task: [number, number]
    id?: (Bytes | undefined)
    error: LookupError
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id?: (Bytes | undefined)
    result: Result<null, DispatchError>
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

export type LookupError = LookupError_BadFormat | LookupError_Unknown

export interface LookupError_BadFormat {
    __kind: 'BadFormat'
}

export interface LookupError_Unknown {
    __kind: 'Unknown'
}

/**
 * Events type.
 */
export type RecoveryEvent = RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryClosed | RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryRemoved | RecoveryEvent_RecoveryVouched

/**
 * Lost account has been successfully recovered by rescuer account.
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    lostAccount: AccountId32
    rescuerAccount: AccountId32
}

/**
 * A recovery process for lost account by rescuer account has been closed.
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    lostAccount: AccountId32
    rescuerAccount: AccountId32
}

/**
 * A recovery process has been set up for an account.
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    account: AccountId32
}

/**
 * A recovery process has been initiated for lost account by rescuer account.
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    lostAccount: AccountId32
    rescuerAccount: AccountId32
}

/**
 * A recovery process has been removed for an account.
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    lostAccount: AccountId32
}

/**
 * A recovery process for lost account by rescuer account has been vouched for by sender.
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    lostAccount: AccountId32
    rescuerAccount: AccountId32
    sender: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyExecuted | ProxyEvent_ProxyRemoved | ProxyEvent_PureCreated

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: AccountId32
    proxy: AccountId32
    callHash: H256
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Result<null, DispatchError>
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A pure account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_PureCreated {
    __kind: 'PureCreated'
    pure: AccountId32
    who: AccountId32
    proxyType: ProxyType
    disambiguationIndex: number
}

export type ProxyType = ProxyType_Any | ProxyType_Governance | ProxyType_NonTransfer | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Bytes
    timeslot: Bytes
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent = NominationPoolsEvent_Bonded | NominationPoolsEvent_Created | NominationPoolsEvent_Destroyed | NominationPoolsEvent_MemberRemoved | NominationPoolsEvent_PaidOut | NominationPoolsEvent_PoolSlashed | NominationPoolsEvent_RolesUpdated | NominationPoolsEvent_StateChanged | NominationPoolsEvent_Unbonded | NominationPoolsEvent_UnbondingPoolSlashed | NominationPoolsEvent_Withdrawn

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: AccountId32
    poolId: number
    bonded: bigint
    joined: boolean
}

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    depositor: AccountId32
    poolId: number
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

/**
 * A member has been removed from a pool.
 * 
 * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
 */
export interface NominationPoolsEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    poolId: number
    member: AccountId32
}

/**
 * A payout has been made to a member.
 */
export interface NominationPoolsEvent_PaidOut {
    __kind: 'PaidOut'
    member: AccountId32
    poolId: number
    payout: bigint
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * The roles of a pool have been updated to the given new roles. Note that the depositor
 * can never change.
 */
export interface NominationPoolsEvent_RolesUpdated {
    __kind: 'RolesUpdated'
    root?: (AccountId32 | undefined)
    stateToggler?: (AccountId32 | undefined)
    nominator?: (AccountId32 | undefined)
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * A member has unbonded from their pool.
 * 
 * - `balance` is the corresponding balance of the number of points that has been
 *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
 *   pool.
 * - `points` is the number of points that are issued as a result of `balance` being
 * dissolved into the corresponding unbonding pool.
 * - `era` is the era in which the balance will be unbonded.
 * In the absence of slashing, these values will match. In the presence of slashing, the
 * number of points that are issued in the unbonding pool will be less than the amount
 * requested to be unbonded.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
    era: number
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * A member has withdrawn from their pool.
 * 
 * The given number of `points` have been dissolved in return of `balance`.
 * 
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
}

export type PoolState = PoolState_Blocked | PoolState_Destroying | PoolState_Open

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
    result: Result<null, DispatchError>
}

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: AccountId32
    multisig: AccountId32
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned.
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    who: AccountId32
    index: number
}

/**
 * A account index has been freed up (unassigned).
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    index: number
}

/**
 * A account index has been frozen to its current account ID.
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    index: number
    who: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Bytes
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [AccountId32, Exposure][]
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId32
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: AccountId32
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: AccountId32
    registrarIndex: number
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Public, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type Public = Bytes

/**
 * The events of this pallet.
 */
export type FastUnstakeEvent = FastUnstakeEvent_Checking | FastUnstakeEvent_Errored | FastUnstakeEvent_InternalError | FastUnstakeEvent_Slashed | FastUnstakeEvent_Unstaked

/**
 * A staker was partially checked for the given eras, but the process did not finish.
 */
export interface FastUnstakeEvent_Checking {
    __kind: 'Checking'
    stash: AccountId32
    eras: number[]
}

/**
 * Some internal error happened while migrating stash. They are removed as head as a
 * consequence.
 */
export interface FastUnstakeEvent_Errored {
    __kind: 'Errored'
    stash: AccountId32
}

/**
 * An internal error happened. Operations will be paused now.
 */
export interface FastUnstakeEvent_InternalError {
    __kind: 'InternalError'
}

/**
 * A staker was slashed for requesting fast-unstake whilst being exposed.
 */
export interface FastUnstakeEvent_Slashed {
    __kind: 'Slashed'
    stash: AccountId32
    amount: bigint
}

/**
 * A staker was unstaked.
 */
export interface FastUnstakeEvent_Unstaked {
    __kind: 'Unstaked'
    stash: AccountId32
    result: Result<null, DispatchError>
}

/**
 * Events for this module.
 * 
 */
export type Erc721Event = Erc721Event_Burned | Erc721Event_Minted | Erc721Event_Transferred

/**
 * Token removed from the system
 */
export interface Erc721Event_Burned {
    __kind: 'Burned'
    value: bigint
}

/**
 * New token created
 */
export interface Erc721Event_Minted {
    __kind: 'Minted'
    value: [AccountId32, bigint]
}

/**
 * Token transfer between two parties
 */
export interface Erc721Event_Transferred {
    __kind: 'Transferred'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * Events for this module.
 * 
 */
export type Erc20Event = Erc20Event_Remark

export interface Erc20Event_Remark {
    __kind: 'Remark'
    value: H256
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ElectionsEvent = ElectionsEvent_CandidateSlashed | ElectionsEvent_ElectionError | ElectionsEvent_EmptyTerm | ElectionsEvent_MemberKicked | ElectionsEvent_NewTerm | ElectionsEvent_Renounced | ElectionsEvent_SeatHolderSlashed

/**
 * A candidate was slashed by amount due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface ElectionsEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    candidate: AccountId32
    amount: bigint
}

/**
 * Internal error happened while trying to perform election.
 */
export interface ElectionsEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 * A member has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface ElectionsEvent_MemberKicked {
    __kind: 'MemberKicked'
    member: AccountId32
}

/**
 * A new term with new_members. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface ElectionsEvent_NewTerm {
    __kind: 'NewTerm'
    newMembers: [AccountId32, bigint][]
}

/**
 * Someone has renounced their candidacy.
 */
export interface ElectionsEvent_Renounced {
    __kind: 'Renounced'
    candidate: AccountId32
}

/**
 * A seat holder was slashed by amount by being forcefully removed from the set.
 */
export interface ElectionsEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    seatHolder: AccountId32
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFailed | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 * An election failed.
 * 
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: AccountId32
    value: bigint
}

/**
 * The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    round: number
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: AccountId32
    value: bigint
}

/**
 * A solution was stored with the given compute.
 * 
 * If the solution is signed, this means that it hasn't yet been processed. If the
 * solution is unsigned, this means that it has also been processed.
 * 
 * The `bool` is `true` when a previous solution was ejected to make room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    prevEjected: boolean
}

/**
 * The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    round: number
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export type ElectionCompute = ElectionCompute_Emergency | ElectionCompute_Fallback | ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_ProposalCanceled | DemocracyEvent_Proposed | DemocracyEvent_Seconded | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_Voted

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    proposalHash: H256
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    refIndex: number
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    who: AccountId32
    target: AccountId32
}

/**
 * A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    refIndex: number
    result: Result<null, DispatchError>
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    refIndex: number
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    refIndex: number
}

/**
 * A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    proposalHash: H256
    refIndex: number
}

/**
 * A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    proposalHash: H256
    refIndex: number
}

/**
 * A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    proposalHash: H256
    who: AccountId32
    deposit: bigint
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    proposalHash: H256
    provider: AccountId32
    deposit: bigint
    reaper: AccountId32
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    proposalHash: H256
    provider: AccountId32
    deposit: bigint
}

/**
 * A proposal got canceled.
 */
export interface DemocracyEvent_ProposalCanceled {
    __kind: 'ProposalCanceled'
    propIndex: number
}

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
    deposit: bigint
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
    __kind: 'Seconded'
    seconder: AccountId32
    propIndex: number
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    refIndex: number
    threshold: VoteThreshold
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    proposalIndex: number
    deposit: bigint
    depositors: AccountId32[]
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    account: AccountId32
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    who: AccountId32
    proposalHash: H256
    until: number
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
    __kind: 'Voted'
    voter: AccountId32
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DdcStakingEvent = DdcStakingEvent_Bonded | DdcStakingEvent_ChillSoon | DdcStakingEvent_Chilled | DdcStakingEvent_Unbonded | DdcStakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface DdcStakingEvent_Bonded {
    __kind: 'Bonded'
    value: [AccountId32, bigint]
}

/**
 * An account has declared desire to stop participating in CDN or storage network soon.
 * \[stash, cluster, block\]
 */
export interface DdcStakingEvent_ChillSoon {
    __kind: 'ChillSoon'
    value: [AccountId32, H160, number]
}

/**
 * An account has stopped participating as either a storage network or CDN participant.
 * \[stash\]
 */
export interface DdcStakingEvent_Chilled {
    __kind: 'Chilled'
    value: AccountId32
}

/**
 * An account has unbonded this amount. \[stash, amount\]
 */
export interface DdcStakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [AccountId32, bigint]
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue. \[stash, amount\]
 */
export interface DdcStakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DdcNodesEvent = DdcNodesEvent_NodeCreated | DdcNodesEvent_NodeDeleted | DdcNodesEvent_NodeParamsChanged

export interface DdcNodesEvent_NodeCreated {
    __kind: 'NodeCreated'
    nodePubKey: NodePubKey
}

export interface DdcNodesEvent_NodeDeleted {
    __kind: 'NodeDeleted'
    nodePubKey: NodePubKey
}

export interface DdcNodesEvent_NodeParamsChanged {
    __kind: 'NodeParamsChanged'
    nodePubKey: NodePubKey
}

/**
 * Events for this module.
 * 
 * Events generated by the module.
 */
export type DdcMetricsOffchainWorkerEvent = DdcMetricsOffchainWorkerEvent_NewDdcMetric

export interface DdcMetricsOffchainWorkerEvent_NewDdcMetric {
    __kind: 'NewDdcMetric'
    value: [AccountId32, Bytes]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DdcCustomersEvent = DdcCustomersEvent_BucketCreated | DdcCustomersEvent_Charged | DdcCustomersEvent_Deposited | DdcCustomersEvent_InitiatDepositUnlock | DdcCustomersEvent_Withdrawn

/**
 * Bucket with specific id created
 */
export interface DdcCustomersEvent_BucketCreated {
    __kind: 'BucketCreated'
    value: bigint
}

/**
 * Total amount charged from all accounts to pay CDN nodes
 */
export interface DdcCustomersEvent_Charged {
    __kind: 'Charged'
    value: bigint
}

/**
 * An account has deposited this amount. \[owner, amount\]
 * 
 * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface DdcCustomersEvent_Deposited {
    __kind: 'Deposited'
    value: [AccountId32, bigint]
}

/**
 * An account has initiated unlock for amount. \[owner, amount\]
 */
export interface DdcCustomersEvent_InitiatDepositUnlock {
    __kind: 'InitiatDepositUnlock'
    value: [AccountId32, bigint]
}

/**
 * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
 * `Balance` from the unlocking queue. \[owner, amount\]
 */
export interface DdcCustomersEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DdcClustersEvent = DdcClustersEvent_ClusterCreated | DdcClustersEvent_ClusterGovParamsSet | DdcClustersEvent_ClusterNodeAdded | DdcClustersEvent_ClusterNodeRemoved | DdcClustersEvent_ClusterParamsSet

export interface DdcClustersEvent_ClusterCreated {
    __kind: 'ClusterCreated'
    clusterId: H160
}

export interface DdcClustersEvent_ClusterGovParamsSet {
    __kind: 'ClusterGovParamsSet'
    clusterId: H160
}

export interface DdcClustersEvent_ClusterNodeAdded {
    __kind: 'ClusterNodeAdded'
    clusterId: H160
    nodePubKey: NodePubKey
}

export interface DdcClustersEvent_ClusterNodeRemoved {
    __kind: 'ClusterNodeRemoved'
    clusterId: H160
    nodePubKey: NodePubKey
}

export interface DdcClustersEvent_ClusterParamsSet {
    __kind: 'ClusterParamsSet'
    clusterId: H160
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ContractsEvent = ContractsEvent_Called | ContractsEvent_CodeRemoved | ContractsEvent_CodeStored | ContractsEvent_ContractCodeUpdated | ContractsEvent_ContractEmitted | ContractsEvent_DelegateCalled | ContractsEvent_Instantiated | ContractsEvent_Terminated

/**
 * A contract was called either by a plain account or another contract.
 * 
 * # Note
 * 
 * Please keep in mind that like all events this is only emitted for successful
 * calls. This is because on failure all storage changes including events are
 * rolled back.
 */
export interface ContractsEvent_Called {
    __kind: 'Called'
    /**
     * The account that called the `contract`.
     */
    caller: AccountId32
    /**
     * The contract that was called.
     */
    contract: AccountId32
}

/**
 * A code with the specified hash was removed.
 */
export interface ContractsEvent_CodeRemoved {
    __kind: 'CodeRemoved'
    codeHash: H256
}

/**
 * Code with the specified hash has been stored.
 */
export interface ContractsEvent_CodeStored {
    __kind: 'CodeStored'
    codeHash: H256
}

/**
 * A contract's code was updated.
 */
export interface ContractsEvent_ContractCodeUpdated {
    __kind: 'ContractCodeUpdated'
    /**
     * The contract that has been updated.
     */
    contract: AccountId32
    /**
     * New code hash that was set for the contract.
     */
    newCodeHash: H256
    /**
     * Previous code hash of the contract.
     */
    oldCodeHash: H256
}

/**
 * A custom event emitted by the contract.
 */
export interface ContractsEvent_ContractEmitted {
    __kind: 'ContractEmitted'
    /**
     * The contract that emitted the event.
     */
    contract: AccountId32
    /**
     * Data supplied by the contract. Metadata generated during contract compilation
     * is needed to decode it.
     */
    data: Bytes
}

/**
 * A contract delegate called a code hash.
 * 
 * # Note
 * 
 * Please keep in mind that like all events this is only emitted for successful
 * calls. This is because on failure all storage changes including events are
 * rolled back.
 */
export interface ContractsEvent_DelegateCalled {
    __kind: 'DelegateCalled'
    /**
     * The contract that performed the delegate call and hence in whose context
     * the `code_hash` is executed.
     */
    contract: AccountId32
    /**
     * The code hash that was delegate called.
     */
    codeHash: H256
}

/**
 * Contract deployed by address at the specified address.
 */
export interface ContractsEvent_Instantiated {
    __kind: 'Instantiated'
    deployer: AccountId32
    contract: AccountId32
}

/**
 * Contract has been removed.
 * 
 * # Note
 * 
 * The only way for a contract to be removed and emitting this event is by calling
 * `seal_terminate`.
 */
export interface ContractsEvent_Terminated {
    __kind: 'Terminated'
    /**
     * The contract that was terminated.
     */
    contract: AccountId32
    /**
     * The account that received the contracts remaining balance
     */
    beneficiary: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ChildBountiesEvent = ChildBountiesEvent_Added | ChildBountiesEvent_Awarded | ChildBountiesEvent_Canceled | ChildBountiesEvent_Claimed

/**
 * A child-bounty is added.
 */
export interface ChildBountiesEvent_Added {
    __kind: 'Added'
    index: number
    childIndex: number
}

/**
 * A child-bounty is awarded to a beneficiary.
 */
export interface ChildBountiesEvent_Awarded {
    __kind: 'Awarded'
    index: number
    childIndex: number
    beneficiary: AccountId32
}

/**
 * A child-bounty is cancelled.
 */
export interface ChildBountiesEvent_Canceled {
    __kind: 'Canceled'
    index: number
    childIndex: number
}

/**
 * A child-bounty is claimed by beneficiary.
 */
export interface ChildBountiesEvent_Claimed {
    __kind: 'Claimed'
    index: number
    childIndex: number
    payout: bigint
    beneficiary: AccountId32
}

/**
 * Events for this module.
 * 
 */
export type ChainBridgeEvent = ChainBridgeEvent_ChainWhitelisted | ChainBridgeEvent_FungibleTransfer | ChainBridgeEvent_GenericTransfer | ChainBridgeEvent_NonFungibleTransfer | ChainBridgeEvent_ProposalApproved | ChainBridgeEvent_ProposalFailed | ChainBridgeEvent_ProposalRejected | ChainBridgeEvent_ProposalSucceeded | ChainBridgeEvent_RelayerAdded | ChainBridgeEvent_RelayerRemoved | ChainBridgeEvent_RelayerThresholdChanged | ChainBridgeEvent_VoteAgainst | ChainBridgeEvent_VoteFor

/**
 * Chain now available for transfers (chain_id)
 */
export interface ChainBridgeEvent_ChainWhitelisted {
    __kind: 'ChainWhitelisted'
    value: number
}

/**
 * FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient, metadata)
 */
export interface ChainBridgeEvent_FungibleTransfer {
    __kind: 'FungibleTransfer'
    value: [number, bigint, Bytes, bigint, Bytes]
}

/**
 * GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
 */
export interface ChainBridgeEvent_GenericTransfer {
    __kind: 'GenericTransfer'
    value: [number, bigint, Bytes, Bytes]
}

/**
 * NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id, recipient, metadata)
 */
export interface ChainBridgeEvent_NonFungibleTransfer {
    __kind: 'NonFungibleTransfer'
    value: [number, bigint, Bytes, Bytes, Bytes, Bytes]
}

/**
 * Voting successful for a proposal
 */
export interface ChainBridgeEvent_ProposalApproved {
    __kind: 'ProposalApproved'
    value: [number, bigint]
}

/**
 * Execution of call failed
 */
export interface ChainBridgeEvent_ProposalFailed {
    __kind: 'ProposalFailed'
    value: [number, bigint]
}

/**
 * Voting rejected a proposal
 */
export interface ChainBridgeEvent_ProposalRejected {
    __kind: 'ProposalRejected'
    value: [number, bigint]
}

/**
 * Execution of call succeeded
 */
export interface ChainBridgeEvent_ProposalSucceeded {
    __kind: 'ProposalSucceeded'
    value: [number, bigint]
}

/**
 * Relayer added to set
 */
export interface ChainBridgeEvent_RelayerAdded {
    __kind: 'RelayerAdded'
    value: AccountId32
}

/**
 * Relayer removed from set
 */
export interface ChainBridgeEvent_RelayerRemoved {
    __kind: 'RelayerRemoved'
    value: AccountId32
}

/**
 * Vote threshold has changed (new_threshold)
 */
export interface ChainBridgeEvent_RelayerThresholdChanged {
    __kind: 'RelayerThresholdChanged'
    value: number
}

/**
 * Vot submitted against proposal
 */
export interface ChainBridgeEvent_VoteAgainst {
    __kind: 'VoteAgainst'
    value: [number, bigint, AccountId32]
}

/**
 * Vote submitted in favour of proposal
 */
export interface ChainBridgeEvent_VoteFor {
    __kind: 'VoteFor'
    value: [number, bigint, AccountId32]
}

/**
 * Events for this module.
 * 
 */
export type CereDDCModuleEvent = CereDDCModuleEvent_DataStringChanged | CereDDCModuleEvent_DataStringSet

/**
 * A data string was changed. \[who\]
 */
export interface CereDDCModuleEvent_DataStringChanged {
    __kind: 'DataStringChanged'
    value: AccountId32
}

/**
 * A data string was set. \[who\]
 */
export interface CereDDCModuleEvent_DataStringSet {
    __kind: 'DataStringSet'
    value: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BountiesEvent = BountiesEvent_BountyAwarded | BountiesEvent_BountyBecameActive | BountiesEvent_BountyCanceled | BountiesEvent_BountyClaimed | BountiesEvent_BountyExtended | BountiesEvent_BountyProposed | BountiesEvent_BountyRejected

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    index: number
    beneficiary: AccountId32
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    index: number
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    index: number
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    index: number
    payout: bigint
    beneficiary: AccountId32
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    index: number
}

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    index: number
    bond: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Slashed | BalancesEvent_Transfer | BalancesEvent_Unreserved | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
    reserved: bigint
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: AccountId32
    freeBalance: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: AccountId32
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: AccountId32
    amount: bigint
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Phase,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const H256 = sts.bytes()

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        Bounties: BountiesEvent,
        CereDDCModule: CereDDCModuleEvent,
        ChainBridge: ChainBridgeEvent,
        ChildBounties: ChildBountiesEvent,
        Contracts: ContractsEvent,
        Council: CouncilEvent,
        DdcClusters: DdcClustersEvent,
        DdcCustomers: DdcCustomersEvent,
        DdcMetricsOffchainWorker: DdcMetricsOffchainWorkerEvent,
        DdcNodes: DdcNodesEvent,
        DdcStaking: DdcStakingEvent,
        Democracy: DemocracyEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        Elections: ElectionsEvent,
        Erc20: Erc20Event,
        Erc721: Erc721Event,
        FastUnstake: FastUnstakeEvent,
        Grandpa: GrandpaEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Indices: IndicesEvent,
        Multisig: MultisigEvent,
        NominationPools: NominationPoolsEvent,
        Offences: OffencesEvent,
        Proxy: ProxyEvent,
        Recovery: RecoveryEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Society: SocietyEvent,
        Staking: StakingEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        Tips: TipsEvent,
        TransactionPayment: TransactionPaymentEvent,
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
        Vesting: VestingEvent,
        VoterList: VoterListEvent,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const VoterListEvent: sts.Type<VoterListEvent> = sts.closedEnum(() => {
    return  {
        Rebagged: sts.enumStruct({
            who: AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        }),
        ScoreUpdated: sts.enumStruct({
            who: AccountId32,
            newScore: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const VestingEvent: sts.Type<VestingEvent> = sts.closedEnum(() => {
    return  {
        VestingCompleted: sts.enumStruct({
            account: AccountId32,
        }),
        VestingUpdated: sts.enumStruct({
            account: AccountId32,
            unvested: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchCompletedWithErrors: sts.unit(),
        BatchInterrupted: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        DispatchedAs: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ItemCompleted: sts.unit(),
        ItemFailed: sts.enumStruct({
            error: DispatchError,
        }),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return  {
        Awarded: sts.enumStruct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: AccountId32,
        }),
        Burnt: sts.enumStruct({
            burntFunds: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            value: sts.bigint(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
        }),
        Rejected: sts.enumStruct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        }),
        Rollover: sts.enumStruct({
            rolloverBalance: sts.bigint(),
        }),
        SpendApproved: sts.enumStruct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: AccountId32,
        }),
        Spending: sts.enumStruct({
            budgetRemaining: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const TransactionPaymentEvent: sts.Type<TransactionPaymentEvent> = sts.closedEnum(() => {
    return  {
        TransactionFeePaid: sts.enumStruct({
            who: AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const TipsEvent: sts.Type<TipsEvent> = sts.closedEnum(() => {
    return  {
        NewTip: sts.enumStruct({
            tipHash: H256,
        }),
        TipClosed: sts.enumStruct({
            tipHash: H256,
            who: AccountId32,
            payout: sts.bigint(),
        }),
        TipClosing: sts.enumStruct({
            tipHash: H256,
        }),
        TipRetracted: sts.enumStruct({
            tipHash: H256,
        }),
        TipSlashed: sts.enumStruct({
            tipHash: H256,
            finder: AccountId32,
            deposit: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const TechnicalMembershipEvent: sts.Type<TechnicalMembershipEvent> = sts.closedEnum(() => {
    return  {
        Dummy: sts.unit(),
        KeyChanged: sts.unit(),
        MemberAdded: sts.unit(),
        MemberRemoved: sts.unit(),
        MembersReset: sts.unit(),
        MembersSwapped: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.enumStruct({
            dispatchError: DispatchError,
            dispatchInfo: DispatchInfo,
        }),
        ExtrinsicSuccess: sts.enumStruct({
            dispatchInfo: DispatchInfo,
        }),
        KilledAccount: sts.enumStruct({
            account: AccountId32,
        }),
        NewAccount: sts.enumStruct({
            account: AccountId32,
        }),
        Remarked: sts.enumStruct({
            sender: AccountId32,
            hash: H256,
        }),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: sts.enumStruct({
            oldSudoer: sts.option(() => AccountId32),
        }),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Chilled: sts.enumStruct({
            stash: AccountId32,
        }),
        EraPaid: sts.enumStruct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
            remainder: sts.bigint(),
        }),
        Kicked: sts.enumStruct({
            nominator: AccountId32,
            stash: AccountId32,
        }),
        OldSlashingReportDiscarded: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
        PayoutStarted: sts.enumStruct({
            eraIndex: sts.number(),
            validatorStash: AccountId32,
        }),
        Rewarded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            staker: AccountId32,
            amount: sts.bigint(),
        }),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        ValidatorPrefsSet: sts.enumStruct({
            stash: AccountId32,
            prefs: ValidatorPrefs,
        }),
        Withdrawn: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const SocietyEvent: sts.Type<SocietyEvent> = sts.closedEnum(() => {
    return  {
        AutoUnbid: sts.enumStruct({
            candidate: AccountId32,
        }),
        Bid: sts.enumStruct({
            candidateId: AccountId32,
            offer: sts.bigint(),
        }),
        CandidateSuspended: sts.enumStruct({
            candidate: AccountId32,
        }),
        Challenged: sts.enumStruct({
            member: AccountId32,
        }),
        DefenderVote: sts.enumStruct({
            voter: AccountId32,
            vote: sts.boolean(),
        }),
        Deposit: sts.enumStruct({
            value: sts.bigint(),
        }),
        Founded: sts.enumStruct({
            founder: AccountId32,
        }),
        Inducted: sts.enumStruct({
            primary: AccountId32,
            candidates: sts.array(() => AccountId32),
        }),
        MemberSuspended: sts.enumStruct({
            member: AccountId32,
        }),
        NewMaxMembers: sts.enumStruct({
            max: sts.number(),
        }),
        SuspendedMemberJudgement: sts.enumStruct({
            who: AccountId32,
            judged: sts.boolean(),
        }),
        Unbid: sts.enumStruct({
            candidate: AccountId32,
        }),
        Unfounded: sts.enumStruct({
            founder: AccountId32,
        }),
        Unvouch: sts.enumStruct({
            candidate: AccountId32,
        }),
        Vote: sts.enumStruct({
            candidate: AccountId32,
            voter: AccountId32,
            vote: sts.boolean(),
        }),
        Vouch: sts.enumStruct({
            candidateId: AccountId32,
            offer: sts.bigint(),
            vouching: AccountId32,
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        CallLookupFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            error: LookupError,
        }),
        Canceled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        Dispatched: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

export const LookupError: sts.Type<LookupError> = sts.closedEnum(() => {
    return  {
        BadFormat: sts.unit(),
        Unknown: sts.unit(),
    }
})

/**
 * Events type.
 */
export const RecoveryEvent: sts.Type<RecoveryEvent> = sts.closedEnum(() => {
    return  {
        AccountRecovered: sts.enumStruct({
            lostAccount: AccountId32,
            rescuerAccount: AccountId32,
        }),
        RecoveryClosed: sts.enumStruct({
            lostAccount: AccountId32,
            rescuerAccount: AccountId32,
        }),
        RecoveryCreated: sts.enumStruct({
            account: AccountId32,
        }),
        RecoveryInitiated: sts.enumStruct({
            lostAccount: AccountId32,
            rescuerAccount: AccountId32,
        }),
        RecoveryRemoved: sts.enumStruct({
            lostAccount: AccountId32,
        }),
        RecoveryVouched: sts.enumStruct({
            lostAccount: AccountId32,
            rescuerAccount: AccountId32,
            sender: AccountId32,
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return  {
        Announced: sts.enumStruct({
            real: AccountId32,
            proxy: AccountId32,
            callHash: H256,
        }),
        ProxyAdded: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        ProxyExecuted: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ProxyRemoved: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        PureCreated: sts.enumStruct({
            pure: AccountId32,
            who: AccountId32,
            proxyType: ProxyType,
            disambiguationIndex: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Governance: sts.unit(),
        NonTransfer: sts.unit(),
        Staking: sts.unit(),
    }
})

/**
 * Events type.
 */
export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.enumStruct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        }),
    }
})

/**
 * Events of this pallet.
 */
export const NominationPoolsEvent: sts.Type<NominationPoolsEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
            joined: sts.boolean(),
        }),
        Created: sts.enumStruct({
            depositor: AccountId32,
            poolId: sts.number(),
        }),
        Destroyed: sts.enumStruct({
            poolId: sts.number(),
        }),
        MemberRemoved: sts.enumStruct({
            poolId: sts.number(),
            member: AccountId32,
        }),
        PaidOut: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            payout: sts.bigint(),
        }),
        PoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            balance: sts.bigint(),
        }),
        RolesUpdated: sts.enumStruct({
            root: sts.option(() => AccountId32),
            stateToggler: sts.option(() => AccountId32),
            nominator: sts.option(() => AccountId32),
        }),
        StateChanged: sts.enumStruct({
            poolId: sts.number(),
            newState: PoolState,
        }),
        Unbonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
            era: sts.number(),
        }),
        UnbondingPoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            balance: sts.bigint(),
        }),
        Withdrawn: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
        }),
    }
})

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return  {
        Blocked: sts.unit(),
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigCancelled: sts.enumStruct({
            cancelling: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigExecuted: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        NewMultisig: sts.enumStruct({
            approving: AccountId32,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const IndicesEvent: sts.Type<IndicesEvent> = sts.closedEnum(() => {
    return  {
        IndexAssigned: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
        IndexFreed: sts.enumStruct({
            index: sts.number(),
        }),
        IndexFrozen: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.enumStruct({
            authorityId: sts.bytes(),
        }),
        SomeOffline: sts.enumStruct({
            offline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
        }),
    }
})

export const Exposure: sts.Type<Exposure> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId32,
        value: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentityKilled: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentitySet: sts.enumStruct({
            who: AccountId32,
        }),
        JudgementGiven: sts.enumStruct({
            target: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementRequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementUnrequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        RegistrarAdded: sts.enumStruct({
            registrarIndex: sts.number(),
        }),
        SubIdentityAdded: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRemoved: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRevoked: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.enumStruct({
            authoritySet: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        }),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const Public = sts.bytes()

/**
 * The events of this pallet.
 */
export const FastUnstakeEvent: sts.Type<FastUnstakeEvent> = sts.closedEnum(() => {
    return  {
        Checking: sts.enumStruct({
            stash: AccountId32,
            eras: sts.array(() => sts.number()),
        }),
        Errored: sts.enumStruct({
            stash: AccountId32,
        }),
        InternalError: sts.unit(),
        Slashed: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Unstaked: sts.enumStruct({
            stash: AccountId32,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * Events for this module.
 * 
 */
export const Erc721Event: sts.Type<Erc721Event> = sts.closedEnum(() => {
    return  {
        Burned: sts.bigint(),
        Minted: sts.tuple(() => [AccountId32, sts.bigint()]),
        Transferred: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
    }
})

/**
 * Events for this module.
 * 
 */
export const Erc20Event: sts.Type<Erc20Event> = sts.closedEnum(() => {
    return  {
        Remark: H256,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ElectionsEvent: sts.Type<ElectionsEvent> = sts.closedEnum(() => {
    return  {
        CandidateSlashed: sts.enumStruct({
            candidate: AccountId32,
            amount: sts.bigint(),
        }),
        ElectionError: sts.unit(),
        EmptyTerm: sts.unit(),
        MemberKicked: sts.enumStruct({
            member: AccountId32,
        }),
        NewTerm: sts.enumStruct({
            newMembers: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
        }),
        Renounced: sts.enumStruct({
            candidate: AccountId32,
        }),
        SeatHolderSlashed: sts.enumStruct({
            seatHolder: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFailed: sts.unit(),
        ElectionFinalized: sts.enumStruct({
            compute: ElectionCompute,
            score: ElectionScore,
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SignedPhaseStarted: sts.enumStruct({
            round: sts.number(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            compute: ElectionCompute,
            prevEjected: sts.boolean(),
        }),
        UnsignedPhaseStarted: sts.enumStruct({
            round: sts.number(),
        }),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return  {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Fallback: sts.unit(),
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: sts.enumStruct({
            proposalHash: H256,
        }),
        Cancelled: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Delegated: sts.enumStruct({
            who: AccountId32,
            target: AccountId32,
        }),
        Executed: sts.enumStruct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ExternalTabled: sts.unit(),
        NotPassed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Passed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        PreimageInvalid: sts.enumStruct({
            proposalHash: H256,
            refIndex: sts.number(),
        }),
        PreimageMissing: sts.enumStruct({
            proposalHash: H256,
            refIndex: sts.number(),
        }),
        PreimageNoted: sts.enumStruct({
            proposalHash: H256,
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        PreimageReaped: sts.enumStruct({
            proposalHash: H256,
            provider: AccountId32,
            deposit: sts.bigint(),
            reaper: AccountId32,
        }),
        PreimageUsed: sts.enumStruct({
            proposalHash: H256,
            provider: AccountId32,
            deposit: sts.bigint(),
        }),
        ProposalCanceled: sts.enumStruct({
            propIndex: sts.number(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        }),
        Seconded: sts.enumStruct({
            seconder: AccountId32,
            propIndex: sts.number(),
        }),
        Started: sts.enumStruct({
            refIndex: sts.number(),
            threshold: VoteThreshold,
        }),
        Tabled: sts.enumStruct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => AccountId32),
        }),
        Undelegated: sts.enumStruct({
            account: AccountId32,
        }),
        Vetoed: sts.enumStruct({
            who: AccountId32,
            proposalHash: H256,
            until: sts.number(),
        }),
        Voted: sts.enumStruct({
            voter: AccountId32,
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: sts.number(),
            balance: sts.bigint(),
        }),
    }
})

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const DdcStakingEvent: sts.Type<DdcStakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        ChillSoon: sts.tuple(() => [AccountId32, H160, sts.number()]),
        Chilled: AccountId32,
        Unbonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const DdcNodesEvent: sts.Type<DdcNodesEvent> = sts.closedEnum(() => {
    return  {
        NodeCreated: sts.enumStruct({
            nodePubKey: NodePubKey,
        }),
        NodeDeleted: sts.enumStruct({
            nodePubKey: NodePubKey,
        }),
        NodeParamsChanged: sts.enumStruct({
            nodePubKey: NodePubKey,
        }),
    }
})

/**
 * Events for this module.
 * 
 * Events generated by the module.
 */
export const DdcMetricsOffchainWorkerEvent: sts.Type<DdcMetricsOffchainWorkerEvent> = sts.closedEnum(() => {
    return  {
        NewDdcMetric: sts.tuple(() => [AccountId32, sts.bytes()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const DdcCustomersEvent: sts.Type<DdcCustomersEvent> = sts.closedEnum(() => {
    return  {
        BucketCreated: sts.bigint(),
        Charged: sts.bigint(),
        Deposited: sts.tuple(() => [AccountId32, sts.bigint()]),
        InitiatDepositUnlock: sts.tuple(() => [AccountId32, sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const DdcClustersEvent: sts.Type<DdcClustersEvent> = sts.closedEnum(() => {
    return  {
        ClusterCreated: sts.enumStruct({
            clusterId: H160,
        }),
        ClusterGovParamsSet: sts.enumStruct({
            clusterId: H160,
        }),
        ClusterNodeAdded: sts.enumStruct({
            clusterId: H160,
            nodePubKey: NodePubKey,
        }),
        ClusterNodeRemoved: sts.enumStruct({
            clusterId: H160,
            nodePubKey: NodePubKey,
        }),
        ClusterParamsSet: sts.enumStruct({
            clusterId: H160,
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ContractsEvent: sts.Type<ContractsEvent> = sts.closedEnum(() => {
    return  {
        Called: sts.enumStruct({
            caller: AccountId32,
            contract: AccountId32,
        }),
        CodeRemoved: sts.enumStruct({
            codeHash: H256,
        }),
        CodeStored: sts.enumStruct({
            codeHash: H256,
        }),
        ContractCodeUpdated: sts.enumStruct({
            contract: AccountId32,
            newCodeHash: H256,
            oldCodeHash: H256,
        }),
        ContractEmitted: sts.enumStruct({
            contract: AccountId32,
            data: sts.bytes(),
        }),
        DelegateCalled: sts.enumStruct({
            contract: AccountId32,
            codeHash: H256,
        }),
        Instantiated: sts.enumStruct({
            deployer: AccountId32,
            contract: AccountId32,
        }),
        Terminated: sts.enumStruct({
            contract: AccountId32,
            beneficiary: AccountId32,
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ChildBountiesEvent: sts.Type<ChildBountiesEvent> = sts.closedEnum(() => {
    return  {
        Added: sts.enumStruct({
            index: sts.number(),
            childIndex: sts.number(),
        }),
        Awarded: sts.enumStruct({
            index: sts.number(),
            childIndex: sts.number(),
            beneficiary: AccountId32,
        }),
        Canceled: sts.enumStruct({
            index: sts.number(),
            childIndex: sts.number(),
        }),
        Claimed: sts.enumStruct({
            index: sts.number(),
            childIndex: sts.number(),
            payout: sts.bigint(),
            beneficiary: AccountId32,
        }),
    }
})

/**
 * Events for this module.
 * 
 */
export const ChainBridgeEvent: sts.Type<ChainBridgeEvent> = sts.closedEnum(() => {
    return  {
        ChainWhitelisted: sts.number(),
        FungibleTransfer: sts.tuple(() => [sts.number(), sts.bigint(), sts.bytes(), sts.bigint(), sts.bytes()]),
        GenericTransfer: sts.tuple(() => [sts.number(), sts.bigint(), sts.bytes(), sts.bytes()]),
        NonFungibleTransfer: sts.tuple(() => [sts.number(), sts.bigint(), sts.bytes(), sts.bytes(), sts.bytes(), sts.bytes()]),
        ProposalApproved: sts.tuple(() => [sts.number(), sts.bigint()]),
        ProposalFailed: sts.tuple(() => [sts.number(), sts.bigint()]),
        ProposalRejected: sts.tuple(() => [sts.number(), sts.bigint()]),
        ProposalSucceeded: sts.tuple(() => [sts.number(), sts.bigint()]),
        RelayerAdded: AccountId32,
        RelayerRemoved: AccountId32,
        RelayerThresholdChanged: sts.number(),
        VoteAgainst: sts.tuple(() => [sts.number(), sts.bigint(), AccountId32]),
        VoteFor: sts.tuple(() => [sts.number(), sts.bigint(), AccountId32]),
    }
})

/**
 * Events for this module.
 * 
 */
export const CereDDCModuleEvent: sts.Type<CereDDCModuleEvent> = sts.closedEnum(() => {
    return  {
        DataStringChanged: AccountId32,
        DataStringSet: AccountId32,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const BountiesEvent: sts.Type<BountiesEvent> = sts.closedEnum(() => {
    return  {
        BountyAwarded: sts.enumStruct({
            index: sts.number(),
            beneficiary: AccountId32,
        }),
        BountyBecameActive: sts.enumStruct({
            index: sts.number(),
        }),
        BountyCanceled: sts.enumStruct({
            index: sts.number(),
        }),
        BountyClaimed: sts.enumStruct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: AccountId32,
        }),
        BountyExtended: sts.enumStruct({
            index: sts.number(),
        }),
        BountyProposed: sts.enumStruct({
            index: sts.number(),
        }),
        BountyRejected: sts.enumStruct({
            index: sts.number(),
            bond: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            account: AccountId32,
            freeBalance: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            destinationStatus: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Withdraw: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const AccountId32 = sts.bytes()

export const H160 = sts.bytes()
