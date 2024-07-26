import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {DdcBucket} from "./ddcBucket.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BigIntColumn_({nullable: false})
    cereFreeBalance!: bigint

    @BigIntColumn_({nullable: false})
    ddcActiveBalance!: bigint

    @OneToMany_(() => DdcBucket, e => e.ownerId)
    ddcBuckets!: DdcBucket[]
}
