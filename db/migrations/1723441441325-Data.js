module.exports = class Data1723441441325 {
    name = 'Data1723441441325'

    async up(db) {
        await db.query(`ALTER TABLE "ddc_node" ADD "transferred_bytes" numeric NOT NULL DEFAULT 0`)
        await db.query(`ALTER TABLE "ddc_node" ADD "stored_bytes" numeric NOT NULL DEFAULT 0`)
        await db.query(`ALTER TABLE "ddc_node" ADD "number_of_puts" numeric NOT NULL DEFAULT 0`)
        await db.query(`ALTER TABLE "ddc_node" ADD "number_of_gets" numeric NOT NULL DEFAULT 0`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "transferred_bytes"`)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "stored_bytes"`)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "number_of_puts"`)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "number_of_gets"`)
    }
}
