#!/bin/bash

echo "🛠️ Fixing Cere Squid Indexer database issues..."

# Stop all services
echo "🛑 Stopping all services..."
sqd down
sleep 2

# Kill any remaining processes
echo "🔥 Killing any remaining processes..."
pkill -f "sqd process" 2>/dev/null || true
pkill -f "sqd serve" 2>/dev/null || true

# Remove Docker containers and volumes to ensure clean state
echo "🧹 Cleaning Docker containers and volumes..."
docker-compose down -v --remove-orphans 2>/dev/null || true
docker volume prune -f 2>/dev/null || true

# Clean build artifacts
echo "🗑️ Cleaning build artifacts..."
rm -rf lib
rm -rf node_modules/.cache 2>/dev/null || true

# Clean migrations completely
echo "🧽 Cleaning migrations..."
sqd migration:clean
rm -rf db/migrations/*
rm -rf db/*.js 2>/dev/null || true

# Check .env file
if [ ! -f .env ]; then
    echo "❌ .env file not found. Creating default..."
    # Get current block for better starting point
    CURRENT_BLOCK=$(node get-current-block.js 2>/dev/null | grep "Current block:" | awk '{print $3}')
    if [ ! -z "$CURRENT_BLOCK" ]; then
        START_BLOCK=$((CURRENT_BLOCK - 100))
    else
        START_BLOCK=2388281  # Fallback to recent block
    fi

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
    echo "✅ Created .env with starting block: $START_BLOCK"
fi

# Show current .env settings
echo "📋 Current .env settings:"
grep "SQD_FIRST_BLOCK\|DB_NAME\|RPC_CERE_HTTP" .env

# Rebuild project
echo "🔨 Rebuilding project..."
npm run build

# Generate TypeORM entities
echo "🏗️ Generating TypeORM entities..."
npx sqd codegen

# Start database
echo "🗄️ Starting fresh database..."
sqd up:db

# Wait for database to be ready
echo "⏳ Waiting for database to start..."
sleep 10

# Generate migrations
echo "📝 Generating database migrations..."
npx sqd migration:generate

# Check if migrations were created
if [ ! -d "db/migrations" ] || [ -z "$(ls -A db/migrations)" ]; then
    echo "❌ Migration generation failed!"
    echo "🔍 Checking for issues..."
    ls -la db/
    exit 1
fi

echo "✅ Migrations generated successfully:"
ls -la db/migrations/

# Apply migrations
echo "🚀 Applying database migrations..."
sqd migration:apply

echo "✅ Database fix complete!"
echo ""
echo "📊 Configuration:"
START_BLOCK=$(grep "SQD_FIRST_BLOCK" .env | cut -d'=' -f2)
echo "   - Starting from block: $START_BLOCK"
echo ""
echo "🚀 Ready to start!"
echo "Run: ./start-local.sh"
