const { ApiPromise, WsProvider } = require('@polkadot/api');

async function getCurrentBlock() {
    const rpcEndpoint = process.env.RPC_CERE_HTTP || 'wss://archive.devnet.cere.network/ws';

    console.log(`🔗 Connecting to ${rpcEndpoint}...`);

    try {
        const wsProvider = new WsProvider(rpcEndpoint);
        const api = await ApiPromise.create({ provider: wsProvider });

        const header = await api.rpc.chain.getHeader();
        const currentBlock = header.number.toNumber();

        console.log(`📊 Current block: ${currentBlock}`);
        console.log(`🎯 Suggested FIRST_BLOCK: ${currentBlock - 100}`);

        await api.disconnect();

        return currentBlock;
    } catch (error) {
        console.error('❌ Error getting current block:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    getCurrentBlock();
}

module.exports = { getCurrentBlock };
