import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import * as ss58 from '@subsquid/ss58'
import assert from 'assert'
import { assertNotNull } from '@subsquid/util-internal'

import { processor, ProcessorContext } from './processor'
import { Account, DdcBucket, Transfer } from './model'
import { events, storage } from './types'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    let transferEvents: TransferEvent[] = getTransferEvents(ctx)

    let accounts: Map<string, Account> = await createAccounts(
        ctx,
        transferEvents,
    )
    let transfers: Transfer[] = createTransfers(transferEvents, accounts)

    await ctx.store.upsert([...accounts.values()])
    await ctx.store.insert(transfers)

    const eventsInfo = await getEventsInfo(ctx)
    let bucketOwnerAccounts = await ctx.store
        .findBy(Account, { id: In([...eventsInfo.accountIds]) })
        .then(
            (bucketOwnerAccounts) =>
                new Map(
                    bucketOwnerAccounts.map((account) => [account.id, account]),
                ),
        )
    for (let accountId of eventsInfo.accountIds) {
        if (!bucketOwnerAccounts.has(accountId)) {
            bucketOwnerAccounts.set(accountId, new Account({ id: accountId }))
        }
    }

    for (const ddcBucket of eventsInfo.ddcBuckets) {
        ddcBucket[0].ownerId = assertNotNull(
            bucketOwnerAccounts.get(ddcBucket[1]),
        )
        ddcBucket[0].id = ddcBucket[0].bucketId.toString()
    }

    await ctx.store.upsert([...bucketOwnerAccounts.values()])
    await ctx.store.upsert(eventsInfo.ddcBuckets.map((el) => el[0]))

    const ddcBalanceEvents = await getDdcBalanceEvents(ctx)
    for (const ddcBalanceEvent of ddcBalanceEvents) {
        const account = ss58.codec('cere').encode(ddcBalanceEvent[0])
        const entity = await ctx.store.findOne(Account, {
            where: { id: account },
        })
        if (entity) {
            entity.ddcBalance += ddcBalanceEvent[1]
            await ctx.store.save(entity)
        }
    }
})

interface TransferEvent {
    id: string
    blockNumber: number
    timestamp: Date
    extrinsicHash?: string
    from: string
    to: string
    amount: bigint
    fee?: bigint
}

function getTransferEvents(ctx: ProcessorContext<Store>): TransferEvent[] {
    // Filters and decodes the arriving events
    let transfers: TransferEvent[] = []
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (event.name == events.balances.transfer.name) {
                let rec: { from: string; to: string; amount: bigint }
                if (events.balances.transfer.v295.is(event)) {
                    let [from, to, amount] =
                        events.balances.transfer.v295.decode(event)
                    rec = { from, to, amount }
                } else if (events.balances.transfer.v297.is(event)) {
                    rec = events.balances.transfer.v297.decode(event)
                } else {
                    throw new Error('Unsupported spec')
                }

                assert(
                    block.header.timestamp,
                    `Got an undefined timestamp at block ${block.header.height}`,
                )

                transfers.push({
                    id: event.id,
                    blockNumber: block.header.height,
                    timestamp: new Date(block.header.timestamp),
                    extrinsicHash: event.extrinsic?.hash,
                    from: ss58.codec('cere').encode(rec.from),
                    to: ss58.codec('cere').encode(rec.to),
                    amount: rec.amount,
                    fee: event.extrinsic?.fee || 0n,
                })
            }
        }
    }
    return transfers
}

async function createAccounts(
    ctx: ProcessorContext<Store>,
    transferEvents: TransferEvent[],
): Promise<Map<string, Account>> {
    const accountIds = new Set<string>()
    for (let t of transferEvents) {
        accountIds.add(t.from)
        accountIds.add(t.to)
    }

    const accounts = await ctx.store
        .findBy(Account, { id: In([...accountIds]) })
        .then((accounts) => {
            return new Map(accounts.map((a) => [a.id, a]))
        })

    for (let t of transferEvents) {
        updateAccounts(t.from)
        updateAccounts(t.to)
    }

    function updateAccounts(id: string): void {
        const acc = accounts.get(id)
        if (acc == null) {
            accounts.set(id, new Account({ id }))
        }
    }

    return accounts
}

function createTransfers(
    transferEvents: TransferEvent[],
    accounts: Map<string, Account>,
): Transfer[] {
    let transfers: Transfer[] = []
    for (let t of transferEvents) {
        let { id, blockNumber, timestamp, extrinsicHash, amount, fee } = t
        let from = accounts.get(t.from)
        let to = accounts.get(t.to)
        transfers.push(
            new Transfer({
                id,
                blockNumber,
                timestamp,
                extrinsicHash,
                from,
                to,
                amount,
                fee,
            }),
        )
    }
    return transfers
}

type Tuple<T, K> = [T, K]

interface EventsInfo {
    accountIds: Set<string>
    // TODO: rename to ddcBucketCreated, add ddcBucketUpdated, ddcBucketRemoved.
    ddcBuckets: Tuple<DdcBucket, string>[]
}

async function getEventsInfo(
    ctx: ProcessorContext<Store>,
): Promise<EventsInfo> {
    let eventsInfo: EventsInfo = {
        ddcBuckets: [],
        accountIds: new Set<string>(),
    }

    for (let block of ctx.blocks) {
        for (let e of block.events) {
            if (e.name === events.ddcCustomers.bucketCreated.name) {
                let rec: {
                    bucketId: bigint
                    ownerId: string
                    clusterId: string
                    isPublic: boolean
                    isRemoved: boolean
                }

                if (events.ddcCustomers.bucketCreated.v48201.is(e)) {
                    const bucketId =
                        events.ddcCustomers.bucketCreated.v48201.decode(e)
                    const storageBucket = assertNotNull(
                        await storage.ddcCustomers.buckets.v48201.get(
                            block.header,
                            bucketId,
                        ),
                    )
                    // TODO: replace with assert
                    if (bucketId !== storageBucket.bucketId) {
                        throw Error(
                            `Requested bucketId ${bucketId} is not equal to embedded bucketId ${storageBucket.bucketId}`,
                        )
                    }
                    rec = { isRemoved: false, ...storageBucket }
                } else if (events.ddcCustomers.bucketCreated.v48602.is(e)) {
                    const bucketId =
                        events.ddcCustomers.bucketCreated.v48602.decode(
                            e,
                        ).bucketId
                    const storageBucket = assertNotNull(
                        await storage.ddcCustomers.buckets.v50000.get(
                            block.header,
                            bucketId,
                        ),
                    )
                    // TODO: replace with assert
                    if (bucketId !== storageBucket.bucketId) {
                        throw Error(
                            `Requested bucketId ${bucketId} is not equal to embedded bucketId ${storageBucket.bucketId}`,
                        )
                    }
                    rec = { ...storageBucket }
                } else {
                    throw new Error('Unsupported spec')
                }

                const ownerId = ss58.codec('cere').encode(rec.ownerId)
                eventsInfo.ddcBuckets.push([
                    new DdcBucket({
                        bucketId: rec.bucketId,
                        clusterId: rec.clusterId,
                        isPublic: rec.isPublic,
                        isRemoved: rec.isRemoved,
                    }),
                    ownerId,
                ])
                eventsInfo.accountIds.add(ownerId)
            }
            if (
                e.name === events.ddcCustomers.bucketRemoved.name &&
                events.ddcCustomers.bucketRemoved.v50000.is(e)
            ) {
                let rec: {
                    bucketId: bigint
                    ownerId: string
                    clusterId: string
                    isPublic: boolean
                    isRemoved: boolean
                }
                const bucketId =
                    events.ddcCustomers.bucketRemoved.v50000.decode(e).bucketId
                const storageBucket = assertNotNull(
                    await storage.ddcCustomers.buckets.v50000.get(
                        block.header,
                        bucketId,
                    ),
                )
                rec = { ...storageBucket }
                const ownerId = ss58.codec('cere').encode(rec.ownerId)
                eventsInfo.ddcBuckets.push([
                    new DdcBucket({
                        bucketId: rec.bucketId,
                        clusterId: rec.clusterId,
                        isPublic: rec.isPublic,
                        isRemoved: rec.isRemoved,
                    }),
                    ownerId,
                ])
                eventsInfo.accountIds.add(ownerId)
            }
            if (e.name === events.ddcCustomers.bucketUpdated.name) {
                let rec: {
                    bucketId: bigint
                    ownerId: string
                    clusterId: string
                    isPublic: boolean
                    isRemoved: boolean
                }

                if (events.ddcCustomers.bucketUpdated.v48201.is(e)) {
                    const bucketId =
                        events.ddcCustomers.bucketUpdated.v48201.decode(e)
                    const storageBucket = assertNotNull(
                        await storage.ddcCustomers.buckets.v48201.get(
                            block.header,
                            bucketId,
                        ),
                    )
                    // TODO: replace with assert
                    if (bucketId !== storageBucket.bucketId) {
                        throw Error(
                            `Requested bucketId ${bucketId} is not equal to embedded bucketId ${storageBucket.bucketId}`,
                        )
                    }
                    rec = { isRemoved: false, ...storageBucket }
                } else if (events.ddcCustomers.bucketUpdated.v48602.is(e)) {
                    const bucketId =
                        events.ddcCustomers.bucketUpdated.v48602.decode(
                            e,
                        ).bucketId
                    const storageBucket = assertNotNull(
                        await storage.ddcCustomers.buckets.v50000.get(
                            block.header,
                            bucketId,
                        ),
                    )
                    // TODO: replace with assert
                    if (bucketId !== storageBucket.bucketId) {
                        throw Error(
                            `Requested bucketId ${bucketId} is not equal to embedded bucketId ${storageBucket.bucketId}`,
                        )
                    }
                    rec = { ...storageBucket }
                } else {
                    throw new Error('Unsupported spec')
                }

                const ownerId = ss58.codec('cere').encode(rec.ownerId)
                eventsInfo.ddcBuckets.push([
                    new DdcBucket({
                        bucketId: rec.bucketId,
                        clusterId: rec.clusterId,
                        isPublic: rec.isPublic,
                        isRemoved: rec.isRemoved,
                    }),
                    ownerId,
                ])
                eventsInfo.accountIds.add(ownerId)
            }
        }
    }

    return eventsInfo
}

async function getDdcBalanceEvents(
    ctx: ProcessorContext<Store>,
): Promise<Tuple<string, bigint>[]> {
    let balanceEvents: Tuple<string, bigint>[] = []
    for (let block of ctx.blocks) {
        for (let e of block.events) {
            switch (e.name) {
                case events.ddcCustomers.deposited.name: {
                    if (events.ddcCustomers.deposited.v48201.is(e)) {
                        const parsedEvent =
                            events.ddcCustomers.deposited.v48201.decode(e)
                        balanceEvents.push([parsedEvent[0], parsedEvent[1]])
                    }
                    if (events.ddcCustomers.deposited.v48602.is(e)) {
                        const parsedEvent =
                            events.ddcCustomers.deposited.v48602.decode(e)
                        balanceEvents.push([
                            parsedEvent.ownerId,
                            parsedEvent.amount,
                        ])
                    }
                    break
                }
                case events.ddcCustomers.charged.name: {
                    if (events.ddcCustomers.charged.v48201.is(e)) {
                        const parsedEvent =
                            events.ddcCustomers.charged.v48201.decode(e)
                        balanceEvents.push([parsedEvent[0], -parsedEvent[1]])
                    }
                    if (events.ddcCustomers.charged.v48602.is(e)) {
                        const parsedEvent =
                            events.ddcCustomers.charged.v48602.decode(e)
                        balanceEvents.push([
                            parsedEvent.ownerId,
                            -parsedEvent.charged,
                        ])
                    }
                    break
                }
                case events.ddcCustomers.withdrawn.name: {
                    if (events.ddcCustomers.withdrawn.v48201.is(e)) {
                        const parsedEvent =
                            events.ddcCustomers.withdrawn.v48201.decode(e)
                        balanceEvents.push([parsedEvent[0], -parsedEvent[1]])
                    }
                    if (events.ddcCustomers.withdrawn.v48602.is(e)) {
                        const parsedEvent =
                            events.ddcCustomers.withdrawn.v48602.decode(e)
                        balanceEvents.push([
                            parsedEvent.ownerId,
                            -parsedEvent.amount,
                        ])
                    }
                    break
                }
                default:
                    break
            }
        }
    }
    return balanceEvents
}
