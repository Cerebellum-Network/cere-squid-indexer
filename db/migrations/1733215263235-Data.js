module.exports = class Data1733215263235 {
    name = 'Data1733215263235'

    async up(db) {
        await db.query(`CREATE TABLE "ddc_token_utility_dashboard_view" ("id" character varying NOT NULL, "cluster_id" text NOT NULL, "era_id" integer NOT NULL, "start_time" TIMESTAMP WITH TIME ZONE NOT NULL, "end_time" TIMESTAMP WITH TIME ZONE NOT NULL, "data_stored" numeric NOT NULL, "data_streamed" numeric NOT NULL, "number_of_puts" numeric NOT NULL, "number_of_gets" numeric NOT NULL, "nodes_rewards" numeric NOT NULL, "validators_rewards" numeric NOT NULL, "cm_revards" numeric NOT NULL, "treasury_rewards" numeric NOT NULL, "status" character varying(24), CONSTRAINT "PK_459a0042ae5c9f2f281d7c6fedd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c3150df56a6a59bdd373dd7973" ON "ddc_token_utility_dashboard_view" ("start_time") `)
        await db.query(`CREATE INDEX "IDX_12beab1fe5c22248f0f95aee56" ON "ddc_token_utility_dashboard_view" ("end_time") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_72994efaf45ee7f9db4221e5ea_1" ON "ddc_token_utility_dashboard_view" ("era_id", "cluster_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_72994efaf45ee7f9db4221e5ea_2" ON "ddc_token_utility_dashboard_view" ("cluster_id", "era_id") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "ddc_token_utility_dashboard_view"`)
        await db.query(`DROP INDEX "public"."IDX_c3150df56a6a59bdd373dd7973"`)
        await db.query(`DROP INDEX "public"."IDX_12beab1fe5c22248f0f95aee56"`)
        await db.query(`DROP INDEX "public"."IDX_72994efaf45ee7f9db4221e5ea_1"`)
        await db.query(`DROP INDEX "public"."IDX_72994efaf45ee7f9db4221e5ea_2"`)
    }
}
