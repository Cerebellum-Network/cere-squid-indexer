const { ApiPromise, WsProvider } = require('@polkadot/api');

async function findSafeStartBlock() {
    const rpcEndpoint = process.env.RPC_CERE_HTTP || 'wss://archive.devnet.cere.network/ws';

    console.log(`🔗 Connecting to ${rpcEndpoint}...`);

    try {
        const wsProvider = new WsProvider(rpcEndpoint);
        const api = await ApiPromise.create({ provider: wsProvider });

        const header = await api.rpc.chain.getHeader();
        const currentBlock = header.number.toNumber();

        console.log(`📊 Current block: ${currentBlock}`);

        const candidateBlocks = [
            currentBlock - 1000,
            currentBlock - 5000,
            currentBlock - 10000,
            2300000,
            2200000,
            2000000,
            1500000,
            1000000,
            500000,
            100000,
            14909
        ];

        for (const blockNum of candidateBlocks) {
            if (blockNum <= 0) continue;

            try {
                console.log(`🔍 Testing block ${blockNum}...`);

                const blockHash = await api.rpc.chain.getBlockHash(blockNum);

                const block = await api.rpc.chain.getBlock(blockHash);

                if (block && block.block && block.block.extrinsics) {
                    console.log(`✅ Block ${blockNum} appears safe (${block.block.extrinsics.length} extrinsics)`);

                    const runtimeVersion = await api.rpc.state.getRuntimeVersion(blockHash);
                    console.log(`   Runtime spec: ${runtimeVersion.specName} v${runtimeVersion.specVersion}`);

                    await api.disconnect();
                    return blockNum;
                }
            } catch (error) {
                console.log(`❌ Block ${blockNum} failed: ${error.message}`);
            }
        }

        await api.disconnect();
        console.log(`⚠️ No safe block found, defaulting to 14909`);
        return 14909;

    } catch (error) {
        console.error('❌ Error finding safe block:', error.message);
        return 14909; // Fallback
    }
}

if (require.main === module) {
    findSafeStartBlock().then(block => {
        console.log(`🎯 Recommended safe starting block: ${block}`);
    });
}

module.exports = { findSafeStartBlock };
