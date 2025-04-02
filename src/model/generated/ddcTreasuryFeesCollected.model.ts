import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DdcTreasuryFeesCollected {
    constructor(props?: Partial<DdcTreasuryFeesCollected>) {
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
    @StringColumn_({nullable: true})
    clusterId!: string | undefined | null

    @Index_()
    @IntColumn_({nullable: false})
    eraId!: number

    @BigIntColumn_({nullable: false})
    amount!: bigint
}
