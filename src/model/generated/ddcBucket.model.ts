import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, Index as Index_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcCluster} from "./ddcCluster.model"
import {DdcBucketUsage} from "./ddcBucketUsage.model"

@Entity_()
export class DdcBucket {
    constructor(props?: Partial<DdcBucket>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    createdAtBlockHeight!: number

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
