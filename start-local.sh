#!/bin/bash

echo "🚀 Starting Cere Squid Indexer locally..."

# Function to check if port is in use
check_port() {
    lsof -i :$1 > /dev/null 2>&1
}

# Start PostgreSQL database
echo "🗄️ Starting PostgreSQL database..."
sqd up:db

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 5

# Apply migrations
echo "🔄 Applying database migrations..."
sqd migration:apply

# Start processor in background
echo "⚙️ Starting processor..."
sqd process &
PROCESSOR_PID=$!

# Wait a bit for processor to start
sleep 3

# Start GraphQL server in background
echo "🌐 Starting GraphQL server..."
sqd serve &
SERVER_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for GraphQL server to be ready..."
sleep 5

if check_port 4350; then
    echo "✅ All services started successfully!"
    echo ""
    echo "📊 GraphQL Playground: http://localhost:4350/graphql"
    echo "🔍 Database: localhost:5432 (user: postgres, password: postgres, db: squid)"
    echo ""
    echo "Press Ctrl+C to stop all services"
    
    # Trap Ctrl+C and kill background processes
    trap 'echo "🛑 Stopping services..."; kill $PROCESSOR_PID $SERVER_PID 2>/dev/null; sqd down; exit 0' INT
    
    # Keep script running
    wait
else
    echo "❌ Failed to start GraphQL server on port 4350"
    kill $PROCESSOR_PID 2>/dev/null
    sqd down
    exit 1
fi 