import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface EventRecord {
    phase: Type_335
    event: Event
    topics: H256[]
}

export type H256 = Bytes

export type Event = Event_Balances | Event_Bounties | Event_ChainBridge | Event_ChildBounties | Event_Contracts | Event_ConvictionVoting | Event_DdcClusters | Event_DdcClustersGov | Event_DdcCustomers | Event_DdcNodes | Event_DdcPayouts | Event_DdcStaking | Event_ElectionProviderMultiPhase | Event_Erc20 | Event_Erc721 | Event_FastUnstake | Event_Grandpa | Event_Identity | Event_ImOnline | Event_Indices | Event_Multisig | Event_NominationPools | Event_Offences | Event_Preimage | Event_Proxy | Event_Recovery | Event_Referenda | Event_Scheduler | Event_Session | Event_Staking | Event_Sudo | Event_System | Event_TechComm | Event_TransactionPayment | Event_Treasury | Event_Utility | Event_Vesting | Event_VoterList | Event_Whitelist

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
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

export interface Event_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingEvent
}

export interface Event_DdcClusters {
    __kind: 'DdcClusters'
    value: DdcClustersEvent
}

export interface Event_DdcClustersGov {
    __kind: 'DdcClustersGov'
    value: DdcClustersGovEvent
}

export interface Event_DdcCustomers {
    __kind: 'DdcCustomers'
    value: DdcCustomersEvent
}

export interface Event_DdcNodes {
    __kind: 'DdcNodes'
    value: DdcNodesEvent
}

export interface Event_DdcPayouts {
    __kind: 'DdcPayouts'
    value: DdcPayoutsEvent
}

export interface Event_DdcStaking {
    __kind: 'DdcStaking'
    value: DdcStakingEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
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

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Recovery {
    __kind: 'Recovery'
    value: RecoveryEvent
}

export interface Event_Referenda {
    __kind: 'Referenda'
    value: ReferendaEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
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

export interface Event_TechComm {
    __kind: 'TechComm'
    value: TechCommEvent
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

export interface Event_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistEvent
}

/**
 * The `Event` enum of this pallet
 */
export type WhitelistEvent = WhitelistEvent_CallWhitelisted | WhitelistEvent_WhitelistedCallDispatched | WhitelistEvent_WhitelistedCallRemoved

export interface WhitelistEvent_CallWhitelisted {
    __kind: 'CallWhitelisted'
    callHash: H256
}

export interface WhitelistEvent_WhitelistedCallDispatched {
    __kind: 'WhitelistedCallDispatched'
    callHash: H256
    result: Result<PostDispatchInfo, DispatchErrorWithPostInfo>
}

export interface WhitelistEvent_WhitelistedCallRemoved {
    __kind: 'WhitelistedCallRemoved'
    callHash: H256
}

export interface DispatchErrorWithPostInfo {
    postInfo: PostDispatchInfo
    error: DispatchError
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

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

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
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

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
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

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type TokenError = TokenError_BelowMinimum | TokenError_Blocked | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
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

export interface PostDispatchInfo {
    actualWeight?: (Weight | undefined)
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * The `Event` enum of this pallet
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

export type AccountId32 = Bytes

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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

/**
 * The `Event` enum of this pallet
 */
export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_SpendApproved | TreasuryEvent_Spending | TreasuryEvent_UpdatedInactive

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
 * The inactive funds of the pallet have been updated.
 */
export interface TreasuryEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type TechCommEvent = TechCommEvent_Approved | TechCommEvent_Closed | TechCommEvent_Disapproved | TechCommEvent_Executed | TechCommEvent_MemberExecuted | TechCommEvent_Proposed | TechCommEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface TechCommEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechCommEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechCommEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechCommEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechCommEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechCommEvent_Proposed {
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
export interface TechCommEvent_Voted {
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

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_ForceEra | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_SlashReported | StakingEvent_Slashed | StakingEvent_SnapshotTargetsSizeExceeded | StakingEvent_SnapshotVotersSizeExceeded | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_ValidatorPrefsSet | StakingEvent_Withdrawn

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
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
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
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: AccountId32
    fraction: Perbill
    slashEra: number
}

/**
 * A staker (validator or nominator) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: AccountId32
    amount: bigint
}

/**
 * Targets size limit reached.
 */
export interface StakingEvent_SnapshotTargetsSizeExceeded {
    __kind: 'SnapshotTargetsSizeExceeded'
    size: number
}

/**
 * Voters size limit reached.
 */
export interface StakingEvent_SnapshotVotersSizeExceeded {
    __kind: 'SnapshotVotersSizeExceeded'
    size: number
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

export type Perbill = number

export type Forcing = Forcing_ForceAlways | Forcing_ForceNew | Forcing_ForceNone | Forcing_NotForcing

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

/**
 * The `Event` enum of this pallet
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
export type SchedulerEvent = SchedulerEvent_CallUnavailable | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_PeriodicFailed | SchedulerEvent_PermanentlyOverweight | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id?: (Bytes | undefined)
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
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type ReferendaEvent = ReferendaEvent_Approved | ReferendaEvent_Cancelled | ReferendaEvent_ConfirmAborted | ReferendaEvent_ConfirmStarted | ReferendaEvent_Confirmed | ReferendaEvent_DecisionDepositPlaced | ReferendaEvent_DecisionDepositRefunded | ReferendaEvent_DecisionStarted | ReferendaEvent_DepositSlashed | ReferendaEvent_Killed | ReferendaEvent_MetadataCleared | ReferendaEvent_MetadataSet | ReferendaEvent_Rejected | ReferendaEvent_SubmissionDepositRefunded | ReferendaEvent_Submitted | ReferendaEvent_TimedOut

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface ReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has been cancelled.
 */
export interface ReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

export interface ReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface ReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface ReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The decision deposit has been placed.
 */
export interface ReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface ReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface ReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A deposit has been slashaed.
 */
export interface ReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been killed.
 */
export interface ReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface ReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * Metadata for a referendum has been set.
 */
export interface ReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: H256
}

/**
 * A proposal has been rejected by referendum.
 */
export interface ReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The submission deposit has been refunded.
 */
export interface ReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has been submitted.
 */
export interface ReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * A referendum has been timed out without being decided.
 */
export interface ReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: BoundedVec
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

export type BoundedVec = Bytes

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type PreimageEvent = PreimageEvent_Cleared | PreimageEvent_Noted | PreimageEvent_Requested

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: H256
}

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: H256
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: H256
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
export type NominationPoolsEvent = NominationPoolsEvent_Bonded | NominationPoolsEvent_Created | NominationPoolsEvent_Destroyed | NominationPoolsEvent_MemberRemoved | NominationPoolsEvent_PaidOut | NominationPoolsEvent_PoolCommissionChangeRateUpdated | NominationPoolsEvent_PoolCommissionClaimed | NominationPoolsEvent_PoolCommissionUpdated | NominationPoolsEvent_PoolMaxCommissionUpdated | NominationPoolsEvent_PoolSlashed | NominationPoolsEvent_RolesUpdated | NominationPoolsEvent_StateChanged | NominationPoolsEvent_Unbonded | NominationPoolsEvent_UnbondingPoolSlashed | NominationPoolsEvent_Withdrawn

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
 * A pool's commission `change_rate` has been changed.
 */
export interface NominationPoolsEvent_PoolCommissionChangeRateUpdated {
    __kind: 'PoolCommissionChangeRateUpdated'
    poolId: number
    changeRate: CommissionChangeRate
}

/**
 * Pool commission has been claimed.
 */
export interface NominationPoolsEvent_PoolCommissionClaimed {
    __kind: 'PoolCommissionClaimed'
    poolId: number
    commission: bigint
}

/**
 * A pool's commission setting has been changed.
 */
export interface NominationPoolsEvent_PoolCommissionUpdated {
    __kind: 'PoolCommissionUpdated'
    poolId: number
    current?: ([Perbill, AccountId32] | undefined)
}

/**
 * A pool's maximum commission setting has been changed.
 */
export interface NominationPoolsEvent_PoolMaxCommissionUpdated {
    __kind: 'PoolMaxCommissionUpdated'
    poolId: number
    maxCommission: Perbill
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
    bouncer?: (AccountId32 | undefined)
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

export interface CommissionChangeRate {
    maxIncrease: Perbill
    minDelay: number
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type FastUnstakeEvent = FastUnstakeEvent_BatchChecked | FastUnstakeEvent_BatchFinished | FastUnstakeEvent_InternalError | FastUnstakeEvent_Slashed | FastUnstakeEvent_Unstaked

/**
 * A batch was partially checked for the given eras, but the process did not finish.
 */
export interface FastUnstakeEvent_BatchChecked {
    __kind: 'BatchChecked'
    eras: number[]
}

/**
 * A batch of a given size was terminated.
 * 
 * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
 * of the batch. A new batch will be created upon next block.
 */
export interface FastUnstakeEvent_BatchFinished {
    __kind: 'BatchFinished'
    size: number
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type Erc20Event = Erc20Event_Remark

export interface Erc20Event_Remark {
    __kind: 'Remark'
    value: H256
}

/**
 * The `Event` enum of this pallet
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFailed | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_PhaseTransitioned | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored

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
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
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
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin?: (AccountId32 | undefined)
    prevEjected: boolean
}

export type Phase = Phase_Emergency | Phase_Off | Phase_Signed | Phase_Unsigned

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
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
 * The `Event` enum of this pallet
 */
export type DdcStakingEvent = DdcStakingEvent_Activated | DdcStakingEvent_Bonded | DdcStakingEvent_ChillSoon | DdcStakingEvent_Chilled | DdcStakingEvent_LeaveSoon | DdcStakingEvent_Left | DdcStakingEvent_Unbonded | DdcStakingEvent_Withdrawn

/**
 * An account that started participating as DDC network participant.
 * \[stash\]
 */
export interface DdcStakingEvent_Activated {
    __kind: 'Activated'
    value: AccountId32
}

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
 * An account has declared desire to stop participating in DDC network soon.
 * \[stash, cluster, block\]
 */
export interface DdcStakingEvent_ChillSoon {
    __kind: 'ChillSoon'
    value: [AccountId32, H160, number]
}

/**
 * An account has stopped participating as DDC network participant.
 * \[stash\]
 */
export interface DdcStakingEvent_Chilled {
    __kind: 'Chilled'
    value: AccountId32
}

/**
 * An account that started unbonding tokens below the minimum value set for the cluster
 * his DDC node is assigned to \[stash\]
 */
export interface DdcStakingEvent_LeaveSoon {
    __kind: 'LeaveSoon'
    value: AccountId32
}

/**
 * An account that unbonded tokens below the minimum value set for the cluster his
 * DDC node was assigned to \[stash\]
 */
export interface DdcStakingEvent_Left {
    __kind: 'Left'
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

export type H160 = Bytes

/**
 * The `Event` enum of this pallet
 */
export type DdcPayoutsEvent = DdcPayoutsEvent_AuthorisedCaller | DdcPayoutsEvent_BillingReportFinalized | DdcPayoutsEvent_BillingReportInitialized | DdcPayoutsEvent_ChargeError | DdcPayoutsEvent_ChargeFailed | DdcPayoutsEvent_Charged | DdcPayoutsEvent_ChargingFinished | DdcPayoutsEvent_ChargingStarted | DdcPayoutsEvent_ClusterReserveFeesCollected | DdcPayoutsEvent_Indebted | DdcPayoutsEvent_NotDistributedOverallReward | DdcPayoutsEvent_NotDistributedReward | DdcPayoutsEvent_ProviderRewarded | DdcPayoutsEvent_RewardingFinished | DdcPayoutsEvent_RewardingStarted | DdcPayoutsEvent_TreasuryFeesCollected | DdcPayoutsEvent_ValidatorFeesCollected | DdcPayoutsEvent_ValidatorRewarded

export interface DdcPayoutsEvent_AuthorisedCaller {
    __kind: 'AuthorisedCaller'
    authorisedCaller: AccountId32
}

export interface DdcPayoutsEvent_BillingReportFinalized {
    __kind: 'BillingReportFinalized'
    clusterId: H160
    era: number
}

export interface DdcPayoutsEvent_BillingReportInitialized {
    __kind: 'BillingReportInitialized'
    clusterId: H160
    era: number
}

export interface DdcPayoutsEvent_ChargeError {
    __kind: 'ChargeError'
    clusterId: H160
    era: number
    batchIndex: number
    customerId: AccountId32
    amount: bigint
    error: DispatchError
}

export interface DdcPayoutsEvent_ChargeFailed {
    __kind: 'ChargeFailed'
    clusterId: H160
    era: number
    batchIndex: number
    customerId: AccountId32
    charged: bigint
    expectedToCharge: bigint
}

export interface DdcPayoutsEvent_Charged {
    __kind: 'Charged'
    clusterId: H160
    era: number
    batchIndex: number
    customerId: AccountId32
    amount: bigint
}

export interface DdcPayoutsEvent_ChargingFinished {
    __kind: 'ChargingFinished'
    clusterId: H160
    era: number
}

export interface DdcPayoutsEvent_ChargingStarted {
    __kind: 'ChargingStarted'
    clusterId: H160
    era: number
}

export interface DdcPayoutsEvent_ClusterReserveFeesCollected {
    __kind: 'ClusterReserveFeesCollected'
    clusterId: H160
    era: number
    amount: bigint
}

export interface DdcPayoutsEvent_Indebted {
    __kind: 'Indebted'
    clusterId: H160
    era: number
    batchIndex: number
    customerId: AccountId32
    amount: bigint
}

export interface DdcPayoutsEvent_NotDistributedOverallReward {
    __kind: 'NotDistributedOverallReward'
    clusterId: H160
    era: number
    expectedReward: bigint
    totalDistributedReward: bigint
}

export interface DdcPayoutsEvent_NotDistributedReward {
    __kind: 'NotDistributedReward'
    clusterId: H160
    era: number
    batchIndex: number
    nodeProviderId: AccountId32
    expectedReward: bigint
    distributedReward: bigint
}

export interface DdcPayoutsEvent_ProviderRewarded {
    __kind: 'ProviderRewarded'
    clusterId: H160
    era: number
    batchIndex: number
    storedBytes: bigint
    transferredBytes: bigint
    numberOfPuts: bigint
    numberOfGets: bigint
    nodeProviderId: AccountId32
    rewarded: bigint
    expectedToReward: bigint
}

export interface DdcPayoutsEvent_RewardingFinished {
    __kind: 'RewardingFinished'
    clusterId: H160
    era: number
}

export interface DdcPayoutsEvent_RewardingStarted {
    __kind: 'RewardingStarted'
    clusterId: H160
    era: number
}

export interface DdcPayoutsEvent_TreasuryFeesCollected {
    __kind: 'TreasuryFeesCollected'
    clusterId: H160
    era: number
    amount: bigint
}

export interface DdcPayoutsEvent_ValidatorFeesCollected {
    __kind: 'ValidatorFeesCollected'
    clusterId: H160
    era: number
    amount: bigint
}

export interface DdcPayoutsEvent_ValidatorRewarded {
    __kind: 'ValidatorRewarded'
    clusterId: H160
    era: number
    validatorId: AccountId32
    amount: bigint
}

/**
 * The `Event` enum of this pallet
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

export type NodePubKey = NodePubKey_StoragePubKey

export interface NodePubKey_StoragePubKey {
    __kind: 'StoragePubKey'
    value: AccountId32
}

/**
 * The `Event` enum of this pallet
 */
export type DdcCustomersEvent = DdcCustomersEvent_BucketCreated | DdcCustomersEvent_BucketRemoved | DdcCustomersEvent_BucketUpdated | DdcCustomersEvent_Charged | DdcCustomersEvent_Deposited | DdcCustomersEvent_InitialDepositUnlock | DdcCustomersEvent_Withdrawn

/**
 * Bucket with specific id created
 */
export interface DdcCustomersEvent_BucketCreated {
    __kind: 'BucketCreated'
    bucketId: bigint
}

/**
 * Bucket with specific id marked as removed
 */
export interface DdcCustomersEvent_BucketRemoved {
    __kind: 'BucketRemoved'
    bucketId: bigint
}

/**
 * Bucket with specific id updated
 */
export interface DdcCustomersEvent_BucketUpdated {
    __kind: 'BucketUpdated'
    bucketId: bigint
}

/**
 * The account has been charged for the usage
 */
export interface DdcCustomersEvent_Charged {
    __kind: 'Charged'
    ownerId: AccountId32
    charged: bigint
    expectedToCharge: bigint
}

/**
 * An account has deposited this amount. \[owner, amount\]
 * 
 * NOTE: This event is only emitted when funds are deposited via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface DdcCustomersEvent_Deposited {
    __kind: 'Deposited'
    ownerId: AccountId32
    amount: bigint
}

/**
 * An account has initiated unlock for amount. \[owner, amount\]
 */
export interface DdcCustomersEvent_InitialDepositUnlock {
    __kind: 'InitialDepositUnlock'
    ownerId: AccountId32
    amount: bigint
}

/**
 * An account has called `withdraw_unlocked_deposit` and removed unlocking chunks worth
 * `Balance` from the unlocking queue. \[owner, amount\]
 */
export interface DdcCustomersEvent_Withdrawn {
    __kind: 'Withdrawn'
    ownerId: AccountId32
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type DdcClustersGovEvent = DdcClustersGovEvent_Approved | DdcClustersGovEvent_Closed | DdcClustersGovEvent_Disapproved | DdcClustersGovEvent_Proposed | DdcClustersGovEvent_ReferendumSubmitted | DdcClustersGovEvent_Removed | DdcClustersGovEvent_SubmissionDepositRefunded | DdcClustersGovEvent_SubmissionDepositRetained | DdcClustersGovEvent_Voted

/**
 * A proposal was approved by the required threshold.
 */
export interface DdcClustersGovEvent_Approved {
    __kind: 'Approved'
    clusterId: H160
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface DdcClustersGovEvent_Closed {
    __kind: 'Closed'
    clusterId: H160
    yes: number
    no: number
}

/**
 * A proposal was not approved by the required threshold.
 */
export interface DdcClustersGovEvent_Disapproved {
    __kind: 'Disapproved'
    clusterId: H160
}

/**
 * A proposal (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface DdcClustersGovEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    clusterId: H160
    threshold: number
}

/**
 * A proposal was executed; result will be `Ok` if it returned without error.
 */
export interface DdcClustersGovEvent_ReferendumSubmitted {
    __kind: 'ReferendumSubmitted'
    clusterId: H160
}

/**
 * A proposal was not removed by its author.
 */
export interface DdcClustersGovEvent_Removed {
    __kind: 'Removed'
    clusterId: H160
}

/**
 * The submission deposit has been refunded.
 */
export interface DdcClustersGovEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    referendaIndex: number
    /**
     * The account who placed the deposit.
     */
    depositor: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The submission deposit has been refunded.
 */
export interface DdcClustersGovEvent_SubmissionDepositRetained {
    __kind: 'SubmissionDepositRetained'
    /**
     * Index of the referendum.
     */
    referendaIndex: number
    /**
     * The account who placed the deposit.
     */
    depositor: AccountId32
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A proposal (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface DdcClustersGovEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    clusterId: H160
    voted: boolean
    yes: number
    no: number
}

/**
 * The `Event` enum of this pallet
 */
export type DdcClustersEvent = DdcClustersEvent_ClusterActivated | DdcClustersEvent_ClusterBonded | DdcClustersEvent_ClusterCreated | DdcClustersEvent_ClusterNodeAdded | DdcClustersEvent_ClusterNodeRemoved | DdcClustersEvent_ClusterNodeValidated | DdcClustersEvent_ClusterParamsSet | DdcClustersEvent_ClusterProtocolParamsSet | DdcClustersEvent_ClusterUnbonded

export interface DdcClustersEvent_ClusterActivated {
    __kind: 'ClusterActivated'
    clusterId: H160
}

export interface DdcClustersEvent_ClusterBonded {
    __kind: 'ClusterBonded'
    clusterId: H160
}

export interface DdcClustersEvent_ClusterCreated {
    __kind: 'ClusterCreated'
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

export interface DdcClustersEvent_ClusterNodeValidated {
    __kind: 'ClusterNodeValidated'
    clusterId: H160
    nodePubKey: NodePubKey
    succeeded: boolean
}

export interface DdcClustersEvent_ClusterParamsSet {
    __kind: 'ClusterParamsSet'
    clusterId: H160
}

export interface DdcClustersEvent_ClusterProtocolParamsSet {
    __kind: 'ClusterProtocolParamsSet'
    clusterId: H160
}

export interface DdcClustersEvent_ClusterUnbonded {
    __kind: 'ClusterUnbonded'
    clusterId: H160
}

/**
 * The `Event` enum of this pallet
 */
export type ConvictionVotingEvent = ConvictionVotingEvent_Delegated | ConvictionVotingEvent_Undelegated

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface ConvictionVotingEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId32, AccountId32]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface ConvictionVotingEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId32
}

/**
 * The `Event` enum of this pallet
 */
export type ContractsEvent = ContractsEvent_Called | ContractsEvent_CodeRemoved | ContractsEvent_CodeStored | ContractsEvent_ContractCodeUpdated | ContractsEvent_ContractEmitted | ContractsEvent_DelegateCalled | ContractsEvent_Instantiated | ContractsEvent_StorageDepositTransferredAndHeld | ContractsEvent_StorageDepositTransferredAndReleased | ContractsEvent_Terminated

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
     * The caller of the `contract`.
     */
    caller: Origin
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
    depositReleased: bigint
    remover: AccountId32
}

/**
 * Code with the specified hash has been stored.
 */
export interface ContractsEvent_CodeStored {
    __kind: 'CodeStored'
    codeHash: H256
    depositHeld: bigint
    uploader: AccountId32
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
 * Some funds have been transferred and held as storage deposit.
 */
export interface ContractsEvent_StorageDepositTransferredAndHeld {
    __kind: 'StorageDepositTransferredAndHeld'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some storage deposit funds have been transferred and released.
 */
export interface ContractsEvent_StorageDepositTransferredAndReleased {
    __kind: 'StorageDepositTransferredAndReleased'
    from: AccountId32
    to: AccountId32
    amount: bigint
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

export type Origin = Origin_Root | Origin_Signed

export interface Origin_Root {
    __kind: 'Root'
}

export interface Origin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount,
 * recipient, metadata)
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
 * NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id,
 * recipient, metadata)
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Burned | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_Frozen | BalancesEvent_Issued | BalancesEvent_Locked | BalancesEvent_Minted | BalancesEvent_Rescinded | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Restored | BalancesEvent_Slashed | BalancesEvent_Suspended | BalancesEvent_Thawed | BalancesEvent_Transfer | BalancesEvent_Unlocked | BalancesEvent_Unreserved | BalancesEvent_Upgraded | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: AccountId32
    amount: bigint
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
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
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
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
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
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
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
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: AccountId32
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
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: AccountId32
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

export type Type_335 = Type_335_ApplyExtrinsic | Type_335_Finalization | Type_335_Initialization

export interface Type_335_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_335_Finalization {
    __kind: 'Finalization'
}

export interface Type_335_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Type_335,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const H256 = sts.bytes()

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        Bounties: BountiesEvent,
        ChainBridge: ChainBridgeEvent,
        ChildBounties: ChildBountiesEvent,
        Contracts: ContractsEvent,
        ConvictionVoting: ConvictionVotingEvent,
        DdcClusters: DdcClustersEvent,
        DdcClustersGov: DdcClustersGovEvent,
        DdcCustomers: DdcCustomersEvent,
        DdcNodes: DdcNodesEvent,
        DdcPayouts: DdcPayoutsEvent,
        DdcStaking: DdcStakingEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
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
        Preimage: PreimageEvent,
        Proxy: ProxyEvent,
        Recovery: RecoveryEvent,
        Referenda: ReferendaEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Staking: StakingEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        TechComm: TechCommEvent,
        TransactionPayment: TransactionPaymentEvent,
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
        Vesting: VestingEvent,
        VoterList: VoterListEvent,
        Whitelist: WhitelistEvent,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const WhitelistEvent: sts.Type<WhitelistEvent> = sts.closedEnum(() => {
    return  {
        CallWhitelisted: sts.enumStruct({
            callHash: H256,
        }),
        WhitelistedCallDispatched: sts.enumStruct({
            callHash: H256,
            result: sts.result(() => PostDispatchInfo, () => DispatchErrorWithPostInfo),
        }),
        WhitelistedCallRemoved: sts.enumStruct({
            callHash: H256,
        }),
    }
})

export const DispatchErrorWithPostInfo: sts.Type<DispatchErrorWithPostInfo> = sts.struct(() => {
    return  {
        postInfo: PostDispatchInfo,
        error: DispatchError,
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
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
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
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

export const PostDispatchInfo: sts.Type<PostDispatchInfo> = sts.struct(() => {
    return  {
        actualWeight: sts.option(() => Weight),
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
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

export const AccountId32 = sts.bytes()

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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

/**
 * The `Event` enum of this pallet
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
        UpdatedInactive: sts.enumStruct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export const TechCommEvent: sts.Type<TechCommEvent> = sts.closedEnum(() => {
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

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
        ForceEra: sts.enumStruct({
            mode: Forcing,
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
        SlashReported: sts.enumStruct({
            validator: AccountId32,
            fraction: Perbill,
            slashEra: sts.number(),
        }),
        Slashed: sts.enumStruct({
            staker: AccountId32,
            amount: sts.bigint(),
        }),
        SnapshotTargetsSizeExceeded: sts.enumStruct({
            size: sts.number(),
        }),
        SnapshotVotersSizeExceeded: sts.enumStruct({
            size: sts.number(),
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

export const Perbill = sts.number()

export const Forcing: sts.Type<Forcing> = sts.closedEnum(() => {
    return  {
        ForceAlways: sts.unit(),
        ForceNew: sts.unit(),
        ForceNone: sts.unit(),
        NotForcing: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
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
        CallUnavailable: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
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
        PeriodicFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        PermanentlyOverweight: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ReferendaEvent: sts.Type<ReferendaEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            index: sts.number(),
        }),
        Cancelled: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        ConfirmAborted: sts.enumStruct({
            index: sts.number(),
        }),
        ConfirmStarted: sts.enumStruct({
            index: sts.number(),
        }),
        Confirmed: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        DecisionDepositPlaced: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DecisionStarted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
            tally: Tally,
        }),
        DepositSlashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Killed: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        MetadataCleared: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        MetadataSet: sts.enumStruct({
            index: sts.number(),
            hash: H256,
        }),
        Rejected: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
        SubmissionDepositRefunded: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Submitted: sts.enumStruct({
            index: sts.number(),
            track: sts.number(),
            proposal: Bounded,
        }),
        TimedOut: sts.enumStruct({
            index: sts.number(),
            tally: Tally,
        }),
    }
})

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: BoundedVec,
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export const BoundedVec = sts.bytes()

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export const PreimageEvent: sts.Type<PreimageEvent> = sts.closedEnum(() => {
    return  {
        Cleared: sts.enumStruct({
            hash: H256,
        }),
        Noted: sts.enumStruct({
            hash: H256,
        }),
        Requested: sts.enumStruct({
            hash: H256,
        }),
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
        PoolCommissionChangeRateUpdated: sts.enumStruct({
            poolId: sts.number(),
            changeRate: CommissionChangeRate,
        }),
        PoolCommissionClaimed: sts.enumStruct({
            poolId: sts.number(),
            commission: sts.bigint(),
        }),
        PoolCommissionUpdated: sts.enumStruct({
            poolId: sts.number(),
            current: sts.option(() => sts.tuple(() => [Perbill, AccountId32])),
        }),
        PoolMaxCommissionUpdated: sts.enumStruct({
            poolId: sts.number(),
            maxCommission: Perbill,
        }),
        PoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            balance: sts.bigint(),
        }),
        RolesUpdated: sts.enumStruct({
            root: sts.option(() => AccountId32),
            bouncer: sts.option(() => AccountId32),
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

export const CommissionChangeRate: sts.Type<CommissionChangeRate> = sts.struct(() => {
    return  {
        maxIncrease: Perbill,
        minDelay: sts.number(),
    }
})

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export const FastUnstakeEvent: sts.Type<FastUnstakeEvent> = sts.closedEnum(() => {
    return  {
        BatchChecked: sts.enumStruct({
            eras: sts.array(() => sts.number()),
        }),
        BatchFinished: sts.enumStruct({
            size: sts.number(),
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
 * The `Event` enum of this pallet
 */
export const Erc721Event: sts.Type<Erc721Event> = sts.closedEnum(() => {
    return  {
        Burned: sts.bigint(),
        Minted: sts.tuple(() => [AccountId32, sts.bigint()]),
        Transferred: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const Erc20Event: sts.Type<Erc20Event> = sts.closedEnum(() => {
    return  {
        Remark: H256,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFailed: sts.unit(),
        ElectionFinalized: sts.enumStruct({
            compute: ElectionCompute,
            score: ElectionScore,
        }),
        PhaseTransitioned: sts.enumStruct({
            from: Phase,
            to: Phase,
            round: sts.number(),
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            compute: ElectionCompute,
            origin: sts.option(() => AccountId32),
            prevEjected: sts.boolean(),
        }),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Off: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.tuple(() => [sts.boolean(), sts.number()]),
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
 * The `Event` enum of this pallet
 */
export const DdcStakingEvent: sts.Type<DdcStakingEvent> = sts.closedEnum(() => {
    return  {
        Activated: AccountId32,
        Bonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        ChillSoon: sts.tuple(() => [AccountId32, H160, sts.number()]),
        Chilled: AccountId32,
        LeaveSoon: AccountId32,
        Left: AccountId32,
        Unbonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

export const H160 = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const DdcPayoutsEvent: sts.Type<DdcPayoutsEvent> = sts.closedEnum(() => {
    return  {
        AuthorisedCaller: sts.enumStruct({
            authorisedCaller: AccountId32,
        }),
        BillingReportFinalized: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
        }),
        BillingReportInitialized: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
        }),
        ChargeError: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: AccountId32,
            amount: sts.bigint(),
            error: DispatchError,
        }),
        ChargeFailed: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        }),
        Charged: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: AccountId32,
            amount: sts.bigint(),
        }),
        ChargingFinished: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
        }),
        ChargingStarted: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
        }),
        ClusterReserveFeesCollected: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            amount: sts.bigint(),
        }),
        Indebted: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: AccountId32,
            amount: sts.bigint(),
        }),
        NotDistributedOverallReward: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            expectedReward: sts.bigint(),
            totalDistributedReward: sts.bigint(),
        }),
        NotDistributedReward: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            batchIndex: sts.number(),
            nodeProviderId: AccountId32,
            expectedReward: sts.bigint(),
            distributedReward: sts.bigint(),
        }),
        ProviderRewarded: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            batchIndex: sts.number(),
            storedBytes: sts.bigint(),
            transferredBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
            nodeProviderId: AccountId32,
            rewarded: sts.bigint(),
            expectedToReward: sts.bigint(),
        }),
        RewardingFinished: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
        }),
        RewardingStarted: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
        }),
        TreasuryFeesCollected: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            amount: sts.bigint(),
        }),
        ValidatorFeesCollected: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            amount: sts.bigint(),
        }),
        ValidatorRewarded: sts.enumStruct({
            clusterId: H160,
            era: sts.number(),
            validatorId: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
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

export const NodePubKey: sts.Type<NodePubKey> = sts.closedEnum(() => {
    return  {
        StoragePubKey: AccountId32,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const DdcCustomersEvent: sts.Type<DdcCustomersEvent> = sts.closedEnum(() => {
    return  {
        BucketCreated: sts.enumStruct({
            bucketId: sts.bigint(),
        }),
        BucketRemoved: sts.enumStruct({
            bucketId: sts.bigint(),
        }),
        BucketUpdated: sts.enumStruct({
            bucketId: sts.bigint(),
        }),
        Charged: sts.enumStruct({
            ownerId: AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        }),
        Deposited: sts.enumStruct({
            ownerId: AccountId32,
            amount: sts.bigint(),
        }),
        InitialDepositUnlock: sts.enumStruct({
            ownerId: AccountId32,
            amount: sts.bigint(),
        }),
        Withdrawn: sts.enumStruct({
            ownerId: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const DdcClustersGovEvent: sts.Type<DdcClustersGovEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            clusterId: H160,
        }),
        Closed: sts.enumStruct({
            clusterId: H160,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            clusterId: H160,
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            clusterId: H160,
            threshold: sts.number(),
        }),
        ReferendumSubmitted: sts.enumStruct({
            clusterId: H160,
        }),
        Removed: sts.enumStruct({
            clusterId: H160,
        }),
        SubmissionDepositRefunded: sts.enumStruct({
            referendaIndex: sts.number(),
            depositor: AccountId32,
            amount: sts.bigint(),
        }),
        SubmissionDepositRetained: sts.enumStruct({
            referendaIndex: sts.number(),
            depositor: AccountId32,
            amount: sts.bigint(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            clusterId: H160,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const DdcClustersEvent: sts.Type<DdcClustersEvent> = sts.closedEnum(() => {
    return  {
        ClusterActivated: sts.enumStruct({
            clusterId: H160,
        }),
        ClusterBonded: sts.enumStruct({
            clusterId: H160,
        }),
        ClusterCreated: sts.enumStruct({
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
        ClusterNodeValidated: sts.enumStruct({
            clusterId: H160,
            nodePubKey: NodePubKey,
            succeeded: sts.boolean(),
        }),
        ClusterParamsSet: sts.enumStruct({
            clusterId: H160,
        }),
        ClusterProtocolParamsSet: sts.enumStruct({
            clusterId: H160,
        }),
        ClusterUnbonded: sts.enumStruct({
            clusterId: H160,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ConvictionVotingEvent: sts.Type<ConvictionVotingEvent> = sts.closedEnum(() => {
    return  {
        Delegated: sts.tuple(() => [AccountId32, AccountId32]),
        Undelegated: AccountId32,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ContractsEvent: sts.Type<ContractsEvent> = sts.closedEnum(() => {
    return  {
        Called: sts.enumStruct({
            caller: Origin,
            contract: AccountId32,
        }),
        CodeRemoved: sts.enumStruct({
            codeHash: H256,
            depositReleased: sts.bigint(),
            remover: AccountId32,
        }),
        CodeStored: sts.enumStruct({
            codeHash: H256,
            depositHeld: sts.bigint(),
            uploader: AccountId32,
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
        StorageDepositTransferredAndHeld: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        StorageDepositTransferredAndReleased: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Terminated: sts.enumStruct({
            contract: AccountId32,
            beneficiary: AccountId32,
        }),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
        }),
        Burned: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
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
        Frozen: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Issued: sts.enumStruct({
            amount: sts.bigint(),
        }),
        Locked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Minted: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Rescinded: sts.enumStruct({
            amount: sts.bigint(),
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
        Restored: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Suspended: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Thawed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unlocked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Upgraded: sts.enumStruct({
            who: AccountId32,
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

export const Type_335: sts.Type<Type_335> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})