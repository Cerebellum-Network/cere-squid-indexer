import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, ManyToOne as ManyToOne_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {DdcNode} from "./ddcNode.model"

@Index_(["blockHeight", "nodeId"], {unique: false})
@Index_(["blockTimestamp", "nodeId"], {unique: false})
@Entity_()
export class DdcNodeUsage {
    constructor(props?: Partial<DdcNodeUsage>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    blockHeight!: number

    @DateTimeColumn_({nullable: false})
    blockTimestamp!: Date

    @Index_()
    @ManyToOne_(() => DdcNode, {nullable: true})
    nodeId!: DdcNode

    @BigIntColumn_({nullable: false})
    transferredBytes!: bigint

    @BigIntColumn_({nullable: false})
    storedBytes!: bigint

    @BigIntColumn_({nullable: false})
    numberOfPuts!: bigint

    @BigIntColumn_({nullable: false})
    numberOfGets!: bigint
}
