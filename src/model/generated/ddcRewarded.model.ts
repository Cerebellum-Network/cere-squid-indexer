import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DdcRewarded {
    constructor(props?: Partial<DdcRewarded>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: true})
    blockNumber!: number | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    blockTimestamp!: Date

    @Index_()
    @StringColumn_({nullable: false})
    clusterId!: string

    @Index_()
    @IntColumn_({nullable: false})
    eraId!: number

    @Index_()
    @IntColumn_({nullable: true})
    batchIndex!: number | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    nodeProviderId!: string | undefined | null

    @BigIntColumn_({nullable: true})
    rewarded!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    expectedToReward!: bigint | undefined | null
}
