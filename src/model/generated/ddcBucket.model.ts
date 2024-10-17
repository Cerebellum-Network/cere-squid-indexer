import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, ManyToOne as ManyToOne_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcCluster} from "./ddcCluster.model"
import {DdcBucketUsage} from "./ddcBucketUsage.model"

@Index_(["createdAtBlockTimestamp", "id"], {unique: false})
@Entity_()
export class DdcBucket {
    constructor(props?: Partial<DdcBucket>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    createdAtBlockHeight!: number

    @DateTimeColumn_({nullable: false})
    createdAtBlockTimestamp!: Date

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    ownerId!: Account

    @Index_()
    @ManyToOne_(() => DdcCluster, {nullable: true})
    clusterId!: DdcCluster

    @BooleanColumn_({nullable: false})
    isPublic!: boolean

    @BooleanColumn_({nullable: false})
    isRemoved!: boolean

    @OneToMany_(() => DdcBucketUsage, e => e.bucketId)
    usage!: DdcBucketUsage[]
}
