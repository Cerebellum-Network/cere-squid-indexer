import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcClusterStatus} from "./_ddcClusterStatus"
import {DdcBucket} from "./ddcBucket.model"
import {DdcNode} from "./ddcNode.model"

@Entity_()
export class DdcCluster {
    constructor(props?: Partial<DdcCluster>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    createdAtBlockHeight!: number

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    managerId!: Account

    @BigIntColumn_({nullable: false})
    treasuryShare!: bigint

    @BigIntColumn_({nullable: false})
    validatorsShare!: bigint

    @BigIntColumn_({nullable: false})
    clusterReserveShare!: bigint

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

    @Column_("varchar", {length: 9, nullable: false})
    status!: DdcClusterStatus

    @OneToMany_(() => DdcBucket, e => e.clusterId)
    ddcBuckets!: DdcBucket[]

    @OneToMany_(() => DdcNode, e => e.clusterId)
    ddcNodes!: DdcNode[]
}
