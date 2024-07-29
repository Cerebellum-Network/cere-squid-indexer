import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface EventRecord {
    phase: Phase
    event: Type_370
    topics: Hash[]
}

export type Hash = Bytes

export type Type_370 = Type_370_Balances | Type_370_Bounties | Type_370_CereDDCModule | Type_370_ChainBridge | Type_370_Contracts | Type_370_Council | Type_370_DdcMetricsOffchainWorker | Type_370_Democracy | Type_370_ElectionProviderMultiPhase | Type_370_Elections | Type_370_Erc20 | Type_370_Erc721 | Type_370_Grandpa | Type_370_Identity | Type_370_ImOnline | Type_370_Indices | Type_370_Multisig | Type_370_Offences | Type_370_Proxy | Type_370_Recovery | Type_370_Scheduler | Type_370_Session | Type_370_Society | Type_370_Staking | Type_370_Sudo | Type_370_System | Type_370_TechnicalCommittee | Type_370_TechnicalMembership | Type_370_Tips | Type_370_Treasury | Type_370_Utility | Type_370_Vesting

export interface Type_370_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Type_370_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Type_370_CereDDCModule {
    __kind: 'CereDDCModule'
    value: CereDDCModuleEvent
}

export interface Type_370_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeEvent
}

export interface Type_370_Contracts {
    __kind: 'Contracts'
    value: ContractsEvent
}

export interface Type_370_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Type_370_DdcMetricsOffchainWorker {
    __kind: 'DdcMetricsOffchainWorker'
    value: DdcMetricsOffchainWorkerEvent
}

export interface Type_370_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Type_370_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Type_370_Elections {
    __kind: 'Elections'
    value: ElectionsEvent
}

export interface Type_370_Erc20 {
    __kind: 'Erc20'
    value: Erc20Event
}

export interface Type_370_Erc721 {
    __kind: 'Erc721'
    value: Erc721Event
}

export interface Type_370_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Type_370_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Type_370_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Type_370_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Type_370_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Type_370_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Type_370_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Type_370_Recovery {
    __kind: 'Recovery'
    value: RecoveryEvent
}

export interface Type_370_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Type_370_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Type_370_Society {
    __kind: 'Society'
    value: SocietyEvent
}

export interface Type_370_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Type_370_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Type_370_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Type_370_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Type_370_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Type_370_Tips {
    __kind: 'Tips'
    value: TipsEvent
}

export interface Type_370_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Type_370_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Type_370_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

export type VestingEvent = VestingEvent_VestingCompleted | VestingEvent_VestingUpdated

/**
 *  An \[account\] has become fully vested. No further vesting can happen.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    value: AccountId
}

/**
 *  The amount vested has been updated. This could indicate more funds are available. The
 *  balance given is the amount which is left unvested (and thus locked).
 *  \[account, unvested\]
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    value: [AccountId, Balance]
}

export type Balance = bigint

export type AccountId = Bytes

export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchInterrupted

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token

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
    value: DispatchErrorModule
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

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_Overflow | TokenError_Underflow | TokenError_UnknownAsset | TokenError_WouldDie

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

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface DispatchErrorModule {
    index: number
    error: number
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

export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_Spending

/**
 *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [ProposalIndex, Balance, AccountId]
}

/**
 *  Some of our funds have been burnt. \[burn\]
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: Balance
}

/**
 *  Some funds have been deposited. \[deposit\]
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: Balance
}

/**
 *  New proposal. \[proposal_index\]
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: ProposalIndex
}

/**
 *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [ProposalIndex, Balance]
}

/**
 *  Spending has finished; this is the amount that rolls over until next spend.
 *  \[budget_remaining\]
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: Balance
}

/**
 *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: Balance
}

export type ProposalIndex = number

export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosed | TipsEvent_TipClosing | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 *  A new tip suggestion has been opened. \[tip_hash\]
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    value: Hash
}

/**
 *  A tip suggestion has been closed. \[tip_hash, who, payout\]
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    value: [Hash, AccountId, Balance]
}

/**
 *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    value: Hash
}

/**
 *  A tip suggestion has been retracted. \[tip_hash\]
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    value: Hash
}

/**
 *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    value: [Hash, AccountId, Balance]
}

export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 *  Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 *  One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 *  The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 *  The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 *  The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 *  Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: Hash
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [Hash, MemberCount, MemberCount]
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: Hash
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [Hash, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Hash, DispatchResult]
}

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId, ProposalIndex, Hash, MemberCount]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [AccountId, Hash, boolean, MemberCount, MemberCount]
}

export type DispatchResult = Result<null, DispatchError>

export type MemberCount = number

export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount | SystemEvent_Remarked

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: AccountId
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: AccountId
}

/**
 *  On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    value: [AccountId, Hash]
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

export type Weight = bigint

export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 *  The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    value: AccountId
}

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    value: DispatchResult
}

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    value: DispatchResult
}

export type StakingEvent = StakingEvent_Bonded | StakingEvent_EraPayout | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_Reward | StakingEvent_Slash | StakingEvent_StakingElection | StakingEvent_Unbonded | StakingEvent_Withdrawn

/**
 *  An account has bonded this amount. \[stash, amount\]
 * 
 *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 *  it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [AccountId, Balance]
}

/**
 *  The era payout has been set; the first balance is the validator-payout; the second is
 *  the remainder from the maximum amount of reward.
 *  \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPayout {
    __kind: 'EraPayout'
    value: [EraIndex, Balance, Balance]
}

/**
 *  A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [AccountId, AccountId]
}

/**
 *  An old slashing report from a prior era was discarded because it could
 *  not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: SessionIndex
}

/**
 *  The staker has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Reward {
    __kind: 'Reward'
    value: [AccountId, Balance]
}

/**
 *  One validator (and its nominators) has been slashed by the given amount.
 *  \[validator, amount\]
 */
export interface StakingEvent_Slash {
    __kind: 'Slash'
    value: [AccountId, Balance]
}

/**
 *  A new set of stakers was elected.
 */
export interface StakingEvent_StakingElection {
    __kind: 'StakingElection'
}

/**
 *  An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [AccountId, Balance]
}

/**
 *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 *  from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId, Balance]
}

export type SessionIndex = number

export type EraIndex = number

export type SocietyEvent = SocietyEvent_AutoUnbid | SocietyEvent_Bid | SocietyEvent_CandidateSuspended | SocietyEvent_Challenged | SocietyEvent_DefenderVote | SocietyEvent_Deposit | SocietyEvent_Founded | SocietyEvent_Inducted | SocietyEvent_MemberSuspended | SocietyEvent_NewMaxMembers | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_Unbid | SocietyEvent_Unfounded | SocietyEvent_Unvouch | SocietyEvent_Vote | SocietyEvent_Vouch

/**
 *  A \[candidate\] was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    value: AccountId
}

/**
 *  A membership bid just happened. The given account is the candidate's ID and their offer
 *  is the second. \[candidate_id, offer\]
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    value: [AccountId, Balance]
}

/**
 *  A \[candidate\] has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    value: AccountId
}

/**
 *  A \[member\] has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    value: AccountId
}

/**
 *  A vote has been placed for a defending member \[voter, vote\]
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    value: [AccountId, boolean]
}

/**
 *  Some funds were deposited into the society account. \[value\]
 */
export interface SocietyEvent_Deposit {
    __kind: 'Deposit'
    value: Balance
}

/**
 *  The society is founded by the given identity. \[founder\]
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    value: AccountId
}

/**
 *  A group of candidates have been inducted. The batch's primary is the first value, the
 *  batch in full is the second. \[primary, candidates\]
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    value: [AccountId, AccountId[]]
}

/**
 *  A \[member\] has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    value: AccountId
}

/**
 *  A new \[max\] member count has been set
 */
export interface SocietyEvent_NewMaxMembers {
    __kind: 'NewMaxMembers'
    value: number
}

/**
 *  A suspended member has been judged. \[who, judged\]
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    value: [AccountId, boolean]
}

/**
 *  A \[candidate\] was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    value: AccountId
}

/**
 *  Society is unfounded. \[founder\]
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    value: AccountId
}

/**
 *  A \[candidate\] was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    value: AccountId
}

/**
 *  A vote has been placed \[candidate, voter, vote\]
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    value: [AccountId, AccountId, boolean]
}

/**
 *  A membership bid just happened by vouching. The given account is the candidate's ID and
 *  their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\]
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    value: [AccountId, Balance, AccountId]
}

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the \[session_index\], not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: SessionIndex
}

export type SchedulerEvent = SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_Scheduled

/**
 *  Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [BlockNumber, number]
}

/**
 *  Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [TaskAddress, (Bytes | undefined), DispatchResult]
}

/**
 *  Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [BlockNumber, number]
}

export type TaskAddress = [BlockNumber, number]

export type BlockNumber = number

export type RecoveryEvent = RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryClosed | RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryRemoved | RecoveryEvent_RecoveryVouched

/**
 *  Lost account has been successfully recovered by rescuer account.
 *  \[lost, rescuer\]
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    value: [AccountId, AccountId]
}

/**
 *  A recovery process for lost account by rescuer account has been closed.
 *  \[lost, rescuer\]
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    value: [AccountId, AccountId]
}

/**
 *  A recovery process has been set up for an \[account\].
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    value: AccountId
}

/**
 *  A recovery process has been initiated for lost account by rescuer account.
 *  \[lost, rescuer\]
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    value: [AccountId, AccountId]
}

/**
 *  A recovery process has been removed for an \[account\].
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    value: AccountId
}

/**
 *  A recovery process for lost account by rescuer account has been vouched for by sender.
 *  \[lost, rescuer, sender\]
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    value: [AccountId, AccountId, AccountId]
}

export type ProxyEvent = ProxyEvent_Announced | ProxyEvent_AnonymousCreated | ProxyEvent_ProxyExecuted

/**
 *  An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    value: [AccountId, AccountId, Hash]
}

/**
 *  Anonymous account has been created by new proxy with given
 *  disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    value: [AccountId, AccountId, ProxyType, number]
}

/**
 *  A proxy was executed correctly, with the given \[result\].
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    value: DispatchResult
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

export type OffencesEvent = OffencesEvent_Offence

/**
 *  There is an offence reported of the given `kind` happened at the `session_index` and
 *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
 *  element indicates of the offence was applied (true) or queued (false)
 *  \[kind, timeslot, applied\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    value: [Kind, OpaqueTimeSlot, boolean]
}

export type OpaqueTimeSlot = Bytes

export type Kind = Bytes

export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 *  A multisig operation has been approved by someone.
 *  \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId, Timepoint, AccountId, CallHash]
}

/**
 *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId, Timepoint, AccountId, CallHash]
}

/**
 *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId, Timepoint, AccountId, CallHash, DispatchResult]
}

/**
 *  A new multisig operation has begun. \[approving, multisig, call_hash\]
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId, AccountId, CallHash]
}

export type CallHash = Bytes

export interface Timepoint {
    height: BlockNumber
    index: number
}

export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 *  A account index was assigned. \[index, who\]
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    value: [AccountId, AccountIndex]
}

/**
 *  A account index has been freed up (unassigned). \[index\]
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    value: AccountIndex
}

/**
 *  A account index has been frozen to its current account ID. \[index, who\]
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    value: [AccountIndex, AccountId]
}

export type AccountIndex = number

export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 *  At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 *  A new heartbeat was received from `AuthorityId` \[authority_id\]
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: AuthorityId
}

/**
 *  At the end of the session, at least one validator was found to be \[offline\].
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: IdentificationTuple[]
}

export type IdentificationTuple = [ValidatorId, FullIdentification]

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId
    value: bigint
}

export type ValidatorId = Bytes

export type AuthorityId = Bytes

export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 *  A name was cleared, and the given balance returned. \[who, deposit\]
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [AccountId, Balance]
}

/**
 *  A name was removed and the given balance slashed. \[who, deposit\]
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [AccountId, Balance]
}

/**
 *  A name was set or reset (which will remove all judgements). \[who\]
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: AccountId
}

/**
 *  A judgement was given by a registrar. \[target, registrar_index\]
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A judgement was asked from a registrar. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A judgement request was retracted. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A registrar was added. \[registrar_index\]
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: RegistrarIndex
}

/**
 *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    value: [AccountId, AccountId, Balance]
}

/**
 *  A sub-identity was removed from an identity and the deposit freed.
 *  \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    value: [AccountId, AccountId, Balance]
}

/**
 *  A sub-identity was cleared, and the given deposit repatriated from the
 *  main identity account to the sub-identity account. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    value: [AccountId, AccountId, Balance]
}

export type RegistrarIndex = number

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: NextAuthority[]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type NextAuthority = [AuthorityId, AuthorityWeight]

export type AuthorityWeight = bigint

export type Erc721Event = Erc721Event_Burned | Erc721Event_Minted | Erc721Event_Transferred

/**
 *  Token removed from the system
 */
export interface Erc721Event_Burned {
    __kind: 'Burned'
    value: TokenId
}

/**
 *  New token created
 */
export interface Erc721Event_Minted {
    __kind: 'Minted'
    value: [AccountId, TokenId]
}

/**
 *  Token transfer between two parties
 */
export interface Erc721Event_Transferred {
    __kind: 'Transferred'
    value: [AccountId, AccountId, TokenId]
}

export type TokenId = bigint

export type Erc20Event = Erc20Event_Remark

export interface Erc20Event_Remark {
    __kind: 'Remark'
    value: Hash
}

export type ElectionsEvent = ElectionsEvent_CandidateSlashed | ElectionsEvent_ElectionError | ElectionsEvent_EmptyTerm | ElectionsEvent_MemberKicked | ElectionsEvent_NewTerm | ElectionsEvent_Renounced | ElectionsEvent_SeatHolderSlashed

/**
 *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 *  runner-up.
 * 
 *  Note that old members and runners-up are also candidates.
 */
export interface ElectionsEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: [AccountId, Balance]
}

/**
 *  Internal error happened while trying to perform election.
 */
export interface ElectionsEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 *  No (or not enough) candidates existed for this round. This is different from
 *  `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
 *  `EmptyTerm`.
 */
export interface ElectionsEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: AccountId
}

/**
 *  A new term with \[new_members\]. This indicates that enough candidates existed to run the
 *  election, not that enough have has been elected. The inner value must be examined for
 *  this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
 *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
 */
export interface ElectionsEvent_NewTerm {
    __kind: 'NewTerm'
    value: [AccountId, Balance][]
}

/**
 *  Someone has renounced their candidacy.
 */
export interface ElectionsEvent_Renounced {
    __kind: 'Renounced'
    value: AccountId
}

/**
 *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface ElectionsEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    value: [AccountId, Balance]
}

export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 *  The election has been finalized, with `Some` of the given computation, or else if the
 *  election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    value?: (ElectionCompute | undefined)
}

/**
 *  An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    value: AccountId
}

/**
 *  The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    value: number
}

/**
 *  An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    value: AccountId
}

/**
 *  A solution was stored with the given compute.
 * 
 *  If the solution is signed, this means that it hasn't yet been processed. If the
 *  solution is unsigned, this means that it has also been processed.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    value: ElectionCompute
}

/**
 *  The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    value: number
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_Proposed | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Unlocked | DemocracyEvent_Vetoed

/**
 *  A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: Hash
}

/**
 *  A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: ReferendumIndex
}

/**
 *  An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId, AccountId]
}

/**
 *  A proposal has been enacted. \[ref_index, is_ok\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [ReferendumIndex, boolean]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: ReferendumIndex
}

/**
 *  A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: ReferendumIndex
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Hash, ReferendumIndex]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Hash, ReferendumIndex]
}

/**
 *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Hash, AccountId, Balance]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper.
 *  \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Hash, AccountId, Balance, AccountId]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 *  \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Hash, AccountId, Balance]
}

/**
 *  A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [PropIndex, Balance]
}

/**
 *  A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [ReferendumIndex, VoteThreshold]
}

/**
 *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [PropIndex, Balance, AccountId[]]
}

/**
 *  An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId
}

/**
 *  An \[account\] has been unlocked successfully.
 */
export interface DemocracyEvent_Unlocked {
    __kind: 'Unlocked'
    value: AccountId
}

/**
 *  An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [AccountId, Hash, BlockNumber]
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

export type PropIndex = number

export type ReferendumIndex = number

export type DdcMetricsOffchainWorkerEvent = DdcMetricsOffchainWorkerEvent_NewDdcMetric

export interface DdcMetricsOffchainWorkerEvent_NewDdcMetric {
    __kind: 'NewDdcMetric'
    value: [AccountId, Bytes]
}

export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: Hash
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [Hash, MemberCount, MemberCount]
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: Hash
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [Hash, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Hash, DispatchResult]
}

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId, ProposalIndex, Hash, MemberCount]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [AccountId, Hash, boolean, MemberCount, MemberCount]
}

export type ContractsEvent = ContractsEvent_CodeRemoved | ContractsEvent_CodeStored | ContractsEvent_ContractEmitted | ContractsEvent_Evicted | ContractsEvent_Instantiated | ContractsEvent_Restored | ContractsEvent_ScheduleUpdated | ContractsEvent_Terminated

/**
 *  A code with the specified hash was removed.
 *  \[code_hash\]
 * 
 *  This happens when the last contract that uses this code hash was removed or evicted.
 */
export interface ContractsEvent_CodeRemoved {
    __kind: 'CodeRemoved'
    value: Hash
}

/**
 *  Code with the specified hash has been stored. \[code_hash\]
 */
export interface ContractsEvent_CodeStored {
    __kind: 'CodeStored'
    value: Hash
}

/**
 *  A custom event emitted by the contract.
 *  \[contract, data\]
 * 
 *  # Params
 * 
 *  - `contract`: The contract that emitted the event.
 *  - `data`: Data supplied by the contract. Metadata generated during contract
 *            compilation is needed to decode it.
 */
export interface ContractsEvent_ContractEmitted {
    __kind: 'ContractEmitted'
    value: [AccountId, Bytes]
}

/**
 *  Contract has been evicted and is now in tombstone state. \[contract\]
 */
export interface ContractsEvent_Evicted {
    __kind: 'Evicted'
    value: AccountId
}

/**
 *  Contract deployed by address at the specified address. \[deployer, contract\]
 */
export interface ContractsEvent_Instantiated {
    __kind: 'Instantiated'
    value: [AccountId, AccountId]
}

/**
 *  Restoration of a contract has been successful.
 *  \[restorer, dest, code_hash, rent_allowance\]
 * 
 *  # Params
 * 
 *  - `restorer`: Account ID of the restoring contract.
 *  - `dest`: Account ID of the restored contract.
 *  - `code_hash`: Code hash of the restored contract.
 *  - `rent_allowance`: Rent allowance of the restored contract.
 */
export interface ContractsEvent_Restored {
    __kind: 'Restored'
    value: [AccountId, AccountId, Hash, Balance]
}

/**
 *  Triggered when the current schedule is updated.
 *  \[version\]
 * 
 *  # Params
 * 
 *  - `version`: The version of the newly set schedule.
 */
export interface ContractsEvent_ScheduleUpdated {
    __kind: 'ScheduleUpdated'
    value: number
}

/**
 *  Contract has been terminated without leaving a tombstone.
 *  \[contract, beneficiary\]
 * 
 *  # Params
 * 
 *  - `contract`: The contract that was terminated.
 *  - `beneficiary`: The account that received the contracts remaining balance.
 * 
 *  # Note
 * 
 *  The only way for a contract to be removed without a tombstone and emitting
 *  this event is by calling `seal_terminate`.
 */
export interface ContractsEvent_Terminated {
    __kind: 'Terminated'
    value: [AccountId, AccountId]
}

export type ChainBridgeEvent = ChainBridgeEvent_ChainWhitelisted | ChainBridgeEvent_FungibleTransfer | ChainBridgeEvent_GenericTransfer | ChainBridgeEvent_NonFungibleTransfer | ChainBridgeEvent_ProposalApproved | ChainBridgeEvent_ProposalFailed | ChainBridgeEvent_ProposalRejected | ChainBridgeEvent_ProposalSucceeded | ChainBridgeEvent_RelayerAdded | ChainBridgeEvent_RelayerRemoved | ChainBridgeEvent_RelayerThresholdChanged | ChainBridgeEvent_VoteAgainst | ChainBridgeEvent_VoteFor

/**
 *  Chain now available for transfers (chain_id)
 */
export interface ChainBridgeEvent_ChainWhitelisted {
    __kind: 'ChainWhitelisted'
    value: ChainId
}

/**
 *  FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient, metadata)
 */
export interface ChainBridgeEvent_FungibleTransfer {
    __kind: 'FungibleTransfer'
    value: [ChainId, DepositNonce, ResourceId, bigint, Bytes]
}

/**
 *  GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
 */
export interface ChainBridgeEvent_GenericTransfer {
    __kind: 'GenericTransfer'
    value: [ChainId, DepositNonce, ResourceId, Bytes]
}

/**
 *  NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id, recipient, metadata)
 */
export interface ChainBridgeEvent_NonFungibleTransfer {
    __kind: 'NonFungibleTransfer'
    value: [ChainId, DepositNonce, ResourceId, Bytes, Bytes, Bytes]
}

/**
 *  Voting successful for a proposal
 */
export interface ChainBridgeEvent_ProposalApproved {
    __kind: 'ProposalApproved'
    value: [ChainId, DepositNonce]
}

/**
 *  Execution of call failed
 */
export interface ChainBridgeEvent_ProposalFailed {
    __kind: 'ProposalFailed'
    value: [ChainId, DepositNonce]
}

/**
 *  Voting rejected a proposal
 */
export interface ChainBridgeEvent_ProposalRejected {
    __kind: 'ProposalRejected'
    value: [ChainId, DepositNonce]
}

/**
 *  Execution of call succeeded
 */
export interface ChainBridgeEvent_ProposalSucceeded {
    __kind: 'ProposalSucceeded'
    value: [ChainId, DepositNonce]
}

/**
 *  Relayer added to set
 */
export interface ChainBridgeEvent_RelayerAdded {
    __kind: 'RelayerAdded'
    value: AccountId
}

/**
 *  Relayer removed from set
 */
export interface ChainBridgeEvent_RelayerRemoved {
    __kind: 'RelayerRemoved'
    value: AccountId
}

/**
 *  Vote threshold has changed (new_threshold)
 */
export interface ChainBridgeEvent_RelayerThresholdChanged {
    __kind: 'RelayerThresholdChanged'
    value: number
}

/**
 *  Vot submitted against proposal
 */
export interface ChainBridgeEvent_VoteAgainst {
    __kind: 'VoteAgainst'
    value: [ChainId, DepositNonce, AccountId]
}

/**
 *  Vote submitted in favour of proposal
 */
export interface ChainBridgeEvent_VoteFor {
    __kind: 'VoteFor'
    value: [ChainId, DepositNonce, AccountId]
}

export type ResourceId = Bytes

export type DepositNonce = bigint

export type ChainId = number

export type CereDDCModuleEvent = CereDDCModuleEvent_DataStringChanged | CereDDCModuleEvent_DataStringSet

/**
 *  A data string was changed. \[who\]
 */
export interface CereDDCModuleEvent_DataStringChanged {
    __kind: 'DataStringChanged'
    value: AccountId
}

/**
 *  A data string was set. \[who\]
 */
export interface CereDDCModuleEvent_DataStringSet {
    __kind: 'DataStringSet'
    value: AccountId
}

export type BountiesEvent = BountiesEvent_BountyAwarded | BountiesEvent_BountyBecameActive | BountiesEvent_BountyCanceled | BountiesEvent_BountyClaimed | BountiesEvent_BountyExtended | BountiesEvent_BountyProposed | BountiesEvent_BountyRejected

/**
 *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    value: [BountyIndex, AccountId]
}

/**
 *  A bounty proposal is funded and became active. \[index\]
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    value: BountyIndex
}

/**
 *  A bounty is cancelled. \[index\]
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    value: BountyIndex
}

/**
 *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    value: [BountyIndex, Balance, AccountId]
}

/**
 *  A bounty expiry is extended. \[index\]
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    value: BountyIndex
}

/**
 *  New bounty proposal. \[index\]
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    value: BountyIndex
}

/**
 *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    value: [BountyIndex, Balance]
}

export type BountyIndex = number

export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Transfer | BalancesEvent_Unreserved

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [AccountId, Balance, Balance]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [AccountId, Balance]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [AccountId, Balance]
}

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [AccountId, Balance]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [AccountId, AccountId, Balance, BalanceStatus]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [AccountId, Balance]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId, AccountId, Balance]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [AccountId, Balance]
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
        event: Type_370,
        topics: sts.array(() => Hash),
    }
})

export const Hash = sts.bytes()

export const Type_370: sts.Type<Type_370> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        Bounties: BountiesEvent,
        CereDDCModule: CereDDCModuleEvent,
        ChainBridge: ChainBridgeEvent,
        Contracts: ContractsEvent,
        Council: CouncilEvent,
        DdcMetricsOffchainWorker: DdcMetricsOffchainWorkerEvent,
        Democracy: DemocracyEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        Elections: ElectionsEvent,
        Erc20: Erc20Event,
        Erc721: Erc721Event,
        Grandpa: GrandpaEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Indices: IndicesEvent,
        Multisig: MultisigEvent,
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
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
        Vesting: VestingEvent,
    }
})

export const VestingEvent: sts.Type<VestingEvent> = sts.closedEnum(() => {
    return  {
        VestingCompleted: AccountId,
        VestingUpdated: sts.tuple(() => [AccountId, Balance]),
    }
})

export const Balance = sts.bigint()

export const AccountId = sts.bytes()

export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchInterrupted: sts.tuple(() => [sts.number(), DispatchError]),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: DispatchErrorModule,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
        UnknownAsset: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export const DispatchErrorModule: sts.Type<DispatchErrorModule> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return  {
        Awarded: sts.tuple(() => [ProposalIndex, Balance, AccountId]),
        Burnt: Balance,
        Deposit: Balance,
        Proposed: ProposalIndex,
        Rejected: sts.tuple(() => [ProposalIndex, Balance]),
        Rollover: Balance,
        Spending: Balance,
    }
})

export const ProposalIndex = sts.number()

export const TipsEvent: sts.Type<TipsEvent> = sts.closedEnum(() => {
    return  {
        NewTip: Hash,
        TipClosed: sts.tuple(() => [Hash, AccountId, Balance]),
        TipClosing: Hash,
        TipRetracted: Hash,
        TipSlashed: sts.tuple(() => [Hash, AccountId, Balance]),
    }
})

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

export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: Hash,
        Closed: sts.tuple(() => [Hash, MemberCount, MemberCount]),
        Disapproved: Hash,
        Executed: sts.tuple(() => [Hash, DispatchResult]),
        MemberExecuted: sts.tuple(() => [Hash, DispatchResult]),
        Proposed: sts.tuple(() => [AccountId, ProposalIndex, Hash, MemberCount]),
        Voted: sts.tuple(() => [AccountId, Hash, sts.boolean(), MemberCount, MemberCount]),
    }
})

export const DispatchResult = sts.result(() => sts.unit(), () => DispatchError)

export const MemberCount = sts.number()

export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.tuple(() => [DispatchError, DispatchInfo]),
        ExtrinsicSuccess: DispatchInfo,
        KilledAccount: AccountId,
        NewAccount: AccountId,
        Remarked: sts.tuple(() => [AccountId, Hash]),
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

export const Weight = sts.bigint()

export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: AccountId,
        Sudid: DispatchResult,
        SudoAsDone: DispatchResult,
    }
})

export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.tuple(() => [AccountId, Balance]),
        EraPayout: sts.tuple(() => [EraIndex, Balance, Balance]),
        Kicked: sts.tuple(() => [AccountId, AccountId]),
        OldSlashingReportDiscarded: SessionIndex,
        Reward: sts.tuple(() => [AccountId, Balance]),
        Slash: sts.tuple(() => [AccountId, Balance]),
        StakingElection: sts.unit(),
        Unbonded: sts.tuple(() => [AccountId, Balance]),
        Withdrawn: sts.tuple(() => [AccountId, Balance]),
    }
})

export const SessionIndex = sts.number()

export const EraIndex = sts.number()

export const SocietyEvent: sts.Type<SocietyEvent> = sts.closedEnum(() => {
    return  {
        AutoUnbid: AccountId,
        Bid: sts.tuple(() => [AccountId, Balance]),
        CandidateSuspended: AccountId,
        Challenged: AccountId,
        DefenderVote: sts.tuple(() => [AccountId, sts.boolean()]),
        Deposit: Balance,
        Founded: AccountId,
        Inducted: sts.tuple(() => [AccountId, sts.array(() => AccountId)]),
        MemberSuspended: AccountId,
        NewMaxMembers: sts.number(),
        SuspendedMemberJudgement: sts.tuple(() => [AccountId, sts.boolean()]),
        Unbid: AccountId,
        Unfounded: AccountId,
        Unvouch: AccountId,
        Vote: sts.tuple(() => [AccountId, AccountId, sts.boolean()]),
        Vouch: sts.tuple(() => [AccountId, Balance, AccountId]),
    }
})

export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: SessionIndex,
    }
})

export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        Canceled: sts.tuple(() => [BlockNumber, sts.number()]),
        Dispatched: sts.tuple(() => [TaskAddress, sts.option(() => sts.bytes()), DispatchResult]),
        Scheduled: sts.tuple(() => [BlockNumber, sts.number()]),
    }
})

export const TaskAddress = sts.tuple(() => [BlockNumber, sts.number()])

export const BlockNumber = sts.number()

export const RecoveryEvent: sts.Type<RecoveryEvent> = sts.closedEnum(() => {
    return  {
        AccountRecovered: sts.tuple(() => [AccountId, AccountId]),
        RecoveryClosed: sts.tuple(() => [AccountId, AccountId]),
        RecoveryCreated: AccountId,
        RecoveryInitiated: sts.tuple(() => [AccountId, AccountId]),
        RecoveryRemoved: AccountId,
        RecoveryVouched: sts.tuple(() => [AccountId, AccountId, AccountId]),
    }
})

export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return  {
        Announced: sts.tuple(() => [AccountId, AccountId, Hash]),
        AnonymousCreated: sts.tuple(() => [AccountId, AccountId, ProxyType, sts.number()]),
        ProxyExecuted: DispatchResult,
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

export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.tuple(() => [Kind, OpaqueTimeSlot, sts.boolean()]),
    }
})

export const OpaqueTimeSlot = sts.bytes()

export const Kind = sts.bytes()

export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.tuple(() => [AccountId, Timepoint, AccountId, CallHash]),
        MultisigCancelled: sts.tuple(() => [AccountId, Timepoint, AccountId, CallHash]),
        MultisigExecuted: sts.tuple(() => [AccountId, Timepoint, AccountId, CallHash, DispatchResult]),
        NewMultisig: sts.tuple(() => [AccountId, AccountId, CallHash]),
    }
})

export const CallHash = sts.bytes()

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: BlockNumber,
        index: sts.number(),
    }
})

export const IndicesEvent: sts.Type<IndicesEvent> = sts.closedEnum(() => {
    return  {
        IndexAssigned: sts.tuple(() => [AccountId, AccountIndex]),
        IndexFreed: AccountIndex,
        IndexFrozen: sts.tuple(() => [AccountIndex, AccountId]),
    }
})

export const AccountIndex = sts.number()

export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: AuthorityId,
        SomeOffline: sts.array(() => IdentificationTuple),
    }
})

export const IdentificationTuple = sts.tuple(() => [ValidatorId, FullIdentification])

export const FullIdentification: sts.Type<FullIdentification> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId,
        value: sts.bigint(),
    }
})

export const ValidatorId = sts.bytes()

export const AuthorityId = sts.bytes()

export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.tuple(() => [AccountId, Balance]),
        IdentityKilled: sts.tuple(() => [AccountId, Balance]),
        IdentitySet: AccountId,
        JudgementGiven: sts.tuple(() => [AccountId, RegistrarIndex]),
        JudgementRequested: sts.tuple(() => [AccountId, RegistrarIndex]),
        JudgementUnrequested: sts.tuple(() => [AccountId, RegistrarIndex]),
        RegistrarAdded: RegistrarIndex,
        SubIdentityAdded: sts.tuple(() => [AccountId, AccountId, Balance]),
        SubIdentityRemoved: sts.tuple(() => [AccountId, AccountId, Balance]),
        SubIdentityRevoked: sts.tuple(() => [AccountId, AccountId, Balance]),
    }
})

export const RegistrarIndex = sts.number()

export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.array(() => NextAuthority),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const NextAuthority = sts.tuple(() => [AuthorityId, AuthorityWeight])

export const AuthorityWeight = sts.bigint()

export const Erc721Event: sts.Type<Erc721Event> = sts.closedEnum(() => {
    return  {
        Burned: TokenId,
        Minted: sts.tuple(() => [AccountId, TokenId]),
        Transferred: sts.tuple(() => [AccountId, AccountId, TokenId]),
    }
})

export const TokenId = sts.bigint()

export const Erc20Event: sts.Type<Erc20Event> = sts.closedEnum(() => {
    return  {
        Remark: Hash,
    }
})

export const ElectionsEvent: sts.Type<ElectionsEvent> = sts.closedEnum(() => {
    return  {
        CandidateSlashed: sts.tuple(() => [AccountId, Balance]),
        ElectionError: sts.unit(),
        EmptyTerm: sts.unit(),
        MemberKicked: AccountId,
        NewTerm: sts.array(() => sts.tuple(() => [AccountId, Balance])),
        Renounced: AccountId,
        SeatHolderSlashed: sts.tuple(() => [AccountId, Balance]),
    }
})

export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFinalized: sts.option(() => ElectionCompute),
        Rewarded: AccountId,
        SignedPhaseStarted: sts.number(),
        Slashed: AccountId,
        SolutionStored: ElectionCompute,
        UnsignedPhaseStarted: sts.number(),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: Hash,
        Cancelled: ReferendumIndex,
        Delegated: sts.tuple(() => [AccountId, AccountId]),
        Executed: sts.tuple(() => [ReferendumIndex, sts.boolean()]),
        ExternalTabled: sts.unit(),
        NotPassed: ReferendumIndex,
        Passed: ReferendumIndex,
        PreimageInvalid: sts.tuple(() => [Hash, ReferendumIndex]),
        PreimageMissing: sts.tuple(() => [Hash, ReferendumIndex]),
        PreimageNoted: sts.tuple(() => [Hash, AccountId, Balance]),
        PreimageReaped: sts.tuple(() => [Hash, AccountId, Balance, AccountId]),
        PreimageUsed: sts.tuple(() => [Hash, AccountId, Balance]),
        Proposed: sts.tuple(() => [PropIndex, Balance]),
        Started: sts.tuple(() => [ReferendumIndex, VoteThreshold]),
        Tabled: sts.tuple(() => [PropIndex, Balance, sts.array(() => AccountId)]),
        Undelegated: AccountId,
        Unlocked: AccountId,
        Vetoed: sts.tuple(() => [AccountId, Hash, BlockNumber]),
    }
})

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const PropIndex = sts.number()

export const ReferendumIndex = sts.number()

export const DdcMetricsOffchainWorkerEvent: sts.Type<DdcMetricsOffchainWorkerEvent> = sts.closedEnum(() => {
    return  {
        NewDdcMetric: sts.tuple(() => [AccountId, sts.bytes()]),
    }
})

export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: Hash,
        Closed: sts.tuple(() => [Hash, MemberCount, MemberCount]),
        Disapproved: Hash,
        Executed: sts.tuple(() => [Hash, DispatchResult]),
        MemberExecuted: sts.tuple(() => [Hash, DispatchResult]),
        Proposed: sts.tuple(() => [AccountId, ProposalIndex, Hash, MemberCount]),
        Voted: sts.tuple(() => [AccountId, Hash, sts.boolean(), MemberCount, MemberCount]),
    }
})

export const ContractsEvent: sts.Type<ContractsEvent> = sts.closedEnum(() => {
    return  {
        CodeRemoved: Hash,
        CodeStored: Hash,
        ContractEmitted: sts.tuple(() => [AccountId, sts.bytes()]),
        Evicted: AccountId,
        Instantiated: sts.tuple(() => [AccountId, AccountId]),
        Restored: sts.tuple(() => [AccountId, AccountId, Hash, Balance]),
        ScheduleUpdated: sts.number(),
        Terminated: sts.tuple(() => [AccountId, AccountId]),
    }
})

export const ChainBridgeEvent: sts.Type<ChainBridgeEvent> = sts.closedEnum(() => {
    return  {
        ChainWhitelisted: ChainId,
        FungibleTransfer: sts.tuple(() => [ChainId, DepositNonce, ResourceId, sts.bigint(), sts.bytes()]),
        GenericTransfer: sts.tuple(() => [ChainId, DepositNonce, ResourceId, sts.bytes()]),
        NonFungibleTransfer: sts.tuple(() => [ChainId, DepositNonce, ResourceId, sts.bytes(), sts.bytes(), sts.bytes()]),
        ProposalApproved: sts.tuple(() => [ChainId, DepositNonce]),
        ProposalFailed: sts.tuple(() => [ChainId, DepositNonce]),
        ProposalRejected: sts.tuple(() => [ChainId, DepositNonce]),
        ProposalSucceeded: sts.tuple(() => [ChainId, DepositNonce]),
        RelayerAdded: AccountId,
        RelayerRemoved: AccountId,
        RelayerThresholdChanged: sts.number(),
        VoteAgainst: sts.tuple(() => [ChainId, DepositNonce, AccountId]),
        VoteFor: sts.tuple(() => [ChainId, DepositNonce, AccountId]),
    }
})

export const ResourceId = sts.bytes()

export const DepositNonce = sts.bigint()

export const ChainId = sts.number()

export const CereDDCModuleEvent: sts.Type<CereDDCModuleEvent> = sts.closedEnum(() => {
    return  {
        DataStringChanged: AccountId,
        DataStringSet: AccountId,
    }
})

export const BountiesEvent: sts.Type<BountiesEvent> = sts.closedEnum(() => {
    return  {
        BountyAwarded: sts.tuple(() => [BountyIndex, AccountId]),
        BountyBecameActive: BountyIndex,
        BountyCanceled: BountyIndex,
        BountyClaimed: sts.tuple(() => [BountyIndex, Balance, AccountId]),
        BountyExtended: BountyIndex,
        BountyProposed: BountyIndex,
        BountyRejected: sts.tuple(() => [BountyIndex, Balance]),
    }
})

export const BountyIndex = sts.number()

export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.tuple(() => [AccountId, Balance, Balance]),
        Deposit: sts.tuple(() => [AccountId, Balance]),
        DustLost: sts.tuple(() => [AccountId, Balance]),
        Endowed: sts.tuple(() => [AccountId, Balance]),
        ReserveRepatriated: sts.tuple(() => [AccountId, AccountId, Balance, BalanceStatus]),
        Reserved: sts.tuple(() => [AccountId, Balance]),
        Transfer: sts.tuple(() => [AccountId, AccountId, Balance]),
        Unreserved: sts.tuple(() => [AccountId, Balance]),
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
