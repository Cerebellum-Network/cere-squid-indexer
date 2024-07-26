module.exports = class Data1721994858655 {
    name = 'Data1721994858655'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_bucket" ("id" character varying NOT NULL, "bucket_id" numeric NOT NULL, "cluster_id" text NOT NULL, "is_public" boolean NOT NULL, "is_removed" boolean NOT NULL, "transferred_bytes" numeric NOT NULL, "stored_bytes" numeric NOT NULL, "number_of_puts" numeric NOT NULL, "number_of_gets" numeric NOT NULL, "owner_id_id" character varying, CONSTRAINT "PK_6d33780d47ec0e7960c90e5b69f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_16f64a1893b3288a5481259a36" ON "ddc_bucket" ("bucket_id") `)
        await db.query(`CREATE INDEX "IDX_067d6b769b76b1151bdb3d4e9b" ON "ddc_bucket" ("owner_id_id") `)
        await db.query(`CREATE INDEX "IDX_0d44a7c0c386c727894c1854be" ON "ddc_bucket" ("cluster_id") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "cere_free_balance" numeric NOT NULL, "ddc_active_balance" numeric NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD CONSTRAINT "FK_067d6b769b76b1151bdb3d4e9b1" FOREIGN KEY ("owner_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_bucket"`)
        await db.query(`DROP INDEX "public"."IDX_16f64a1893b3288a5481259a36"`)
        await db.query(`DROP INDEX "public"."IDX_067d6b769b76b1151bdb3d4e9b"`)
        await db.query(`DROP INDEX "public"."IDX_0d44a7c0c386c727894c1854be"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP CONSTRAINT "FK_067d6b769b76b1151bdb3d4e9b1"`)
    }
}
