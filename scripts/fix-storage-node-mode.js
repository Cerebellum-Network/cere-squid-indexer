const pg = require('pg');
const { ApiPromise, WsProvider } = require('@polkadot/api');

const BLOCKCHAIN_RPC_ENDPOINT = process.env.RPC_CERE_HTTP ?? (console.log('RPC_CERE_HTTP not set.') || process.exit(1));
const DB_HOST = process.env.DB_HOST ?? (console.log('DB_HOST not set.') || process.exit(1));
const DB_PASS = process.env.DB_PASS ?? (console.log('DB_PASS not set.') || process.exit(1));

async function main() {
    console.log(`Connecting to blockchain RPC endpoint at ${BLOCKCHAIN_RPC_ENDPOINT}.`);

    const wsProvider = new WsProvider(BLOCKCHAIN_RPC_ENDPOINT);
    const api = await ApiPromise.create({ provider: wsProvider });

    const chainStorageNodes = await api.query.ddcNodes.storageNodes.entries();
    console.log(`${chainStorageNodes.length} storage nodes found on chain.`);

    const chainStorageNodeModes = new Map();

    chainStorageNodes.forEach(async ([id, node]) => {
        id = id.toString().slice(-64) // remove module prefix
        chainStorageNodeModes.set(id, node.toJSON().props.mode.toString());
    });

    console.log(`Connecting to squid database at ${DB_HOST}.`);

    const db = new pg.Client({
        user: 'squid',
        password: DB_PASS,
        host: DB_HOST,
        database: 'squid',
    });
    await db.connect();

    const res = await db.query('select * from ddc_node limit 1000');
    console.log(`${res.rows.length} storage nodes found in squid database.`);

    for (const row of res.rows) {
        let { id, mode } = row;
        id = id.slice(2); // remove 0x prefix

        if (!chainStorageNodeModes.has(id)) {
            console.log(`Node ${id} not found on chain.`);
            continue;
        }

        const chainMode = chainStorageNodeModes.get(id);
        if (mode !== chainMode) {
            console.log(`Updating node ${id} mode from ${mode} to ${chainMode}.`);
            await db.query('update ddc_node set mode=$1 where id=$2', [chainMode, '0x' + id]);
        } else {
            console.log(`Skipping node ${id}, mode is already set to ${chainMode}.`);
        }
        chainStorageNodeModes.delete(id);
    }

    if (chainStorageNodeModes.size > 0) {
        console.log(`Nodes not found in db: ${chainStorageNodeModes}.`);
    }

    await db.end();
    console.log('Done.');
    process.exit(0);
}

main()
