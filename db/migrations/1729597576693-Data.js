module.exports = class Data1729597576693 {
    name = 'Data1729597576693'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_customer_deposit" ("id" character varying NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "amount" numeric NOT NULL, "account_id_id" character varying, CONSTRAINT "PK_06d927aee2abc69652853515725" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5f688e078889917be4732ade71" ON "ddc_customer_deposit" ("account_id_id") `)
        await db.query(`CREATE INDEX "IDX_8736430cd5c9f0802ab319c412" ON "ddc_customer_deposit" ("block_timestamp", "amount") `)
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD CONSTRAINT "FK_5f688e078889917be4732ade716" FOREIGN KEY ("account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_customer_deposit"`)
        await db.query(`DROP INDEX "public"."IDX_5f688e078889917be4732ade71"`)
        await db.query(`DROP INDEX "public"."IDX_8736430cd5c9f0802ab319c412"`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" DROP CONSTRAINT "FK_5f688e078889917be4732ade716"`)
    }
}
