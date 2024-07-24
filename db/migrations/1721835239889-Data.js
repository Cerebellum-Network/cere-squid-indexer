module.exports = class Data1721835239889 {
    name = 'Data1721835239889'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "ddc_balance" numeric NOT NULL DEFAULT 0`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "ddc_balance"`)
    }
}
