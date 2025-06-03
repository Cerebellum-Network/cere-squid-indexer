import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcCluster} from "./ddcCluster.model"

@Index_(["accountId", "clusterId"], {unique: false})
@Entity_()
export class DdcCustomerBalance {
    constructor(props?: Partial<DdcCustomerBalance>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @ManyToOne_(() => Account, {nullable: true})
    accountId!: Account

    @Index_()
    @ManyToOne_(() => DdcCluster, {nullable: true})
    clusterId!: DdcCluster

    @BigIntColumn_({nullable: false})
    activeBalance!: bigint
}
