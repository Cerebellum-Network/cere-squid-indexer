import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, ManyToOne as ManyToOne_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"

@Index_(["blockTimestamp", "amount"], {unique: false})
@Entity_()
export class DdcCustomerDeposit {
    constructor(props?: Partial<DdcCustomerDeposit>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @DateTimeColumn_({nullable: false})
    blockTimestamp!: Date

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    accountId!: Account

    @BigIntColumn_({nullable: false})
    amount!: bigint
}
