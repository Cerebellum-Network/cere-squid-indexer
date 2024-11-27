import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v54100 from '../v54100'
import * as v54106 from '../v54106'
import * as v54112 from '../v54112'
import * as v54113 from '../v54113'

export const billingReportCreated =  {
    name: 'DdcVerification.BillingReportCreated',
    /**
     * A new billing report was created from `ClusterId` and `ERA`.
     */
    v54100: new EventType(
        'DdcVerification.BillingReportCreated',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
        })
    ),
}

export const verificationKeyStored =  {
    name: 'DdcVerification.VerificationKeyStored',
    /**
     * A verification key was stored with `VerificationKey`.
     */
    v54100: new EventType(
        'DdcVerification.VerificationKeyStored',
        sts.struct({
            verificationKey: sts.bytes(),
        })
    ),
}

export const payoutBatchCreated =  {
    name: 'DdcVerification.PayoutBatchCreated',
    /**
     * A new payout batch was created from `ClusterId` and `ERA`.
     */
    v54100: new EventType(
        'DdcVerification.PayoutBatchCreated',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
        })
    ),
}

export const eraValidationReady =  {
    name: 'DdcVerification.EraValidationReady',
    v54100: new EventType(
        'DdcVerification.EraValidationReady',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
        })
    ),
}

export const eraValidationNotReady =  {
    name: 'DdcVerification.EraValidationNotReady',
    v54100: new EventType(
        'DdcVerification.EraValidationNotReady',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
        })
    ),
}

export const notEnoughNodesForConsensus =  {
    name: 'DdcVerification.NotEnoughNodesForConsensus',
    /**
     * Not enough nodes for consensus.
     */
    v54100: new EventType(
        'DdcVerification.NotEnoughNodesForConsensus',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            id: sts.bytes(),
            validator: v54100.AccountId32,
        })
    ),
}

export const activityNotInConsensus =  {
    name: 'DdcVerification.ActivityNotInConsensus',
    /**
     * No activity in consensus.
     */
    v54100: new EventType(
        'DdcVerification.ActivityNotInConsensus',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            id: sts.bytes(),
            validator: v54100.AccountId32,
        })
    ),
}

export const nodeUsageRetrievalError =  {
    name: 'DdcVerification.NodeUsageRetrievalError',
    /**
     * Node Usage Retrieval Error.
     */
    v54100: new EventType(
        'DdcVerification.NodeUsageRetrievalError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            nodePubKey: v54100.NodePubKey,
            validator: v54100.AccountId32,
        })
    ),
}

export const customerUsageRetrievalError =  {
    name: 'DdcVerification.CustomerUsageRetrievalError',
    /**
     * Customer Usage Retrieval Error.
     */
    v54100: new EventType(
        'DdcVerification.CustomerUsageRetrievalError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            nodePubKey: v54100.NodePubKey,
            validator: v54100.AccountId32,
        })
    ),
}

export const eraRetrievalError =  {
    name: 'DdcVerification.EraRetrievalError',
    v54100: new EventType(
        'DdcVerification.EraRetrievalError',
        sts.struct({
            clusterId: v54100.H160,
            nodePubKey: v54100.NodePubKey,
            validator: v54100.AccountId32,
        })
    ),
}

export const prepareEraTransactionError =  {
    name: 'DdcVerification.PrepareEraTransactionError',
    v54100: new EventType(
        'DdcVerification.PrepareEraTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            payersMerkleRootHash: sts.bytes(),
            payeesMerkleRootHash: sts.bytes(),
            validator: v54100.AccountId32,
        })
    ),
}

export const beginBillingReportTransactionError =  {
    name: 'DdcVerification.BeginBillingReportTransactionError',
    v54100: new EventType(
        'DdcVerification.BeginBillingReportTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const beginChargingCustomersTransactionError =  {
    name: 'DdcVerification.BeginChargingCustomersTransactionError',
    v54100: new EventType(
        'DdcVerification.BeginChargingCustomersTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const sendChargingCustomersBatchTransactionError =  {
    name: 'DdcVerification.SendChargingCustomersBatchTransactionError',
    v54100: new EventType(
        'DdcVerification.SendChargingCustomersBatchTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            batchIndex: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const sendRewardingProvidersBatchTransactionError =  {
    name: 'DdcVerification.SendRewardingProvidersBatchTransactionError',
    v54100: new EventType(
        'DdcVerification.SendRewardingProvidersBatchTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            batchIndex: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const endChargingCustomersTransactionError =  {
    name: 'DdcVerification.EndChargingCustomersTransactionError',
    v54100: new EventType(
        'DdcVerification.EndChargingCustomersTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const beginRewardingProvidersTransactionError =  {
    name: 'DdcVerification.BeginRewardingProvidersTransactionError',
    v54100: new EventType(
        'DdcVerification.BeginRewardingProvidersTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const endRewardingProvidersTransactionError =  {
    name: 'DdcVerification.EndRewardingProvidersTransactionError',
    v54100: new EventType(
        'DdcVerification.EndRewardingProvidersTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const endBillingReportTransactionError =  {
    name: 'DdcVerification.EndBillingReportTransactionError',
    v54100: new EventType(
        'DdcVerification.EndBillingReportTransactionError',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const billingReportDoesNotExist =  {
    name: 'DdcVerification.BillingReportDoesNotExist',
    v54100: new EventType(
        'DdcVerification.BillingReportDoesNotExist',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const emptyCustomerActivity =  {
    name: 'DdcVerification.EmptyCustomerActivity',
    v54100: new EventType(
        'DdcVerification.EmptyCustomerActivity',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const batchIndexConversionFailed =  {
    name: 'DdcVerification.BatchIndexConversionFailed',
    v54100: new EventType(
        'DdcVerification.BatchIndexConversionFailed',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const noAvailableSigner =  {
    name: 'DdcVerification.NoAvailableSigner',
    v54100: new EventType(
        'DdcVerification.NoAvailableSigner',
        sts.struct({
            validator: v54100.AccountId32,
        })
    ),
}

export const notEnoughDacNodes =  {
    name: 'DdcVerification.NotEnoughDACNodes',
    v54100: new EventType(
        'DdcVerification.NotEnoughDACNodes',
        sts.struct({
            numNodes: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const failedToCreateMerkleRoot =  {
    name: 'DdcVerification.FailedToCreateMerkleRoot',
    v54100: new EventType(
        'DdcVerification.FailedToCreateMerkleRoot',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const failedToCreateMerkleProof =  {
    name: 'DdcVerification.FailedToCreateMerkleProof',
    v54100: new EventType(
        'DdcVerification.FailedToCreateMerkleProof',
        sts.struct({
            clusterId: v54100.H160,
            eraId: sts.number(),
            validator: v54100.AccountId32,
        })
    ),
}

export const failedToFetchCurrentValidator =  {
    name: 'DdcVerification.FailedToFetchCurrentValidator',
    v54100: new EventType(
        'DdcVerification.FailedToFetchCurrentValidator',
        sts.struct({
            validator: v54100.AccountId32,
        })
    ),
}

export const failedToFetchNodeProvider =  {
    name: 'DdcVerification.FailedToFetchNodeProvider',
    v54100: new EventType(
        'DdcVerification.FailedToFetchNodeProvider',
        sts.struct({
            validator: v54100.AccountId32,
        })
    ),
}

export const validatorKeySet =  {
    name: 'DdcVerification.ValidatorKeySet',
    v54106: new EventType(
        'DdcVerification.ValidatorKeySet',
        sts.struct({
            validator: v54106.AccountId32,
        })
    ),
}

export const totalNodeUsageLessThanZero =  {
    name: 'DdcVerification.TotalNodeUsageLessThanZero',
    v54112: new EventType(
        'DdcVerification.TotalNodeUsageLessThanZero',
        sts.struct({
            clusterId: v54112.H160,
            eraId: sts.number(),
            validator: v54112.AccountId32,
        })
    ),
}

export const eraValidationRootsPosted =  {
    name: 'DdcVerification.EraValidationRootsPosted',
    v54112: new EventType(
        'DdcVerification.EraValidationRootsPosted',
        sts.struct({
            clusterId: v54112.H160,
            eraId: sts.number(),
            validator: v54112.AccountId32,
            payersMerkleRootHash: sts.bytes(),
            payeesMerkleRootHash: sts.bytes(),
            payersBatchMerkleRootHashes: sts.array(() => sts.bytes()),
            payeesBatchMerkleRootHashes: sts.array(() => sts.bytes()),
        })
    ),
}

export const failedToFetchNodeTotalUsage =  {
    name: 'DdcVerification.FailedToFetchNodeTotalUsage',
    v54113: new EventType(
        'DdcVerification.FailedToFetchNodeTotalUsage',
        sts.struct({
            clusterId: v54113.H160,
            nodePubKey: v54113.NodePubKey,
            validator: v54113.AccountId32,
        })
    ),
}
