module.exports = class Data1722330772955 {
    name = 'Data1722330772955'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_node" ("id" character varying NOT NULL, "host" text NOT NULL, "domain" text, "ssl" boolean NOT NULL, "http_port" integer NOT NULL, "grpc_port" integer NOT NULL, "p2p_port" integer NOT NULL, "mode" character varying(7) NOT NULL, "provider_id_id" character varying, "cluster_id_id" character varying, CONSTRAINT "PK_cb26b78b5ac027ee4e2e8cda6d9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_cdd74b74e6a03496fbff79a54f" ON "ddc_node" ("provider_id_id") `)
        await db.query(`CREATE INDEX "IDX_31a99788080251b2444bf50f95" ON "ddc_node" ("cluster_id_id") `)
        await db.query(`CREATE TABLE "ddc_cluster" ("id" character varying NOT NULL, "treasury_share" numeric NOT NULL, "validators_share" numeric NOT NULL, "cluster_reserve_share" numeric NOT NULL, "storage_bond_size" numeric NOT NULL, "storage_chill_delay" integer NOT NULL, "storage_unbonding_delay" integer NOT NULL, "unit_per_mb_stored" numeric NOT NULL, "unit_per_mb_streamed" numeric NOT NULL, "unit_per_put_request" numeric NOT NULL, "unit_per_get_request" numeric NOT NULL, "erasure_coding_required" integer NOT NULL, "erasure_coding_total" integer NOT NULL, "replication_total" integer NOT NULL, "status" character varying(9) NOT NULL, "manager_id_id" character varying, CONSTRAINT "PK_fead8fedd55e91bb2c70262e7f7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1009191413e9fdd477ab9f6f4f" ON "ddc_cluster" ("manager_id_id") `)
        await db.query(`CREATE TABLE "ddc_bucket" ("id" character varying NOT NULL, "bucket_id" numeric NOT NULL, "is_public" boolean NOT NULL, "is_removed" boolean NOT NULL, "transferred_bytes" numeric NOT NULL, "stored_bytes" numeric NOT NULL, "number_of_puts" numeric NOT NULL, "number_of_gets" numeric NOT NULL, "owner_id_id" character varying, "cluster_id_id" character varying, CONSTRAINT "PK_6d33780d47ec0e7960c90e5b69f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_16f64a1893b3288a5481259a36" ON "ddc_bucket" ("bucket_id") `)
        await db.query(`CREATE INDEX "IDX_067d6b769b76b1151bdb3d4e9b" ON "ddc_bucket" ("owner_id_id") `)
        await db.query(`CREATE INDEX "IDX_d7c3d43528d763772e753697f6" ON "ddc_bucket" ("cluster_id_id") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "cere_free_balance" numeric NOT NULL, "ddc_active_balance" numeric NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "ddc_node" ADD CONSTRAINT "FK_cdd74b74e6a03496fbff79a54f9" FOREIGN KEY ("provider_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_node" ADD CONSTRAINT "FK_31a99788080251b2444bf50f955" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_cluster" ADD CONSTRAINT "FK_1009191413e9fdd477ab9f6f4fd" FOREIGN KEY ("manager_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD CONSTRAINT "FK_067d6b769b76b1151bdb3d4e9b1" FOREIGN KEY ("owner_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD CONSTRAINT "FK_d7c3d43528d763772e753697f62" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_node"`)
        await db.query(`DROP INDEX "public"."IDX_cdd74b74e6a03496fbff79a54f"`)
        await db.query(`DROP INDEX "public"."IDX_31a99788080251b2444bf50f95"`)
        await db.query(`DROP TABLE "ddc_cluster"`)
        await db.query(`DROP INDEX "public"."IDX_1009191413e9fdd477ab9f6f4f"`)
        await db.query(`DROP TABLE "ddc_bucket"`)
        await db.query(`DROP INDEX "public"."IDX_16f64a1893b3288a5481259a36"`)
        await db.query(`DROP INDEX "public"."IDX_067d6b769b76b1151bdb3d4e9b"`)
        await db.query(`DROP INDEX "public"."IDX_d7c3d43528d763772e753697f6"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`ALTER TABLE "ddc_node" DROP CONSTRAINT "FK_cdd74b74e6a03496fbff79a54f9"`)
        await db.query(`ALTER TABLE "ddc_node" DROP CONSTRAINT "FK_31a99788080251b2444bf50f955"`)
        await db.query(`ALTER TABLE "ddc_cluster" DROP CONSTRAINT "FK_1009191413e9fdd477ab9f6f4fd"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP CONSTRAINT "FK_067d6b769b76b1151bdb3d4e9b1"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP CONSTRAINT "FK_d7c3d43528d763772e753697f62"`)
    }
}
