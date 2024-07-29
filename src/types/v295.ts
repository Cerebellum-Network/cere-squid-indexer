import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type H256 = Bytes

export type Event = Event_BagsList | Event_Balances | Event_Bounties | Event_CereDDCModule | Event_ChainBridge | Event_Contracts | Event_Council | Event_DdcMetricsOffchainWorker | Event_Democracy | Event_ElectionProviderMultiPhase | Event_Elections | Event_Erc20 | Event_Erc721 | Event_Grandpa | Event_Identity | Event_ImOnline | Event_Indices | Event_Multisig | Event_Offences | Event_Proxy | Event_Recovery | Event_Scheduler | Event_Session | Event_Society | Event_Staking | Event_Sudo | Event_System | Event_TechnicalCommittee | Event_TechnicalMembership | Event_Tips | Event_Treasury | Event_Utility | Event_Vesting

export interface Event_BagsList {
    __kind: 'BagsList'
    value: BagsListEvent
}

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

export interface Event_Contracts {
    __kind: 'Contracts'
    value: ContractsEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_DdcMetricsOffchainWorker {
    __kind: 'DdcMetricsOffchainWorker'
    value: DdcMetricsOffchainWorkerEvent
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

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingCompleted | VestingEvent_VestingUpdated

/**
 * An \[account\] has become fully vested.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    value: AccountId32
}

/**
 * The amount vested has been updated. This could indicate a change in funds available.
 * The balance given is the amount which is left unvested (and thus locked).
 * \[account, unvested\]
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchInterrupted | UtilityEvent_ItemCompleted

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
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
    index: number
    error: number
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_Spending

/**
 * Some funds have been allocated. \[proposal_index, award, beneficiary\]
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [number, bigint, AccountId32]
}

/**
 * Some of our funds have been burnt. \[burn\]
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: bigint
}

/**
 * Some funds have been deposited. \[deposit\]
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * New proposal. \[proposal_index\]
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: number
}

/**
 * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [number, bigint]
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 * \[budget_remaining\]
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: bigint
}

/**
 * We have ended a spend period and will now allocate funds. \[budget_remaining\]
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: bigint
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosed | TipsEvent_TipClosing | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened. \[tip_hash\]
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    value: H256
}

/**
 * A tip suggestion has been closed. \[tip_hash, who, payout\]
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    value: [H256, AccountId32, bigint]
}

/**
 * A tip suggestion has reached threshold and is closing. \[tip_hash\]
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    value: H256
}

/**
 * A tip suggestion has been retracted. \[tip_hash\]
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    value: H256
}

/**
 * A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    value: [H256, AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 * A motion was approved by the required threshold.
 * \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 * \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [H256, number, number]
}

/**
 * A motion was not approved by the required threshold.
 * \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 * \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId32, number, H256, number]
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 * \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [AccountId32, H256, boolean, number, number]
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
 * An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 * An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 * An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: AccountId32
}

/**
 * A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: AccountId32
}

/**
 * On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    value: [AccountId32, H256]
}

export interface DispatchInfo {
    weight: bigint
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

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    value: AccountId32
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    value: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    value: Result<null, DispatchError>
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [AccountId32, bigint]
}

/**
 * An account has stopped participating as either a validator or nominator.
 * \[stash\]
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    value: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 * \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    value: [number, bigint, bigint]
}

/**
 * A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [AccountId32, AccountId32]
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 * The stakers' rewards are getting paid. \[era_index, validator_stash\]
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    value: [number, AccountId32]
}

/**
 * The nominator has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [AccountId32, bigint]
}

/**
 * One validator (and its nominators) has been slashed by the given amount.
 * \[validator, amount\]
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    value: [AccountId32, bigint]
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
 * An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [AccountId32, bigint]
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type SocietyEvent = SocietyEvent_AutoUnbid | SocietyEvent_Bid | SocietyEvent_CandidateSuspended | SocietyEvent_Challenged | SocietyEvent_DefenderVote | SocietyEvent_Deposit | SocietyEvent_Founded | SocietyEvent_Inducted | SocietyEvent_MemberSuspended | SocietyEvent_NewMaxMembers | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_Unbid | SocietyEvent_Unfounded | SocietyEvent_Unvouch | SocietyEvent_Vote | SocietyEvent_Vouch

/**
 * A \[candidate\] was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    value: AccountId32
}

/**
 * A membership bid just happened. The given account is the candidate's ID and their offer
 * is the second. \[candidate_id, offer\]
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    value: [AccountId32, bigint]
}

/**
 * A \[candidate\] has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    value: AccountId32
}

/**
 * A \[member\] has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    value: AccountId32
}

/**
 * A vote has been placed for a defending member \[voter, vote\]
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    value: [AccountId32, boolean]
}

/**
 * Some funds were deposited into the society account. \[value\]
 */
export interface SocietyEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * The society is founded by the given identity. \[founder\]
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    value: AccountId32
}

/**
 * A group of candidates have been inducted. The batch's primary is the first value, the
 * batch in full is the second. \[primary, candidates\]
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    value: [AccountId32, AccountId32[]]
}

/**
 * A \[member\] has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    value: AccountId32
}

/**
 * A new \[max\] member count has been set
 */
export interface SocietyEvent_NewMaxMembers {
    __kind: 'NewMaxMembers'
    value: number
}

/**
 * A suspended member has been judged. \[who, judged\]
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    value: [AccountId32, boolean]
}

/**
 * A \[candidate\] was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    value: AccountId32
}

/**
 * Society is unfounded. \[founder\]
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    value: AccountId32
}

/**
 * A \[candidate\] was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    value: AccountId32
}

/**
 * A vote has been placed \[candidate, voter, vote\]
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    value: [AccountId32, AccountId32, boolean]
}

/**
 * A membership bid just happened by vouching. The given account is the candidate's ID and
 * their offer is the second. The vouching party is the third. \[candidate_id, offer,
 * vouching\]
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    value: [AccountId32, bigint, AccountId32]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the \[session_index\], not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_Scheduled

/**
 * Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [number, number]
}

/**
 * Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [[number, number], (Bytes | undefined), Result<null, DispatchError>]
}

/**
 * Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [number, number]
}

/**
 * Events type.
 */
export type RecoveryEvent = RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryClosed | RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryRemoved | RecoveryEvent_RecoveryVouched

/**
 * Lost account has been successfully recovered by rescuer account.
 * \[lost, rescuer\]
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    value: [AccountId32, AccountId32]
}

/**
 * A recovery process for lost account by rescuer account has been closed.
 * \[lost, rescuer\]
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    value: [AccountId32, AccountId32]
}

/**
 * A recovery process has been set up for an \[account\].
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    value: AccountId32
}

/**
 * A recovery process has been initiated for lost account by rescuer account.
 * \[lost, rescuer\]
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    value: [AccountId32, AccountId32]
}

/**
 * A recovery process has been removed for an \[account\].
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    value: AccountId32
}

/**
 * A recovery process for lost account by rescuer account has been vouched for by sender.
 * \[lost, rescuer, sender\]
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    value: [AccountId32, AccountId32, AccountId32]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_Announced | ProxyEvent_AnonymousCreated | ProxyEvent_ProxyAdded | ProxyEvent_ProxyExecuted

/**
 * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    value: [AccountId32, AccountId32, H256]
}

/**
 * Anonymous account has been created by new proxy with given
 * disambiguation index and proxy type. \[anonymous, who, proxy_type,
 * disambiguation_index\]
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    value: [AccountId32, AccountId32, ProxyType, number]
}

/**
 * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    value: [AccountId32, AccountId32, ProxyType, number]
}

/**
 * A proxy was executed correctly, with the given \[result\].
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    value: Result<null, DispatchError>
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
    value: [Bytes, Bytes]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 * \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId32, Timepoint, AccountId32, Bytes]
}

/**
 * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId32, Timepoint, AccountId32, Bytes]
}

/**
 * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId32, Timepoint, AccountId32, Bytes, Result<null, DispatchError>]
}

/**
 * A new multisig operation has begun. \[approving, multisig, call_hash\]
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId32, AccountId32, Bytes]
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned. \[index, who\]
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    value: [AccountId32, number]
}

/**
 * A account index has been freed up (unassigned). \[index\]
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    value: number
}

/**
 * A account index has been frozen to its current account ID. \[index, who\]
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    value: [number, AccountId32]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
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
 * A new heartbeat was received from `AuthorityId` \[authority_id\]
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: Bytes
}

/**
 * At the end of the session, at least one validator was found to be \[offline\].
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: [AccountId32, Exposure][]
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was cleared, and the given balance returned. \[who, deposit\]
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [AccountId32, bigint]
}

/**
 * A name was removed and the given balance slashed. \[who, deposit\]
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [AccountId32, bigint]
}

/**
 * A name was set or reset (which will remove all judgements). \[who\]
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: AccountId32
}

/**
 * A judgement was given by a registrar. \[target, registrar_index\]
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [AccountId32, number]
}

/**
 * A judgement was asked from a registrar. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [AccountId32, number]
}

/**
 * A judgement request was retracted. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [AccountId32, number]
}

/**
 * A registrar was added. \[registrar_index\]
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: number
}

/**
 * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 * \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: [Public, bigint][]
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ElectionsEvent = ElectionsEvent_CandidateSlashed | ElectionsEvent_ElectionError | ElectionsEvent_EmptyTerm | ElectionsEvent_MemberKicked | ElectionsEvent_NewTerm | ElectionsEvent_Renounced | ElectionsEvent_SeatHolderSlashed

/**
 * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface ElectionsEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: [AccountId32, bigint]
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
 * A \[member\] has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface ElectionsEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: AccountId32
}

/**
 * A new term with \[new_members\]. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface ElectionsEvent_NewTerm {
    __kind: 'NewTerm'
    value: [AccountId32, bigint][]
}

/**
 * Someone has renounced their candidacy.
 */
export interface ElectionsEvent_Renounced {
    __kind: 'Renounced'
    value: AccountId32
}

/**
 * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface ElectionsEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 * The election has been finalized, with `Some` of the given computation, or else if the
 * election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    value?: (ElectionCompute | undefined)
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    value: [AccountId32, bigint]
}

/**
 * The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    value: number
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    value: [AccountId32, bigint]
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
    value: [ElectionCompute, boolean]
}

/**
 * The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    value: number
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_Proposed | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed

/**
 * A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: H256
}

/**
 * A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: number
}

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId32, AccountId32]
}

/**
 * A proposal has been enacted. \[ref_index, result\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [number, Result<null, DispatchError>]
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: number
}

/**
 * A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: number
}

/**
 * A proposal could not be executed because its preimage was invalid.
 * \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [H256, number]
}

/**
 * A proposal could not be executed because its preimage was missing.
 * \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [H256, number]
}

/**
 * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [H256, AccountId32, bigint]
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 * \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [H256, AccountId32, bigint, AccountId32]
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 * \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [H256, AccountId32, bigint]
}

/**
 * A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [number, bigint]
}

/**
 * A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [number, VoteThreshold]
}

/**
 * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
 * depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [number, bigint, AccountId32[]]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId32
}

/**
 * An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [AccountId32, H256, number]
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 * A motion was approved by the required threshold.
 * \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 * \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [H256, number, number]
}

/**
 * A motion was not approved by the required threshold.
 * \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 * \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId32, number, H256, number]
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 * \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [AccountId32, H256, boolean, number, number]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ContractsEvent = ContractsEvent_CodeRemoved | ContractsEvent_CodeStored | ContractsEvent_ContractEmitted | ContractsEvent_Instantiated | ContractsEvent_ScheduleUpdated | ContractsEvent_Terminated

/**
 * A code with the specified hash was removed.
 * 
 * This happens when the last contract that uses this code hash was removed.
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
 * Contract deployed by address at the specified address.
 */
export interface ContractsEvent_Instantiated {
    __kind: 'Instantiated'
    deployer: AccountId32
    contract: AccountId32
}

/**
 * Triggered when the current schedule is updated.
 */
export interface ContractsEvent_ScheduleUpdated {
    __kind: 'ScheduleUpdated'
    /**
     * The version of the newly set schedule.
     */
    version: number
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type BountiesEvent = BountiesEvent_BountyAwarded | BountiesEvent_BountyBecameActive | BountiesEvent_BountyCanceled | BountiesEvent_BountyClaimed | BountiesEvent_BountyExtended | BountiesEvent_BountyProposed | BountiesEvent_BountyRejected

/**
 * A bounty is awarded to a beneficiary. \[index, beneficiary\]
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    value: [number, AccountId32]
}

/**
 * A bounty proposal is funded and became active. \[index\]
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    value: number
}

/**
 * A bounty is cancelled. \[index\]
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    value: number
}

/**
 * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    value: [number, bigint, AccountId32]
}

/**
 * A bounty expiry is extended. \[index\]
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    value: number
}

/**
 * New bounty proposal. \[index\]
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    value: number
}

/**
 * A bounty proposal was rejected; funds were slashed. \[index, bond\]
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    value: [number, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Transfer | BalancesEvent_Unreserved

/**
 * A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [AccountId32, bigint, bigint]
}

/**
 * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [AccountId32, bigint]
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [AccountId32, bigint]
}

/**
 * An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [AccountId32, bigint]
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 * \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [AccountId32, AccountId32, bigint, BalanceStatus]
}

/**
 * Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [AccountId32, bigint]
}

/**
 * Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [AccountId32, bigint]
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type BagsListEvent = BagsListEvent_Rebagged

/**
 * Moved an account from one bag to another. \[who, from, to\].
 */
export interface BagsListEvent_Rebagged {
    __kind: 'Rebagged'
    value: [AccountId32, bigint, bigint]
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
        BagsList: BagsListEvent,
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

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const VestingEvent: sts.Type<VestingEvent> = sts.closedEnum(() => {
    return  {
        VestingCompleted: AccountId32,
        VestingUpdated: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchInterrupted: sts.tuple(() => [sts.number(), DispatchError]),
        ItemCompleted: sts.unit(),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: sts.enumStruct({
            index: sts.number(),
            error: sts.number(),
        }),
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
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
        WouldDie: sts.unit(),
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return  {
        Awarded: sts.tuple(() => [sts.number(), sts.bigint(), AccountId32]),
        Burnt: sts.bigint(),
        Deposit: sts.bigint(),
        Proposed: sts.number(),
        Rejected: sts.tuple(() => [sts.number(), sts.bigint()]),
        Rollover: sts.bigint(),
        Spending: sts.bigint(),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const TipsEvent: sts.Type<TipsEvent> = sts.closedEnum(() => {
    return  {
        NewTip: H256,
        TipClosed: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
        TipClosing: H256,
        TipRetracted: H256,
        TipSlashed: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: H256,
        Closed: sts.tuple(() => [H256, sts.number(), sts.number()]),
        Disapproved: H256,
        Executed: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        MemberExecuted: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        Proposed: sts.tuple(() => [AccountId32, sts.number(), H256, sts.number()]),
        Voted: sts.tuple(() => [AccountId32, H256, sts.boolean(), sts.number(), sts.number()]),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.tuple(() => [DispatchError, DispatchInfo]),
        ExtrinsicSuccess: DispatchInfo,
        KilledAccount: AccountId32,
        NewAccount: AccountId32,
        Remarked: sts.tuple(() => [AccountId32, H256]),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: sts.bigint(),
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

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: AccountId32,
        Sudid: sts.result(() => sts.unit(), () => DispatchError),
        SudoAsDone: sts.result(() => sts.unit(), () => DispatchError),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Chilled: AccountId32,
        EraPaid: sts.tuple(() => [sts.number(), sts.bigint(), sts.bigint()]),
        Kicked: sts.tuple(() => [AccountId32, AccountId32]),
        OldSlashingReportDiscarded: sts.number(),
        PayoutStarted: sts.tuple(() => [sts.number(), AccountId32]),
        Rewarded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Slashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const SocietyEvent: sts.Type<SocietyEvent> = sts.closedEnum(() => {
    return  {
        AutoUnbid: AccountId32,
        Bid: sts.tuple(() => [AccountId32, sts.bigint()]),
        CandidateSuspended: AccountId32,
        Challenged: AccountId32,
        DefenderVote: sts.tuple(() => [AccountId32, sts.boolean()]),
        Deposit: sts.bigint(),
        Founded: AccountId32,
        Inducted: sts.tuple(() => [AccountId32, sts.array(() => AccountId32)]),
        MemberSuspended: AccountId32,
        NewMaxMembers: sts.number(),
        SuspendedMemberJudgement: sts.tuple(() => [AccountId32, sts.boolean()]),
        Unbid: AccountId32,
        Unfounded: AccountId32,
        Unvouch: AccountId32,
        Vote: sts.tuple(() => [AccountId32, AccountId32, sts.boolean()]),
        Vouch: sts.tuple(() => [AccountId32, sts.bigint(), AccountId32]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.number(),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        Canceled: sts.tuple(() => [sts.number(), sts.number()]),
        Dispatched: sts.tuple(() => [sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => DispatchError)]),
        Scheduled: sts.tuple(() => [sts.number(), sts.number()]),
    }
})

/**
 * Events type.
 */
export const RecoveryEvent: sts.Type<RecoveryEvent> = sts.closedEnum(() => {
    return  {
        AccountRecovered: sts.tuple(() => [AccountId32, AccountId32]),
        RecoveryClosed: sts.tuple(() => [AccountId32, AccountId32]),
        RecoveryCreated: AccountId32,
        RecoveryInitiated: sts.tuple(() => [AccountId32, AccountId32]),
        RecoveryRemoved: AccountId32,
        RecoveryVouched: sts.tuple(() => [AccountId32, AccountId32, AccountId32]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return  {
        Announced: sts.tuple(() => [AccountId32, AccountId32, H256]),
        AnonymousCreated: sts.tuple(() => [AccountId32, AccountId32, ProxyType, sts.number()]),
        ProxyAdded: sts.tuple(() => [AccountId32, AccountId32, ProxyType, sts.number()]),
        ProxyExecuted: sts.result(() => sts.unit(), () => DispatchError),
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
        Offence: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.tuple(() => [AccountId32, Timepoint, AccountId32, sts.bytes()]),
        MultisigCancelled: sts.tuple(() => [AccountId32, Timepoint, AccountId32, sts.bytes()]),
        MultisigExecuted: sts.tuple(() => [AccountId32, Timepoint, AccountId32, sts.bytes(), sts.result(() => sts.unit(), () => DispatchError)]),
        NewMultisig: sts.tuple(() => [AccountId32, AccountId32, sts.bytes()]),
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const IndicesEvent: sts.Type<IndicesEvent> = sts.closedEnum(() => {
    return  {
        IndexAssigned: sts.tuple(() => [AccountId32, sts.number()]),
        IndexFreed: sts.number(),
        IndexFrozen: sts.tuple(() => [sts.number(), AccountId32]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.bytes(),
        SomeOffline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.tuple(() => [AccountId32, sts.bigint()]),
        IdentityKilled: sts.tuple(() => [AccountId32, sts.bigint()]),
        IdentitySet: AccountId32,
        JudgementGiven: sts.tuple(() => [AccountId32, sts.number()]),
        JudgementRequested: sts.tuple(() => [AccountId32, sts.number()]),
        JudgementUnrequested: sts.tuple(() => [AccountId32, sts.number()]),
        RegistrarAdded: sts.number(),
        SubIdentityAdded: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        SubIdentityRemoved: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        SubIdentityRevoked: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const Public = sts.bytes()

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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const ElectionsEvent: sts.Type<ElectionsEvent> = sts.closedEnum(() => {
    return  {
        CandidateSlashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        ElectionError: sts.unit(),
        EmptyTerm: sts.unit(),
        MemberKicked: AccountId32,
        NewTerm: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
        Renounced: AccountId32,
        SeatHolderSlashed: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFinalized: sts.option(() => ElectionCompute),
        Rewarded: sts.tuple(() => [AccountId32, sts.bigint()]),
        SignedPhaseStarted: sts.number(),
        Slashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        SolutionStored: sts.tuple(() => [ElectionCompute, sts.boolean()]),
        UnsignedPhaseStarted: sts.number(),
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: H256,
        Cancelled: sts.number(),
        Delegated: sts.tuple(() => [AccountId32, AccountId32]),
        Executed: sts.tuple(() => [sts.number(), sts.result(() => sts.unit(), () => DispatchError)]),
        ExternalTabled: sts.unit(),
        NotPassed: sts.number(),
        Passed: sts.number(),
        PreimageInvalid: sts.tuple(() => [H256, sts.number()]),
        PreimageMissing: sts.tuple(() => [H256, sts.number()]),
        PreimageNoted: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
        PreimageReaped: sts.tuple(() => [H256, AccountId32, sts.bigint(), AccountId32]),
        PreimageUsed: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
        Proposed: sts.tuple(() => [sts.number(), sts.bigint()]),
        Started: sts.tuple(() => [sts.number(), VoteThreshold]),
        Tabled: sts.tuple(() => [sts.number(), sts.bigint(), sts.array(() => AccountId32)]),
        Undelegated: AccountId32,
        Vetoed: sts.tuple(() => [AccountId32, H256, sts.number()]),
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: H256,
        Closed: sts.tuple(() => [H256, sts.number(), sts.number()]),
        Disapproved: H256,
        Executed: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        MemberExecuted: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        Proposed: sts.tuple(() => [AccountId32, sts.number(), H256, sts.number()]),
        Voted: sts.tuple(() => [AccountId32, H256, sts.boolean(), sts.number(), sts.number()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const ContractsEvent: sts.Type<ContractsEvent> = sts.closedEnum(() => {
    return  {
        CodeRemoved: sts.enumStruct({
            codeHash: H256,
        }),
        CodeStored: sts.enumStruct({
            codeHash: H256,
        }),
        ContractEmitted: sts.enumStruct({
            contract: AccountId32,
            data: sts.bytes(),
        }),
        Instantiated: sts.enumStruct({
            deployer: AccountId32,
            contract: AccountId32,
        }),
        ScheduleUpdated: sts.enumStruct({
            version: sts.number(),
        }),
        Terminated: sts.enumStruct({
            contract: AccountId32,
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const BountiesEvent: sts.Type<BountiesEvent> = sts.closedEnum(() => {
    return  {
        BountyAwarded: sts.tuple(() => [sts.number(), AccountId32]),
        BountyBecameActive: sts.number(),
        BountyCanceled: sts.number(),
        BountyClaimed: sts.tuple(() => [sts.number(), sts.bigint(), AccountId32]),
        BountyExtended: sts.number(),
        BountyProposed: sts.number(),
        BountyRejected: sts.tuple(() => [sts.number(), sts.bigint()]),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
        Deposit: sts.tuple(() => [AccountId32, sts.bigint()]),
        DustLost: sts.tuple(() => [AccountId32, sts.bigint()]),
        Endowed: sts.tuple(() => [AccountId32, sts.bigint()]),
        ReserveRepatriated: sts.tuple(() => [AccountId32, AccountId32, sts.bigint(), BalanceStatus]),
        Reserved: sts.tuple(() => [AccountId32, sts.bigint()]),
        Transfer: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        Unreserved: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export const BagsListEvent: sts.Type<BagsListEvent> = sts.closedEnum(() => {
    return  {
        Rebagged: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_ChangesTrieRoot | DigestItem_ChangesTrieSignal | DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: H256
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value?: (ChangesTrieConfiguration | undefined)
}

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        ChangesTrieRoot: H256,
        ChangesTrieSignal: ChangesTrieSignal,
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

export const ChangesTrieSignal: sts.Type<ChangesTrieSignal> = sts.closedEnum(() => {
    return  {
        NewConfiguration: sts.option(() => ChangesTrieConfiguration),
    }
})

export const ChangesTrieConfiguration: sts.Type<ChangesTrieConfiguration> = sts.struct(() => {
    return  {
        digestInterval: sts.number(),
        digestLevels: sts.number(),
    }
})

export type AccountId32 = Bytes

export interface AccountInfo {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: AccountData
}

export interface AccountData {
    free: bigint
    reserved: bigint
    miscFrozen: bigint
    feeFrozen: bigint
}

export const AccountInfo: sts.Type<AccountInfo> = sts.struct(() => {
    return  {
        nonce: sts.number(),
        consumers: sts.number(),
        providers: sts.number(),
        sufficients: sts.number(),
        data: AccountData,
    }
})

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: sts.bigint(),
        reserved: sts.bigint(),
        miscFrozen: sts.bigint(),
        feeFrozen: sts.bigint(),
    }
})

export const AccountId32 = sts.bytes()
