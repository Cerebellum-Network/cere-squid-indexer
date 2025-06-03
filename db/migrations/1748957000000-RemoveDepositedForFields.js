module.exports = class RemoveDepositedForFields1748957000000 {
    name = 'RemoveDepositedForFields1748957000000'

    async up(db) {
        // Remove foreign key constraints first (if they exist)
        try {
            await db.query(`ALTER TABLE "ddc_customer_deposit" DROP CONSTRAINT IF EXISTS "FK_from_account_id"`);
        } catch (error) {
            console.log('FK_from_account_id constraint does not exist, skipping...');
        }
        
        try {
            await db.query(`ALTER TABLE "ddc_customer_deposit" DROP CONSTRAINT IF EXISTS "FK_to_account_id"`);
        } catch (error) {
            console.log('FK_to_account_id constraint does not exist, skipping...');
        }

        // Remove columns if they exist
        try {
            await db.query(`ALTER TABLE "ddc_customer_deposit" DROP COLUMN IF EXISTS "from_account_id_id"`);
        } catch (error) {
            console.log('from_account_id_id column does not exist, skipping...');
        }
        
        try {
            await db.query(`ALTER TABLE "ddc_customer_deposit" DROP COLUMN IF EXISTS "to_account_id_id"`);
        } catch (error) {
            console.log('to_account_id_id column does not exist, skipping...');
        }

        // Remove indexes if they exist
        try {
            await db.query(`DROP INDEX IF EXISTS "IDX_from_account_id"`);
        } catch (error) {
            console.log('IDX_from_account_id index does not exist, skipping...');
        }
        
        try {
            await db.query(`DROP INDEX IF EXISTS "IDX_to_account_id"`);
        } catch (error) {
            console.log('IDX_to_account_id index does not exist, skipping...');
        }

        console.log('Successfully removed DepositedFor fields from ddc_customer_deposit table');
    }

    async down(db) {
        // Add columns back (for rollback)
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD COLUMN "from_account_id_id" character varying`);
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD COLUMN "to_account_id_id" character varying`);
        
        // Add indexes back
        await db.query(`CREATE INDEX "IDX_from_account_id" ON "ddc_customer_deposit" ("from_account_id_id")`);
        await db.query(`CREATE INDEX "IDX_to_account_id" ON "ddc_customer_deposit" ("to_account_id_id")`);
        
        // Add foreign key constraints back
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD CONSTRAINT "FK_from_account_id" FOREIGN KEY ("from_account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await db.query(`ALTER TABLE "ddc_customer_deposit" ADD CONSTRAINT "FK_to_account_id" FOREIGN KEY ("to_account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        
        console.log('Rollback: Added DepositedFor fields back to ddc_customer_deposit table');
    }
} 