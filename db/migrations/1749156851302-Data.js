module.exports = class Data1749156851302 {
    name = 'Data1749156851302'

    async up(db) {
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_ca9dedb052ca81adfccbc39fbe" ON "ddc_customer_balance" ("cluster_id_id") `)
        
        // Add foreign keys only if they don't exist
        const constraints = await db.query(`
            SELECT constraint_name 
            FROM information_schema.table_constraints 
            WHERE table_name IN ('ddc_customer_deposit', 'ddc_customer_charge', 'ddc_customer_balance') 
            AND constraint_type = 'FOREIGN KEY'
        `);
        const constraintNames = constraints.map(c => c.constraint_name);
        
        if (!constraintNames.includes('FK_af8fe27f971e9124a51981616e5')) {
            await db.query(`ALTER TABLE "ddc_customer_deposit" ADD CONSTRAINT "FK_af8fe27f971e9124a51981616e5" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        }
        if (!constraintNames.includes('FK_5084ae743a4acb268ff17f38ad2')) {
            await db.query(`ALTER TABLE "ddc_customer_charge" ADD CONSTRAINT "FK_5084ae743a4acb268ff17f38ad2" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        }
        if (!constraintNames.includes('FK_032cefd815a90a428652df124a9')) {
            await db.query(`ALTER TABLE "ddc_customer_balance" ADD CONSTRAINT "FK_032cefd815a90a428652df124a9" FOREIGN KEY ("account_id_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        }
        if (!constraintNames.includes('FK_ca9dedb052ca81adfccbc39fbe3')) {
            await db.query(`ALTER TABLE "ddc_customer_balance" ADD CONSTRAINT "FK_ca9dedb052ca81adfccbc39fbe3" FOREIGN KEY ("cluster_id_id") REFERENCES "ddc_cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        }
    }

    async down(db) {
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_ca9dedb052ca81adfccbc39fbe"`)
        await db.query(`ALTER TABLE "ddc_customer_deposit" DROP CONSTRAINT IF EXISTS "FK_af8fe27f971e9124a51981616e5"`)
        await db.query(`ALTER TABLE "ddc_customer_charge" DROP CONSTRAINT IF EXISTS "FK_5084ae743a4acb268ff17f38ad2"`)
        await db.query(`ALTER TABLE "ddc_customer_balance" DROP CONSTRAINT IF EXISTS "FK_032cefd815a90a428652df124a9"`)
        await db.query(`ALTER TABLE "ddc_customer_balance" DROP CONSTRAINT IF EXISTS "FK_ca9dedb052ca81adfccbc39fbe3"`)
    }
} 