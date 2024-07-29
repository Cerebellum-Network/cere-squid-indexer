import {processor} from "./processor";
import {TypeormDatabase} from "@subsquid/typeorm-store";
import {Account, DdcBucket} from "./model";
import {events, storage} from "./types";
import * as ss58 from "@subsquid/ss58";

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const logger = ctx.log

    const accounts = new Map<string, Account>

    const emptyAccount = (accountId: string) => new Account({
        id: accountId,
        cereFreeBalance: 0n,
        ddcActiveBalance: 0n,
        ddcBuckets: [],
    })

    // process events
    for (let b of ctx.blocks) {
        const block = b.header
        for (let event of b.events) {
            // process Balances pallet events
            const processBalancesEvent = async (accountId: string) => {
                try {
                    let accountInStorage
                    if (storage.system.account.v266.is(block)) {
                        accountInStorage = await storage.system.account.v266.get(block, accountId)
                    } else if (storage.system.account.v295.is(block)) {
                        accountInStorage = await storage.system.account.v295.get(block, accountId)
                    } else if (storage.system.account.v48900.is(block)) {
                        accountInStorage = await storage.system.account.v48900.get(block, accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    if (accountInStorage) {
                        const accountEntity = accounts.get(accountId) ?? emptyAccount(accountId)
                        accountEntity.cereFreeBalance = accountInStorage.data.free
                        accounts.set(accountId, accountEntity)
                    } else {
                        logStorageError("account", accountId)
                    }
                } catch (error) {
                    if (error?.toString() === 'Error: Unexpected EOF') {
                        logStorageError("account", accountId)
                    } else {
                        logAndThrowProcessingError(error)
                    }
                }
            }

            // process DDC Customer balances pallet events
            const processDdcCustomersBalancesEvents = async (accountId: string) => {
                try {
                    let accountInStorage
                    if (storage.ddcCustomers.ledger.v48013.is(block)) {
                        accountInStorage = await storage.ddcCustomers.ledger.v48013.get(block, accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    if (accountInStorage) {
                        const accountEntity = accounts.get(accountId) ?? emptyAccount(accountId)
                        accountEntity.ddcActiveBalance = accountInStorage.active
                        accounts.set(accountId, accountEntity)
                    } else {
                        logStorageError("DDC Customer ledger", accountId)
                    }
                } catch (error) {
                    logAndThrowProcessingError(error)
                }
            }

            // process DDC Customer buckets pallet events
            const processDdcBucketsEvents = async (bucketId: bigint) => {
                try {
                    let bucketEntity
                    let accountId
                    if (storage.ddcCustomers.buckets.v48013.is(block)) {
                        const bucket = await storage.ddcCustomers.buckets.v48013.get(block, bucketId)
                        if (bucket) {
                            bucketEntity = new DdcBucket({
                                bucketId: bucketId,
                                clusterId: bucket.clusterId,
                                isPublic: true,
                                isRemoved: false,
                                transferredBytes: 0n,
                                storedBytes: 0n,
                                numberOfPuts: 0n,
                                numberOfGets: 0n,
                            })
                            accountId = bucket.ownerId
                        } else {
                            logStorageError("bucket", bucketId)
                        }
                    } else if (storage.ddcCustomers.buckets.v48017.is(block)) {
                        const bucket = await storage.ddcCustomers.buckets.v48017.get(block, bucketId)
                        if (bucket) {
                            bucketEntity = new DdcBucket({
                                bucketId: bucketId,
                                clusterId: bucket.clusterId,
                                isPublic: bucket.isPublic,
                                isRemoved: false,
                                transferredBytes: 0n,
                                storedBytes: 0n,
                                numberOfPuts: 0n,
                                numberOfGets: 0n,
                            })
                            accountId = bucket.ownerId
                        } else {
                            logStorageError("bucket", bucketId)
                        }
                    } else if (storage.ddcCustomers.buckets.v50000.is(block)) {
                        const bucket = await storage.ddcCustomers.buckets.v50000.get(block, bucketId)
                        if (bucket) {
                            bucketEntity = new DdcBucket({
                                bucketId: bucketId,
                                clusterId: bucket.clusterId,
                                isPublic: bucket.isPublic,
                                isRemoved: bucket.isRemoved,
                                transferredBytes: 0n,
                                storedBytes: 0n,
                                numberOfPuts: 0n,
                                numberOfGets: 0n,
                            })
                            accountId = bucket.ownerId
                        } else {
                            logStorageError("bucket", bucketId)
                        }
                    } else if (storage.ddcCustomers.buckets.v54100.is(block)) {
                        const bucket = await storage.ddcCustomers.buckets.v54100.get(block, bucketId)
                        if (bucket) {
                            bucketEntity = new DdcBucket({
                                bucketId: bucketId,
                                clusterId: bucket.clusterId,
                                isPublic: bucket.isPublic,
                                isRemoved: bucket.isRemoved,
                                transferredBytes: bucket.totalCustomersUsage?.transferredBytes ?? 0n,
                                storedBytes: bucket.totalCustomersUsage?.storedBytes ?? 0n,
                                numberOfPuts: bucket.totalCustomersUsage?.numberOfPuts ?? 0n,
                                numberOfGets: bucket.totalCustomersUsage?.numberOfGets ?? 0n,
                            })
                            accountId = bucket.ownerId
                        } else {
                            logStorageError("bucket", bucketId)
                        }
                    } else {
                        throwUnsupportedSpec()
                    }
                    if (bucketEntity) {
                        if (accountId) {
                            const accountEntity = accounts.get(accountId) ?? emptyAccount(accountId)
                            accountEntity.ddcBuckets.push(bucketEntity)
                            accounts.set(accountId, accountEntity)
                        }
                    }
                } catch (error) {
                    logAndThrowProcessingError(error)
                }
            }

            //util logging functions
            // TODO make configurable behaviour for different types of errors
            const throwUnsupportedSpec = () => {
                throw Error(`Unsupported spec version for event ${event.name} at block ${block.height} (${block.hash})`)
            }

            const logStorageError = (entity: string, key: any) => {
                logger.warn(`Unable to find ${entity} by key ${key} at block ${block.height} (${block.hash})`)
            }

            const logAndThrowProcessingError = (error: any) => {
                logger.error(`Unable to process event ${event.name} at block ${block.height} (${block.hash})`)
                logger.error(`${error}`)
                logger.error(`Event args: ${JSON.stringify(event.args)}`)
                logger.error(`Event extrinsic: ${event.extrinsic?.id}`)
                throw error
            }

            logger.info(`Received event ${event.name} at block ${block.height} (${block.hash})`)

            switch (event.name) {
                // Balances
                case events.balances.endowed.name: {
                    if (events.balances.endowed.v266.is(event)) {
                        const accountId = events.balances.endowed.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.endowed.v297.is(event)) {
                        const accountId = events.balances.endowed.v297.decode(event).account
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.dustLost.name: {
                    if (events.balances.dustLost.v266.is(event)) {
                        const accountId = events.balances.dustLost.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.dustLost.v297.is(event)) {
                        const accountId = events.balances.dustLost.v297.decode(event).account
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.transfer.name: {
                    if (events.balances.transfer.v266.is(event)) {
                        const accountId = events.balances.transfer.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.transfer.v297.is(event)) {
                        const accountId = events.balances.transfer.v297.decode(event).from
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.balanceSet.name: {
                    if (events.balances.balanceSet.v266.is(event)) {
                        const accountId = events.balances.balanceSet.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.balanceSet.v297.is(event)) {
                        const accountId = events.balances.balanceSet.v297.decode(event).who
                        await processBalancesEvent(accountId)
                    } else if (events.balances.balanceSet.v48900.is(event)) {
                        const accountId = events.balances.balanceSet.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.deposit.name: {
                    if (events.balances.deposit.v266.is(event)) {
                        const accountId = events.balances.deposit.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.deposit.v297.is(event)) {
                        const accountId = events.balances.deposit.v297.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.reserved.name: {
                    if (events.balances.reserved.v266.is(event)) {
                        const accountId = events.balances.reserved.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.reserved.v297.is(event)) {
                        const accountId = events.balances.reserved.v297.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.unreserved.name: {
                    if (events.balances.unreserved.v266.is(event)) {
                        const accountId = events.balances.unreserved.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.unreserved.v297.is(event)) {
                        const accountId = events.balances.unreserved.v297.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.reserveRepatriated.name: {
                    if (events.balances.reserveRepatriated.v266.is(event)) {
                        const accountId = events.balances.reserveRepatriated.v266.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.reserveRepatriated.v297.is(event)) {
                        const accountId = events.balances.reserveRepatriated.v297.decode(event).from
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.withdraw.name: {
                    if (events.balances.withdraw.v296.is(event)) {
                        const accountId = events.balances.withdraw.v296.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.withdraw.v297.is(event)) {
                        const accountId = events.balances.withdraw.v297.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.slashed.name: {
                    if (events.balances.slashed.v296.is(event)) {
                        const accountId = events.balances.slashed.v296.decode(event)[0]
                        await processBalancesEvent(accountId)
                    } else if (events.balances.slashed.v297.is(event)) {
                        const accountId = events.balances.slashed.v297.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.minted.name: {
                    if (events.balances.minted.v48900.is(event)) {
                        const accountId = events.balances.minted.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.burned.name: {
                    if (events.balances.burned.v48900.is(event)) {
                        const accountId = events.balances.burned.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.suspended.name: {
                    if (events.balances.suspended.v48900.is(event)) {
                        const accountId = events.balances.suspended.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.restored.name: {
                    if (events.balances.restored.v48900.is(event)) {
                        const accountId = events.balances.restored.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.upgraded.name: {
                    if (events.balances.upgraded.v48900.is(event)) {
                        const accountId = events.balances.upgraded.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.locked.name: {
                    if (events.balances.locked.v48900.is(event)) {
                        const accountId = events.balances.locked.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.unlocked.name: {
                    if (events.balances.unlocked.v48900.is(event)) {
                        const accountId = events.balances.unlocked.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.frozen.name: {
                    if (events.balances.frozen.v48900.is(event)) {
                        const accountId = events.balances.frozen.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.balances.thawed.name: {
                    if (events.balances.thawed.v48900.is(event)) {
                        const accountId = events.balances.thawed.v48900.decode(event).who
                        await processBalancesEvent(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }

                // DDC Customers
                // balances
                case events.ddcCustomers.deposited.name: {
                    if (events.ddcCustomers.deposited.v48013.is(event)) {
                        const accountId = events.ddcCustomers.deposited.v48013.decode(event)[0]
                        await processDdcCustomersBalancesEvents(accountId)
                    } else if (events.ddcCustomers.deposited.v48800.is(event)) {
                        const accountId = events.ddcCustomers.deposited.v48800.decode(event).ownerId
                        await processDdcCustomersBalancesEvents(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.initiatDepositUnlock.name: {
                    if (events.ddcCustomers.initiatDepositUnlock.v48013.is(event)) {
                        const accountId = events.ddcCustomers.initiatDepositUnlock.v48013.decode(event)[0]
                        await processDdcCustomersBalancesEvents(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.withdrawn.name: {
                    if (events.ddcCustomers.withdrawn.v48013.is(event)) {
                        const accountId = events.ddcCustomers.withdrawn.v48013.decode(event)[0]
                        await processDdcCustomersBalancesEvents(accountId)
                    } else if (events.ddcCustomers.withdrawn.v48800.is(event)) {
                        const accountId = events.ddcCustomers.withdrawn.v48800.decode(event).ownerId
                        await processDdcCustomersBalancesEvents(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.charged.name: {
                    if (events.ddcCustomers.charged.v48013.is(event)) {
                        // incorrect version, just skip
                    } else if (events.ddcCustomers.charged.v48014.is(event)) {
                        const accountId = events.ddcCustomers.charged.v48014.decode(event)[0]
                        await processDdcCustomersBalancesEvents(accountId)
                    } else if (events.ddcCustomers.charged.v48800.is(event)) {
                        const accountId = events.ddcCustomers.charged.v48800.decode(event).ownerId
                        await processDdcCustomersBalancesEvents(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.initialDepositUnlock.name: {
                    if (events.ddcCustomers.initialDepositUnlock.v48014.is(event)) {
                        const accountId = events.ddcCustomers.initialDepositUnlock.v48014.decode(event)[0]
                        await processDdcCustomersBalancesEvents(accountId)
                    } else if (events.ddcCustomers.initialDepositUnlock.v48800.is(event)) {
                        const accountId = events.ddcCustomers.charged.v48800.decode(event).ownerId
                        await processDdcCustomersBalancesEvents(accountId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                // buckets
                case events.ddcCustomers.bucketCreated.name: {
                    if (events.ddcCustomers.bucketCreated.v48013.is(event)) {
                        const bucketId = events.ddcCustomers.bucketCreated.v48013.decode(event)
                        await processDdcBucketsEvents(bucketId)
                    } else if (events.ddcCustomers.bucketCreated.v48800.is(event)) {
                        const bucketId = events.ddcCustomers.bucketCreated.v48800.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else if (events.ddcCustomers.bucketCreated.v54100.is(event)) {
                        const bucketId = events.ddcCustomers.bucketCreated.v54100.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.bucketUpdated.name: {
                    if (events.ddcCustomers.bucketUpdated.v48017.is(event)) {
                        const bucketId = events.ddcCustomers.bucketUpdated.v48017.decode(event)
                        await processDdcBucketsEvents(bucketId)
                    } else if (events.ddcCustomers.bucketUpdated.v48800.is(event)) {
                        const bucketId = events.ddcCustomers.bucketUpdated.v48800.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else if (events.ddcCustomers.bucketUpdated.v54100.is(event)) {
                        const bucketId = events.ddcCustomers.bucketUpdated.v54100.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.bucketRemoved.name: {
                    if (events.ddcCustomers.bucketRemoved.v50000.is(event)) {
                        const bucketId = events.ddcCustomers.bucketRemoved.v50000.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.bucketTotalNodesUsageUpdated.name: {
                    if (events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.is(event)) {
                        const bucketId = events.ddcCustomers.bucketTotalNodesUsageUpdated.v54100.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }
                case events.ddcCustomers.bucketTotalCustomersUsageUpdated.name: {
                    if (events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.is(event)) {
                        const bucketId = events.ddcCustomers.bucketTotalCustomersUsageUpdated.v54100.decode(event).bucketId
                        await processDdcBucketsEvents(bucketId)
                    } else {
                        throwUnsupportedSpec()
                    }
                    break
                }

                default: {
                    break;
                }
            }
        }

        // convert address to cere address
        accounts.forEach((account, id) => {
            account.id = ss58.codec("cere").encode(id)
            account.ddcBuckets.forEach(bucket => {
                bucket.ownerId = account
            })
        })

        // save to db
        await ctx.store.upsert([...accounts.values()])
    }
})