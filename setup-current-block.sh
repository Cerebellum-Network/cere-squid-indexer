#!/bin/bash

echo "🚀 Setting up Cere Squid Indexer from current block..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found. Run ./local-setup.sh first!"
    exit 1
fi

# Get current block
echo "📊 Getting current block number..."
CURRENT_BLOCK=$(node get-current-block.js | grep "Current block:" | awk '{print $3}')

if [ -z "$CURRENT_BLOCK" ]; then
    echo "❌ Failed to get current block number"
    exit 1
fi

# Calculate starting block (100 blocks ago for safety)
START_BLOCK=$((CURRENT_BLOCK - 100))

echo "📈 Current block: $CURRENT_BLOCK"
echo "🎯 Starting from block: $START_BLOCK"

# Update .env file
echo "📝 Updating .env file..."
sed -i.bak "s/SQD_FIRST_BLOCK=.*/SQD_FIRST_BLOCK=$START_BLOCK/" .env

echo "🗑️ Stopping current services..."
sqd down 2>/dev/null || true

echo "🧹 Cleaning up database..."
# Clean existing data
sqd migration:clean
rm -rf db/migrations/*

echo "🔨 Rebuilding..."
npm run build

echo "🏗️ Generating fresh migrations..."
sqd codegen
sqd migration:generate

echo "✅ Setup complete!"
echo ""
echo "📊 Configuration:"
echo "   - Starting from block: $START_BLOCK"
echo "   - Current block: $CURRENT_BLOCK"
echo ""
echo "🚀 Ready to start indexing from current block!"
echo "Run: ./start-local.sh" 