import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DdcEraValidationRootsPosted {
    constructor(props?: Partial<DdcEraValidationRootsPosted>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: true})
    blockNumber!: number | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    blockTimestamp!: Date

    @Index_()
    @StringColumn_({nullable: false})
    clusterId!: string

    @Index_()
    @IntColumn_({nullable: false})
    eraId!: number

    @Index_()
    @StringColumn_({nullable: true})
    validatorId!: string | undefined | null

    @StringColumn_({nullable: true})
    payersMerkleRootHash!: string | undefined | null

    @StringColumn_({nullable: true})
    payeesMerkleRootHash!: string | undefined | null

    @StringColumn_({array: true, nullable: true})
    payersBatchMerkleRootHashes!: (string)[] | undefined | null

    @StringColumn_({array: true, nullable: true})
    payeesBatchMerkleRootHashes!: (string)[] | undefined | null
}
