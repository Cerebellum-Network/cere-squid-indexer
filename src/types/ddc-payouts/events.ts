import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v63002 from '../v63002'
import * as v64000 from '../v64000'
import * as v72000 from '../v72000'
import * as v73007 from '../v73007'
import * as v73038 from '../v73038'

export const billingReportInitialized =  {
    name: 'DdcPayouts.BillingReportInitialized',
    v63002: new EventType(
        'DdcPayouts.BillingReportInitialized',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
        })
    ),
}

export const chargingStarted =  {
    name: 'DdcPayouts.ChargingStarted',
    v63002: new EventType(
        'DdcPayouts.ChargingStarted',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
        })
    ),
}

export const charged =  {
    name: 'DdcPayouts.Charged',
    v63002: new EventType(
        'DdcPayouts.Charged',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v63002.AccountId32,
            bucketId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
    v72000: new EventType(
        'DdcPayouts.Charged',
        sts.struct({
            clusterId: v72000.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v72000.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const chargeFailed =  {
    name: 'DdcPayouts.ChargeFailed',
    v63002: new EventType(
        'DdcPayouts.ChargeFailed',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v63002.AccountId32,
            bucketId: sts.bigint(),
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
}

export const indebted =  {
    name: 'DdcPayouts.Indebted',
    v63002: new EventType(
        'DdcPayouts.Indebted',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v63002.AccountId32,
            bucketId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
    v72000: new EventType(
        'DdcPayouts.Indebted',
        sts.struct({
            clusterId: v72000.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v72000.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const chargingFinished =  {
    name: 'DdcPayouts.ChargingFinished',
    v63002: new EventType(
        'DdcPayouts.ChargingFinished',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
        })
    ),
}

export const treasuryFeesCollected =  {
    name: 'DdcPayouts.TreasuryFeesCollected',
    v63002: new EventType(
        'DdcPayouts.TreasuryFeesCollected',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const clusterReserveFeesCollected =  {
    name: 'DdcPayouts.ClusterReserveFeesCollected',
    v63002: new EventType(
        'DdcPayouts.ClusterReserveFeesCollected',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const validatorFeesCollected =  {
    name: 'DdcPayouts.ValidatorFeesCollected',
    v63002: new EventType(
        'DdcPayouts.ValidatorFeesCollected',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const rewardingStarted =  {
    name: 'DdcPayouts.RewardingStarted',
    v63002: new EventType(
        'DdcPayouts.RewardingStarted',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
        })
    ),
}

export const rewarded =  {
    name: 'DdcPayouts.Rewarded',
    v63002: new EventType(
        'DdcPayouts.Rewarded',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            nodeProviderId: v63002.AccountId32,
            rewarded: sts.bigint(),
            expectedToReward: sts.bigint(),
        })
    ),
}

export const validatorRewarded =  {
    name: 'DdcPayouts.ValidatorRewarded',
    v63002: new EventType(
        'DdcPayouts.ValidatorRewarded',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            validatorId: v63002.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const notDistributedReward =  {
    name: 'DdcPayouts.NotDistributedReward',
    v63002: new EventType(
        'DdcPayouts.NotDistributedReward',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            nodeProviderId: v63002.AccountId32,
            expectedReward: sts.bigint(),
            distributedReward: sts.bigint(),
        })
    ),
}

export const notDistributedOverallReward =  {
    name: 'DdcPayouts.NotDistributedOverallReward',
    v63002: new EventType(
        'DdcPayouts.NotDistributedOverallReward',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            expectedReward: sts.bigint(),
            totalDistributedReward: sts.bigint(),
        })
    ),
    v72000: new EventType(
        'DdcPayouts.NotDistributedOverallReward',
        sts.struct({
            clusterId: v72000.H160,
            era: sts.number(),
            expectedReward: sts.bigint(),
            totalDistributedRewards: sts.bigint(),
        })
    ),
}

export const rewardingFinished =  {
    name: 'DdcPayouts.RewardingFinished',
    v63002: new EventType(
        'DdcPayouts.RewardingFinished',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
        })
    ),
}

export const billingReportFinalized =  {
    name: 'DdcPayouts.BillingReportFinalized',
    v63002: new EventType(
        'DdcPayouts.BillingReportFinalized',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
        })
    ),
}

export const chargeError =  {
    name: 'DdcPayouts.ChargeError',
    v63002: new EventType(
        'DdcPayouts.ChargeError',
        sts.struct({
            clusterId: v63002.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v63002.AccountId32,
            amount: sts.bigint(),
            error: v63002.DispatchError,
        })
    ),
    v73038: new EventType(
        'DdcPayouts.ChargeError',
        sts.struct({
            clusterId: v73038.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v73038.AccountId32,
            amount: sts.bigint(),
            error: v73038.DispatchError,
        })
    ),
}

export const billingFingerprintCommited =  {
    name: 'DdcPayouts.BillingFingerprintCommited',
    v64000: new EventType(
        'DdcPayouts.BillingFingerprintCommited',
        sts.struct({
            validatorId: v64000.AccountId32,
            clusterId: v64000.H160,
            eraId: sts.number(),
            startEra: sts.bigint(),
            endEra: sts.bigint(),
            payersMerkleRoot: v64000.H256,
            payeesMerkleRoot: v64000.H256,
        })
    ),
}

export const payoutInitialized =  {
    name: 'DdcPayouts.PayoutInitialized',
    v72000: new EventType(
        'DdcPayouts.PayoutInitialized',
        sts.struct({
            clusterId: v72000.H160,
            era: sts.number(),
        })
    ),
}

export const chargedPartially =  {
    name: 'DdcPayouts.ChargedPartially',
    v72000: new EventType(
        'DdcPayouts.ChargedPartially',
        sts.struct({
            clusterId: v72000.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v72000.AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
}

export const payoutReceiptFinalized =  {
    name: 'DdcPayouts.PayoutReceiptFinalized',
    v72000: new EventType(
        'DdcPayouts.PayoutReceiptFinalized',
        sts.struct({
            clusterId: v72000.H160,
            era: sts.number(),
        })
    ),
    v73007: new EventType(
        'DdcPayouts.PayoutReceiptFinalized',
        sts.struct({
            clusterId: v73007.H160,
            era: sts.number(),
            finalizedAt: sts.number(),
        })
    ),
}

export const payoutFingerprintCommited =  {
    name: 'DdcPayouts.PayoutFingerprintCommited',
    v72000: new EventType(
        'DdcPayouts.PayoutFingerprintCommited',
        sts.struct({
            validatorId: v72000.AccountId32,
            clusterId: v72000.H160,
            eraId: sts.number(),
            payersMerkleRoot: v72000.H256,
            payeesMerkleRoot: v72000.H256,
        })
    ),
}
