module.exports = class Data1723182802615 {
    name = 'Data1723182802615'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_16f64a1893b3288a5481259a36"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "bucket_id"`)
    }

    async down(db) {
        await db.query(`CREATE UNIQUE INDEX "IDX_16f64a1893b3288a5481259a36" ON "ddc_bucket" ("bucket_id") `)
        await db.query(`ALTER TABLE "ddc_bucket" ADD "bucket_id" numeric`)
        await db.query(`UPDATE "ddc_bucket" SET "bucket_id" = CAST("id" as numeric)`)
        await db.query(`ALTER TABLE "ddc_bucket" ALTER COLUMN "bucket_id" SET NOT NULL`)
    }
}
