import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v48015 from '../v48015'
import * as v48400 from '../v48400'
import * as v48800 from '../v48800'
import * as v48900 from '../v48900'
import * as v48901 from '../v48901'
import * as v50000 from '../v50000'
import * as v54001 from '../v54001'
import * as v54100 from '../v54100'

export const billingReportInitialized =  {
    name: 'DdcPayouts.BillingReportInitialized',
    v48015: new EventType(
        'DdcPayouts.BillingReportInitialized',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
        })
    ),
}

export const chargingStarted =  {
    name: 'DdcPayouts.ChargingStarted',
    v48015: new EventType(
        'DdcPayouts.ChargingStarted',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
        })
    ),
}

export const charged =  {
    name: 'DdcPayouts.Charged',
    v48015: new EventType(
        'DdcPayouts.Charged',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v48015.AccountId32,
            amount: sts.bigint(),
        })
    ),
    v54100: new EventType(
        'DdcPayouts.Charged',
        sts.struct({
            clusterId: v54100.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v54100.AccountId32,
            bucketId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const chargeFailed =  {
    name: 'DdcPayouts.ChargeFailed',
    v48015: new EventType(
        'DdcPayouts.ChargeFailed',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v48015.AccountId32,
            amount: sts.bigint(),
        })
    ),
    v48800: new EventType(
        'DdcPayouts.ChargeFailed',
        sts.struct({
            clusterId: v48800.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v48800.AccountId32,
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
    v54100: new EventType(
        'DdcPayouts.ChargeFailed',
        sts.struct({
            clusterId: v54100.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v54100.AccountId32,
            bucketId: sts.bigint(),
            charged: sts.bigint(),
            expectedToCharge: sts.bigint(),
        })
    ),
}

export const indebted =  {
    name: 'DdcPayouts.Indebted',
    v48015: new EventType(
        'DdcPayouts.Indebted',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v48015.AccountId32,
            amount: sts.bigint(),
        })
    ),
    v54100: new EventType(
        'DdcPayouts.Indebted',
        sts.struct({
            clusterId: v54100.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v54100.AccountId32,
            bucketId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const chargingFinished =  {
    name: 'DdcPayouts.ChargingFinished',
    v48015: new EventType(
        'DdcPayouts.ChargingFinished',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
        })
    ),
}

export const treasuryFeesCollected =  {
    name: 'DdcPayouts.TreasuryFeesCollected',
    v48015: new EventType(
        'DdcPayouts.TreasuryFeesCollected',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const clusterReserveFeesCollected =  {
    name: 'DdcPayouts.ClusterReserveFeesCollected',
    v48015: new EventType(
        'DdcPayouts.ClusterReserveFeesCollected',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const validatorFeesCollected =  {
    name: 'DdcPayouts.ValidatorFeesCollected',
    v48015: new EventType(
        'DdcPayouts.ValidatorFeesCollected',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const rewardingStarted =  {
    name: 'DdcPayouts.RewardingStarted',
    v48015: new EventType(
        'DdcPayouts.RewardingStarted',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
        })
    ),
}

export const rewarded =  {
    name: 'DdcPayouts.Rewarded',
    v48015: new EventType(
        'DdcPayouts.Rewarded',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
            nodeProviderId: v48015.AccountId32,
            amount: sts.bigint(),
        })
    ),
    v48800: new EventType(
        'DdcPayouts.Rewarded',
        sts.struct({
            clusterId: v48800.H160,
            era: sts.number(),
            nodeProviderId: v48800.AccountId32,
            rewarded: sts.bigint(),
            expectedToReward: sts.bigint(),
        })
    ),
    v48900: new EventType(
        'DdcPayouts.Rewarded',
        sts.struct({
            clusterId: v48900.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            nodeProviderId: v48900.AccountId32,
            rewarded: sts.bigint(),
            expectedToReward: sts.bigint(),
        })
    ),
}

export const rewardingFinished =  {
    name: 'DdcPayouts.RewardingFinished',
    v48015: new EventType(
        'DdcPayouts.RewardingFinished',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
        })
    ),
}

export const billingReportFinalized =  {
    name: 'DdcPayouts.BillingReportFinalized',
    v48015: new EventType(
        'DdcPayouts.BillingReportFinalized',
        sts.struct({
            clusterId: v48015.H160,
            era: sts.number(),
        })
    ),
}

export const authorisedCaller =  {
    name: 'DdcPayouts.AuthorisedCaller',
    v48015: new EventType(
        'DdcPayouts.AuthorisedCaller',
        sts.struct({
            authorisedCaller: v48015.AccountId32,
        })
    ),
}

export const notDistributedReward =  {
    name: 'DdcPayouts.NotDistributedReward',
    v48400: new EventType(
        'DdcPayouts.NotDistributedReward',
        sts.struct({
            clusterId: v48400.H160,
            era: sts.number(),
            nodeProviderId: v48400.AccountId32,
            expectedReward: sts.bigint(),
            distributedReward: sts.bigint(),
        })
    ),
    v48900: new EventType(
        'DdcPayouts.NotDistributedReward',
        sts.struct({
            clusterId: v48900.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            nodeProviderId: v48900.AccountId32,
            expectedReward: sts.bigint(),
            distributedReward: sts.bigint(),
        })
    ),
}

export const notDistributedOverallReward =  {
    name: 'DdcPayouts.NotDistributedOverallReward',
    v48400: new EventType(
        'DdcPayouts.NotDistributedOverallReward',
        sts.struct({
            clusterId: v48400.H160,
            era: sts.number(),
            expectedReward: sts.bigint(),
            totalDistributedReward: sts.bigint(),
        })
    ),
}

export const chargeError =  {
    name: 'DdcPayouts.ChargeError',
    v48901: new EventType(
        'DdcPayouts.ChargeError',
        sts.struct({
            clusterId: v48901.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v48901.AccountId32,
            amount: sts.bigint(),
            error: v48901.DispatchError,
        })
    ),
    v50000: new EventType(
        'DdcPayouts.ChargeError',
        sts.struct({
            clusterId: v50000.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            customerId: v50000.AccountId32,
            amount: sts.bigint(),
            error: v50000.DispatchError,
        })
    ),
}

export const providerRewarded =  {
    name: 'DdcPayouts.ProviderRewarded',
    v54001: new EventType(
        'DdcPayouts.ProviderRewarded',
        sts.struct({
            clusterId: v54001.H160,
            era: sts.number(),
            batchIndex: sts.number(),
            storedBytes: sts.bigint(),
            transferredBytes: sts.bigint(),
            numberOfPuts: sts.bigint(),
            numberOfGets: sts.bigint(),
            nodeProviderId: v54001.AccountId32,
            rewarded: sts.bigint(),
            expectedToReward: sts.bigint(),
        })
    ),
}

export const validatorRewarded =  {
    name: 'DdcPayouts.ValidatorRewarded',
    v54001: new EventType(
        'DdcPayouts.ValidatorRewarded',
        sts.struct({
            clusterId: v54001.H160,
            era: sts.number(),
            validatorId: v54001.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
