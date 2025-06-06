module.exports = class Data1749110980808 {
    name = 'Data1749110980808'

    async up(db) {
        // Use conditional drops to avoid errors if indexes don't exist
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_e3686189dd530c258c22f53757"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_a479afd4b41e2dbe1ed1a81b1f"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_b68a9202651b08715ba6c0c051"`)
        
        // Add column to ddc_customer_charge only if it exists
        const hasChargeTable = await db.query(`SELECT to_regclass('public.ddc_customer_charge') IS NOT NULL as exists`);
        if (hasChargeTable && hasChargeTable[0]?.exists) {
            const hasExpectedColumn = await db.query(`SELECT column_name FROM information_schema.columns WHERE table_name='ddc_customer_charge' AND column_name='expected_to_charge'`);
            if (hasExpectedColumn && hasExpectedColumn.length > 0) {
                await db.query(`ALTER TABLE "ddc_customer_charge" DROP COLUMN "expected_to_charge"`)
            }
        }
        
        // Check if account table exists and add ddc_active_balance column
        const hasAccountTable = await db.query(`SELECT to_regclass('public.account') IS NOT NULL as exists`);
        if (hasAccountTable && hasAccountTable[0]?.exists) {
            const hasColumn = await db.query(`SELECT column_name FROM information_schema.columns WHERE table_name='account' AND column_name='ddc_active_balance'`);
            if (!hasColumn || hasColumn.length === 0) {
                // Add ddc_active_balance column as nullable first
                await db.query(`ALTER TABLE "account" ADD "ddc_active_balance" numeric`)
                // Set default value for existing records
                await db.query(`UPDATE "account" SET "ddc_active_balance" = 0 WHERE "ddc_active_balance" IS NULL`)
                // Make column NOT NULL after setting values
                await db.query(`ALTER TABLE "account" ALTER COLUMN "ddc_active_balance" SET NOT NULL`)
            }
        }
        
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_32e2c1d3ddd2960a09dc90c9ea"`)
        
        // Add missing tables if they don't exist
        await db.query(`CREATE TABLE IF NOT EXISTS "ddc_customer_deposit" (
            "id" character varying NOT NULL,
            "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
            "amount" numeric NOT NULL,
            "cluster_id_id" character varying,
            "account_id_id" character varying,
            CONSTRAINT "PK_06d927aee2abc69652853515725" PRIMARY KEY ("id")
        )`)
        
        await db.query(`CREATE TABLE IF NOT EXISTS "ddc_customer_charge" (
            "id" character varying NOT NULL,
            "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
            "amount" numeric NOT NULL,
            "cluster_id_id" character varying,
            "account_id_id" character varying,
            CONSTRAINT "PK_8ea116156bd184ae6562ab4ec1c" PRIMARY KEY ("id")
        )`)
        
        await db.query(`CREATE TABLE IF NOT EXISTS "ddc_customer_balance" (
            "id" character varying NOT NULL,
            "active_balance" numeric NOT NULL,
            "cluster_id_id" character varying,
            "account_id_id" character varying,
            CONSTRAINT "PK_8ea116156bd184ae6562ab4ec1d" PRIMARY KEY ("id")
        )`)
        
        // Add cluster_id_id column to existing tables if they don't have it
        const hasDepositClusterColumn = await db.query(`SELECT column_name FROM information_schema.columns WHERE table_name='ddc_customer_deposit' AND column_name='cluster_id_id'`);
        if (!hasDepositClusterColumn || hasDepositClusterColumn.length === 0) {
            await db.query(`ALTER TABLE "ddc_customer_deposit" ADD "cluster_id_id" character varying`)
        }
        
        const hasChargeClusterColumn = await db.query(`SELECT column_name FROM information_schema.columns WHERE table_name='ddc_customer_charge' AND column_name='cluster_id_id'`);
        if (!hasChargeClusterColumn || hasChargeClusterColumn.length === 0) {
            await db.query(`ALTER TABLE "ddc_customer_charge" ADD "cluster_id_id" character varying`)
        }
        
        // Check if bucket table exists before altering
        const hasBucketTable = await db.query(`SELECT to_regclass('public.ddc_bucket') IS NOT NULL as exists`);
        if (hasBucketTable && hasBucketTable[0]?.exists) {
            await db.query(`ALTER TABLE "ddc_bucket" ALTER COLUMN "created_at_block_height" DROP DEFAULT`)
            await db.query(`ALTER TABLE "ddc_bucket" ALTER COLUMN "created_at_block_timestamp" DROP DEFAULT`)
        }
        
        // Check if node table exists before altering
        const hasNodeTable = await db.query(`SELECT to_regclass('public.ddc_node') IS NOT NULL as exists`);
        if (hasNodeTable && hasNodeTable[0]?.exists) {
            await db.query(`ALTER TABLE "ddc_node" ALTER COLUMN "created_at_block_height" DROP DEFAULT`)
        }
        
        // Check if cluster table exists before altering
        const hasClusterTable = await db.query(`SELECT to_regclass('public.ddc_cluster') IS NOT NULL as exists`);
        if (hasClusterTable && hasClusterTable[0]?.exists) {
            await db.query(`ALTER TABLE "ddc_cluster" ALTER COLUMN "created_at_block_height" DROP DEFAULT`)
        }
        
        // Create indexes
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_32e2c1d3ddd2960a09dc90c9ea" ON "ddc_bucket" ("created_at_block_timestamp", "id")`)
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_af8fe27f971e9124a51981616e" ON "ddc_customer_deposit" ("cluster_id_id")`)
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_5084ae743a4acb268ff17f38ad" ON "ddc_customer_charge" ("cluster_id_id")`)
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_032cefd815a90a428652df124a" ON "ddc_customer_balance" ("account_id_id")`)
    }

    async down(db) {
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_e3686189dd530c258c22f53757" ON "ddc_customer_deposit" ("account_id_id", "cluster_id_id")`)
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_a479afd4b41e2dbe1ed1a81b1f" ON "ddc_customer_charge" ("account_id_id", "cluster_id_id")`)
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_b68a9202651b08715ba6c0c051" ON "ddc_customer_balance" ("account_id_id", "cluster_id_id")`)
        await db.query(`ALTER TABLE "ddc_customer_charge" ADD COLUMN IF NOT EXISTS "expected_to_charge" numeric`)
        await db.query(`ALTER TABLE "account" DROP COLUMN IF EXISTS "ddc_active_balance"`)
        await db.query(`CREATE INDEX IF NOT EXISTS "IDX_32e2c1d3ddd2960a09dc90c9ea" ON "ddc_bucket" ("id", "created_at_block_timestamp")`)
        await db.query(`ALTER TABLE "ddc_bucket" ALTER COLUMN "created_at_block_height" SET DEFAULT '-1'`)
        await db.query(`ALTER TABLE "ddc_bucket" ALTER COLUMN "created_at_block_timestamp" SET DEFAULT now()`)
        await db.query(`ALTER TABLE "ddc_node" ALTER COLUMN "created_at_block_height" SET DEFAULT '-1'`)
        await db.query(`ALTER TABLE "ddc_cluster" ALTER COLUMN "created_at_block_height" SET DEFAULT '-1'`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_32e2c1d3ddd2960a09dc90c9ea"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_af8fe27f971e9124a51981616e"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_5084ae743a4acb268ff17f38ad"`)
        await db.query(`DROP INDEX IF EXISTS "public"."IDX_032cefd815a90a428652df124a"`)
    }
}
