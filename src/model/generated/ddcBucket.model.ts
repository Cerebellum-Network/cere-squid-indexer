import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BooleanColumn as BooleanColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcCluster} from "./ddcCluster.model"

@Entity_()
export class DdcBucket {
    constructor(props?: Partial<DdcBucket>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

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

    @BigIntColumn_({nullable: false})
    transferredBytes!: bigint

    @BigIntColumn_({nullable: false})
    storedBytes!: bigint

    @BigIntColumn_({nullable: false})
    numberOfPuts!: bigint

    @BigIntColumn_({nullable: false})
    numberOfGets!: bigint
}
