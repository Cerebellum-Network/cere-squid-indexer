module.exports = class Data1724138300437 {
    name = 'Data1724138300437'

    async up(db) {
        await db.query(`ALTER TABLE "ddc_node" ADD "created_at" integer NOT NULL DEFAULT -1`)
        await db.query(`ALTER TABLE "ddc_cluster" ADD "created_at" integer NOT NULL DEFAULT -1`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD "created_at" integer NOT NULL DEFAULT -1`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "created_at"`)
        await db.query(`ALTER TABLE "ddc_cluster" DROP COLUMN "created_at"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "created_at"`)
    }
}
