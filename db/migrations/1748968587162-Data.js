module.exports = class Data1748968587162 {
    name = 'Data1748968587162'

    async up(db) {
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_ebc0cba69c88ae408f9f0bddf7"`)
        await db.query(`
            DO $$ 
            BEGIN 
                IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ddc_customer_deposit' AND column_name = 'cluster_id') THEN
                    ALTER TABLE "ddc_customer_deposit" RENAME COLUMN "cluster_id" TO "cluster_id_id";
                END IF;
            END $$;
        `)
        await db.query(`CREATE TABLE "ddc_customer_balance" ("id" character varying NOT NULL, "active_balance" numeric NOT NULL, "account_id_id" character varying, "cluster_id_id" character varying, CONSTRAINT "PK_6238f3640b65ee23f59c499879b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ca9dedb052ca81adfccbc39fbe" ON "ddc_customer_balance" ("cluster_id_id") `)
        await db.query(`CREATE INDEX "IDX_b68a9202651b08715ba6c0c051" ON "ddc_customer_balance" ("account_id_id", "cluster_id_id") `)
        await db.query(`ALTER TABLE "account" DROP COLUMN IF EXISTS "ddc_active_balance"`)
        await db.query(`ALTER TABLE "ddc_customer_charge" ADD "expected_to_charge" numeric`)
        await db.query(`ALTER TABLE "ddc_customer_charge" ADD "cluster_id_id" character varying`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" DROP COLUMN IF EXISTS "cluster_id_id"`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD "cluster_id_id" character varying`)
        await db.query(`CREATE INDEX "IDX_e3686189dd530c258c22f53757" ON "ddc_customer_deposit" ("cluster_id_id", "account_id_id") `)
        await db.query(`CREATE INDEX "IDX_a479afd4b41e2dbe1ed1a81b1f" ON "ddc_customer_charge" ("cluster_id_id", "account_id_id") `)
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD CONSTRAINT "FK_af8fe27f971e9124a51981616e5" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_customer_charge" ADD CONSTRAINT "FK_5084ae743a4acb268ff17f38ad2" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_customer_balance" ADD CONSTRAINT "FK_032cefd815a90a428652df124a9" FOREIGN KEY ("account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_customer_balance" ADD CONSTRAINT "FK_ca9dedb052ca81adfccbc39fbe3" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_ebc0cba69c88ae408f9f0bddf7" ON "ddc_customer_deposit" ("cluster_id") `)
        await db.query(`
            DO $$ 
            BEGIN 
                IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ddc_customer_deposit' AND column_name = 'cluster_id_id') THEN
                    ALTER TABLE "ddc_customer_deposit" RENAME COLUMN "cluster_id_id" TO "cluster_id";
                END IF;
            END $$;
        `)
        await db.query(`DROP TABLE IF EXISTS "ddc_customer_balance"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_ca9dedb052ca81adfccbc39fbe"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_b68a9202651b08715ba6c0c051"`)
        await db.query(`ALTER TABLE "account" ADD "ddc_active_balance" numeric NOT NULL`)
        await db.query(`ALTER TABLE "ddc_customer_charge" DROP COLUMN IF EXISTS "expected_to_charge"`)
        await db.query(`ALTER TABLE "ddc_customer_charge" DROP COLUMN IF EXISTS "cluster_id_id"`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD "cluster_id_id" text`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" DROP COLUMN IF EXISTS "cluster_id_id"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_e3686189dd530c258c22f53757"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_a479afd4b41e2dbe1ed1a81b1f"`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" DROP CONSTRAINT IF EXISTS "FK_af8fe27f971e9124a51981616e5"`)
        await db.query(`ALTER TABLE "ddc_customer_charge" DROP CONSTRAINT IF EXISTS "FK_5084ae743a4acb268ff17f38ad2"`)
        await db.query(`ALTER TABLE "ddc_customer_balance" DROP CONSTRAINT IF EXISTS "FK_032cefd815a90a428652df124a9"`)
        await db.query(`ALTER TABLE "ddc_customer_balance" DROP CONSTRAINT IF EXISTS "FK_ca9dedb052ca81adfccbc39fbe3"`)
    }
}
