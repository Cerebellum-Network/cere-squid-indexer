module.exports = class Data1725360244872 {
    name = 'Data1725360244872'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_customer_usage" ("id" character varying NOT NULL, "block_height" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transferred_bytes" numeric NOT NULL, "stored_bytes" numeric NOT NULL, "number_of_puts" numeric NOT NULL, "number_of_gets" numeric NOT NULL, "account_id_id" character varying, CONSTRAINT "PK_f7f3890bc58de220e85a2776ce0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5c86c1a4b75db103666e7c8caf" ON "ddc_customer_usage" ("account_id_id") `)
        await db.query(`CREATE INDEX "IDX_3cf2d1d8fa2dba16915ba9bf68" ON "ddc_customer_usage" ("block_timestamp", "account_id_id") `)
        await db.query(`CREATE INDEX "IDX_c28f4371cd0db68b449e151b89" ON "ddc_customer_usage" ("block_height", "account_id_id") `)
        await db.query(`ALTER TABLE "ddc_customer_usage" ADD CONSTRAINT "FK_5c86c1a4b75db103666e7c8caf7" FOREIGN KEY ("account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_customer_usage"`)
        await db.query(`DROP INDEX "public"."IDX_5c86c1a4b75db103666e7c8caf"`)
        await db.query(`DROP INDEX "public"."IDX_3cf2d1d8fa2dba16915ba9bf68"`)
        await db.query(`DROP INDEX "public"."IDX_c28f4371cd0db68b449e151b89"`)
        await db.query(`ALTER TABLE "ddc_customer_usage" DROP CONSTRAINT "FK_5c86c1a4b75db103666e7c8caf7"`)
    }
}
