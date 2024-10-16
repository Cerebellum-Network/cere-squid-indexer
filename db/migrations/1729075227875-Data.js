module.exports = class Data1729075227875 {
    name = 'Data1729075227875'

    async up(db) {
        await db.query(`ALTER TABLE "ddc_bucket" ADD "created_at_block_timestamp" TIMESTAMP WITH TIME ZONE`)
        await db.query(`CREATE INDEX "IDX_32e2c1d3ddd2960a09dc90c9ea" ON "ddc_bucket" ("created_at_block_timestamp", "id") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "created_at_block_timestamp"`)
        await db.query(`DROP INDEX "public"."IDX_32e2c1d3ddd2960a09dc90c9ea"`)
    }
}
