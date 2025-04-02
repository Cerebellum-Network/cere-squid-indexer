import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DdcBillingReportFinalized {
    constructor(props?: Partial<DdcBillingReportFinalized>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: true})
    blockNumber!: number | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: true})
    blockTimestamp!: Date | undefined | null

    @Index_()
    @StringColumn_({nullable: false})
    clusterId!: string

    @Index_()
    @IntColumn_({nullable: false})
    eraId!: number
}
