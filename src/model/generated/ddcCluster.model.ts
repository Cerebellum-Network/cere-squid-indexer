import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, StringColumn as StringColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcBucket} from "./ddcBucket.model"
import {DdcNode} from "./ddcNode.model"

@Entity_()
export class DdcCluster {
    constructor(props?: Partial<DdcCluster>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    managerId!: Account

    @IntColumn_({nullable: false})
    treasuryShare!: number

    @IntColumn_({nullable: false})
    validatorsShare!: number

    @IntColumn_({nullable: false})
    clusterReserveShare!: number

    @BigIntColumn_({nullable: false})
    storageBondSize!: bigint

    @IntColumn_({nullable: false})
    storageChillDelay!: number

    @IntColumn_({nullable: false})
    storageUnbondingDelay!: number

    @BigIntColumn_({nullable: false})
    unitPerMbStored!: bigint

    @BigIntColumn_({nullable: false})
    unitPerMbStreamed!: bigint

    @BigIntColumn_({nullable: false})
    unitPerPutRequest!: bigint

    @BigIntColumn_({nullable: false})
    unitPerGetRequest!: bigint

    @IntColumn_({nullable: false})
    erasureCodingRequired!: number

    @IntColumn_({nullable: false})
    erasureCodingTotal!: number

    @IntColumn_({nullable: false})
    replicationTotal!: number

    @StringColumn_({nullable: false})
    status!: string

    @OneToMany_(() => DdcBucket, e => e.clusterId)
    ddcBuckets!: DdcBucket[]

    @OneToMany_(() => DdcNode, e => e.clusterId)
    ddcNodes!: DdcNode[]
}
