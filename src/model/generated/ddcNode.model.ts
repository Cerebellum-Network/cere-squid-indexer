import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {DdcCluster} from "./ddcCluster.model"

@Entity_()
export class DdcNode {
    constructor(props?: Partial<DdcNode>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    providerId!: Account

    @Index_()
    @ManyToOne_(() => DdcCluster, {nullable: true})
    clusterId!: DdcCluster

    @StringColumn_({nullable: false})
    host!: string

    @StringColumn_({nullable: true})
    domain!: string | undefined | null

    @BooleanColumn_({nullable: false})
    ssl!: boolean

    @IntColumn_({nullable: false})
    httpPort!: number

    @IntColumn_({nullable: false})
    grpcPort!: number

    @IntColumn_({nullable: false})
    p2pPort!: number

    @StringColumn_({nullable: false})
    mode!: string
}
