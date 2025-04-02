import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {TokenUtilityViewStatus} from "./_tokenUtilityViewStatus"

@Index_(["clusterId", "eraId"], {unique: true})
@Index_(["eraId", "clusterId"], {unique: true})
@Entity_()
export class DdcTokenUtilityDashboardView {
    constructor(props?: Partial<DdcTokenUtilityDashboardView>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    clusterId!: string

    @IntColumn_({nullable: false})
    eraId!: number

    @Index_()
    @DateTimeColumn_({nullable: true})
    startTime!: Date | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: true})
    endTime!: Date | undefined | null

    @BigIntColumn_({nullable: false})
    dataStored!: bigint

    @BigIntColumn_({nullable: false})
    dataStreamed!: bigint

    @BigIntColumn_({nullable: false})
    numberOfPuts!: bigint

    @BigIntColumn_({nullable: false})
    numberOfGets!: bigint

    @BigIntColumn_({nullable: false})
    nodesRewards!: bigint

    @BigIntColumn_({nullable: false})
    validatorsRewards!: bigint

    @BigIntColumn_({nullable: false})
    cmRewards!: bigint

    @BigIntColumn_({nullable: false})
    treasuryRewards!: bigint

    @Column_("varchar", {length: 24, nullable: true})
    status!: TokenUtilityViewStatus | undefined | null
}
