#!/bin/bash

echo "🚀 Setting up Cere Squid Indexer locally..."

# Get current block for better starting point
echo "📊 Getting current block number..."
if command -v node &> /dev/null; then
    CURRENT_BLOCK=$(node get-current-block.js 2>/dev/null | grep "Current block:" | awk '{print $3}')
    if [ ! -z "$CURRENT_BLOCK" ]; then
        START_BLOCK=$((CURRENT_BLOCK - 1000))  # Start 1000 blocks ago for some history
        echo "📈 Current block: $CURRENT_BLOCK, starting from: $START_BLOCK"
    else
        START_BLOCK=14909  # Fallback to default
        echo "⚠️ Could not get current block, using default: $START_BLOCK"
    fi
else
    START_BLOCK=14909  # Fallback if node not available
    echo "⚠️ Node.js not found, using default starting block: $START_BLOCK"
fi

# Create .env file
echo "📝 Creating .env file..."
cat > .env << EOF
# Database configuration
DB_NAME=squid
DB_HOST=localhost
DB_PORT=5432
DB_PASS=postgres

# RPC endpoint for Cere Network
RPC_CERE_HTTP=wss://archive.devnet.cere.network/ws

# Processor configuration
SQD_RATE_LIMIT=500
SQD_CAPACITY=10
SQD_FIRST_BLOCK=$START_BLOCK
SQD_LAST_BLOCK=0

# GraphQL server configuration
GQL_PORT=4350

# Types bundle path
TYPES_BUNDLE=./specs/cere-types-bundle.json
EOF

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building the project..."
npm run build

# Generate TypeORM entities
echo "🏗️ Generating TypeORM entities..."
npx sqd codegen

# Generate database migrations
echo "🗃️ Generating database migrations..."
npx sqd migration:generate

echo "✅ Setup complete!"
echo ""
echo "📊 Configuration:"
echo "   - Starting from block: $START_BLOCK"
echo ""
echo "Next steps:"
echo "1. Start the database: sqd up:db"
echo "2. Start the processor: sqd process"
echo "3. In a new terminal, start the GraphQL server: sqd serve"
echo "4. Open GraphQL playground: sqd open (or visit http://localhost:4350/graphql)"
echo ""
echo "💡 To start from current block instead: ./setup-current-block.sh"
