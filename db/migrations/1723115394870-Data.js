module.exports = class Data1723115394870 {
    name = 'Data1723115394870'

    async up(db) {
        await db.query(`ALTER TABLE "ddc_node" ALTER COLUMN "ssl" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "ddc_node" ALTER COLUMN "ssl" SET NOT NULL`)
    }
}
