import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {DdcCustomerUsage} from "./ddcCustomerUsage.model"
import {DdcCustomerDeposit} from "./ddcCustomerDeposit.model"
import {DdcCustomerCharge} from "./ddcCustomerCharge.model"
import {DdcBucket} from "./ddcBucket.model"
import {DdcCluster} from "./ddcCluster.model"
import {DdcNode} from "./ddcNode.model"

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

    @OneToMany_(() => DdcCustomerUsage, e => e.accountId)
    ddcBucketsUsage!: DdcCustomerUsage[]

    @OneToMany_(() => DdcCustomerDeposit, e => e.accountId)
    ddcCustomerDeposits!: DdcCustomerDeposit[]

    @OneToMany_(() => DdcCustomerCharge, e => e.accountId)
    ddcCustomerCharges!: DdcCustomerCharge[]

    @OneToMany_(() => DdcBucket, e => e.ownerId)
    ddcBuckets!: DdcBucket[]

    @OneToMany_(() => DdcCluster, e => e.managerId)
    ddcClusters!: DdcCluster[]

    @OneToMany_(() => DdcNode, e => e.providerId)
    ddcNodes!: DdcNode[]
}
