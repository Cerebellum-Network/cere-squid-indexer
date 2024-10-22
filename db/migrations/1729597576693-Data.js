module.exports = class Data1729597576693 {
    name = 'Data1729597576693'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_customer_deposit" ("id" character varying NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "amount" numeric NOT NULL, "account_id_id" character varying, CONSTRAINT "PK_06d927aee2abc69652853515725" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5f688e078889917be4732ade71" ON "ddc_customer_deposit" ("account_id_id") `)
        await db.query(`CREATE INDEX "IDX_8736430cd5c9f0802ab319c412" ON "ddc_customer_deposit" ("block_timestamp", "amount") `)
        await db.query(`CREATE TABLE "ddc_customer_charge" ("id" character varying NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "amount" numeric NOT NULL, "account_id_id" character varying, CONSTRAINT "PK_8ea116156bd184ae6562ab4ec1c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_dd29caa38eb21330313a488320" ON "ddc_customer_charge" ("account_id_id") `)
        await db.query(`CREATE INDEX "IDX_6e14d7e766037ec89c1f64a9a4" ON "ddc_customer_charge" ("block_timestamp", "amount") `)
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD CONSTRAINT "FK_5f688e078889917be4732ade716" FOREIGN KEY ("account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_customer_charge" ADD CONSTRAINT "FK_dd29caa38eb21330313a4883208" FOREIGN KEY ("account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_customer_deposit"`)
        await db.query(`DROP INDEX "public"."IDX_5f688e078889917be4732ade71"`)
        await db.query(`DROP INDEX "public"."IDX_8736430cd5c9f0802ab319c412"`)
        await db.query(`DROP TABLE "ddc_customer_charge"`)
        await db.query(`DROP INDEX "public"."IDX_dd29caa38eb21330313a488320"`)
        await db.query(`DROP INDEX "public"."IDX_6e14d7e766037ec89c1f64a9a4"`)
        await db.query(`DROP INDEX "public"."IDX_32e2c1d3ddd2960a09dc90c9ea"`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" DROP CONSTRAINT "FK_5f688e078889917be4732ade716"`)
        await db.query(`ALTER TABLE "ddc_customer_charge" DROP CONSTRAINT "FK_dd29caa38eb21330313a4883208"`)
    }
}
