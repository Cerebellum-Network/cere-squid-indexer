import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, ManyToOne as ManyToOne_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"

@Entity_()
export class DdcBucket {
    constructor(props?: Partial<DdcBucket>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    bucketId!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    ownerId!: Account

    @Index_()
    @StringColumn_({nullable: false})
    clusterId!: string

    @BooleanColumn_({nullable: false})
    isPublic!: boolean

    @BooleanColumn_({nullable: false})
    isRemoved!: boolean
}
