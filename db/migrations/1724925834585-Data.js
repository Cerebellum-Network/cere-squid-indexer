module.exports = class Data1724925834585 {
    name = 'Data1724925834585'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_node_usage" ("id" character varying NOT NULL, "block_height" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transferred_bytes" numeric NOT NULL, "stored_bytes" numeric NOT NULL, "number_of_puts" numeric NOT NULL, "number_of_gets" numeric NOT NULL, "node_id_id" character varying, CONSTRAINT "PK_dfceab093bb128b52f5cd8e6d12" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e6a95135619abec6f2709a6b46" ON "ddc_node_usage" ("node_id_id") `)
        await db.query(`CREATE INDEX "IDX_5dc38bea73b28204e126269464" ON "ddc_node_usage" ("block_timestamp", "node_id_id") `)
        await db.query(`CREATE INDEX "IDX_99b2703637573b9471afbb613c" ON "ddc_node_usage" ("block_height", "node_id_id") `)
        await db.query(`CREATE TABLE "ddc_bucket_usage" ("id" character varying NOT NULL, "block_height" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transferred_bytes" numeric NOT NULL, "stored_bytes" numeric NOT NULL, "number_of_puts" numeric NOT NULL, "number_of_gets" numeric NOT NULL, "bucket_id_id" character varying, CONSTRAINT "PK_d2377f2c662e06303acd71351dc" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_20c7e1cc99e11e1a6b19bc50c4" ON "ddc_bucket_usage" ("bucket_id_id") `)
        await db.query(`CREATE INDEX "IDX_14486b3bf0d3f1d1cee1bf9205" ON "ddc_bucket_usage" ("block_timestamp", "bucket_id_id") `)
        await db.query(`CREATE INDEX "IDX_2643c5969c6d226f06b49e4b58" ON "ddc_bucket_usage" ("block_height", "bucket_id_id") `)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "transferred_bytes"`)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "stored_bytes"`)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "number_of_puts"`)
        await db.query(`ALTER TABLE "ddc_node" DROP COLUMN "number_of_gets"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "transferred_bytes"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "stored_bytes"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "number_of_puts"`)
        await db.query(`ALTER TABLE "ddc_bucket" DROP COLUMN "number_of_gets"`)
        await db.query(`ALTER TABLE "ddc_node_usage" ADD CONSTRAINT "FK_e6a95135619abec6f2709a6b463" FOREIGN KEY ("node_id_id") REFERENCES "ddc_node"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "ddc_bucket_usage" ADD CONSTRAINT "FK_20c7e1cc99e11e1a6b19bc50c48" FOREIGN KEY ("bucket_id_id") REFERENCES "ddc_bucket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_node_usage"`)
        await db.query(`DROP INDEX "public"."IDX_e6a95135619abec6f2709a6b46"`)
        await db.query(`DROP INDEX "public"."IDX_5dc38bea73b28204e126269464"`)
        await db.query(`DROP INDEX "public"."IDX_99b2703637573b9471afbb613c"`)
        await db.query(`DROP TABLE "ddc_bucket_usage"`)
        await db.query(`DROP INDEX "public"."IDX_20c7e1cc99e11e1a6b19bc50c4"`)
        await db.query(`DROP INDEX "public"."IDX_14486b3bf0d3f1d1cee1bf9205"`)
        await db.query(`DROP INDEX "public"."IDX_2643c5969c6d226f06b49e4b58"`)
        await db.query(`ALTER TABLE "ddc_node" ADD "transferred_bytes" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_node" ADD "stored_bytes" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_node" ADD "number_of_puts" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_node" ADD "number_of_gets" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD "transferred_bytes" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD "stored_bytes" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD "number_of_puts" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_bucket" ADD "number_of_gets" numeric NOT NULL DEFAULT '0'`)
        await db.query(`ALTER TABLE "ddc_node_usage" DROP CONSTRAINT "FK_e6a95135619abec6f2709a6b463"`)
        await db.query(`ALTER TABLE "ddc_bucket_usage" DROP CONSTRAINT "FK_20c7e1cc99e11e1a6b19bc50c48"`)
    }
}
