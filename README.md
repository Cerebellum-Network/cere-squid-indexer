# Cere Squid Indexer

This is an indexer for [Cerebellum Network](https://www.cere.network/) build using [Subsquid](https://subsquid.io/) [squid-sdk](https://github.com/subsquid/squid-sdk).

## Indexed data

1. Balance transfers,
2. DDC Customers bucket owners relation to bucket IDs.

## Usage

Example commands below use [sqd](https://docs.subsquid.io/squid-cli/).
Please [install](https://docs.subsquid.io/squid-cli/installation/) it before proceeding.

```bash
# 1. Install dependencies
npm ci

# 2. Start target Postgres database from `docker-compose.yml` and detach
sqd up

# 3. Apply database migrations, load .env, and start the squid processor
sqd process

# 4. Start the GraphQL server
sqd serve
```

A GraphiQL playground will be available at [127.0.0.1:4350/graphql](http://localhost:4350/graphql).

## How to extend the processor

Read the docs first: [Simple Substrate squid](https://docs.subsquid.io/sdk/tutorials/substrate/).

### 1. Update database schema

Start by updating the schema of the target database via `schema.graphql`.
Schema definition consists of regular graphql type declarations annotated with custom directives.
Full description of `schema.graphql` dialect is available [here](https://docs.subsquid.io/store/postgres/schema-file/).

### 2. Regenerate TypeORM classes

Mapping developers use [TypeORM](https://typeorm.io) entities
to interact with the target database during data processing. All necessary entity classes are
[generated](https://docs.subsquid.io/store/postgres/schema-file/intro/) by the squid framework from `schema.graphql`. This is done by running `sqd codegen` command.

### 3. Generate database migration

All database changes are applied through migration files located at `db/migrations`.
`squid-typeorm-migration(1)` tool provides several commands to drive the process.
It is all [TypeORM](https://typeorm.io/#/migrations) under the hood.

```bash
# Connect to database, analyze its state and generate migration to match the target schema.
# The target schema is derived from entity classes generated earlier.
# Don't forget to compile your entity classes beforehand!
npx squid-typeorm-migration generate

# Create template file for custom database changes
npx squid-typeorm-migration create

# Apply database migrations from `db/migrations`
npx squid-typeorm-migration apply

# Revert the last performed migration
npx squid-typeorm-migration revert         
```

### 4. Extend processor

Now extend the processor adding your events listening and RPC requests to `getEventsInfo` in `src/main.ts` to compose
im-memory data for the indexer and persist it in the `processor.run` callback.

## Project conventions

Squid tools assume a certain project layout.

* All compiled js files must reside in `lib` and all TypeScript sources in `src`.
The layout of `lib` must reflect `src`.
* All TypeORM classes must be exported by `src/model/index.ts` (`lib/model` module).
* Database schema must be defined in `schema.graphql`.
* Database migrations must reside in `db/migrations` and must be plain js files.
* `squid-*(1)` executables consult `.env` file for a number of environment variables.

See the [full description](https://docs.subsquid.io/basics/squid-structure/) in the documentation.

## Runtime metadata

In order to add new blockchain or if there was a runtime upgrade of an existing blockchain we should add the blockchain
specification file with the runtime metadata.
Create blockchain specification file for `typegen.json` using [substrate-metadata-explorer](https://github.com/subsquid/squid-sdk/tree/master/substrate/substrate-metadata-explorer).

```bash
npx @subsquid/substrate-metadata-explorer --rpc $RPC_WS --out specs/out.jsonl
```
