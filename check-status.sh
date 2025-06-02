#!/bin/bash

echo "🔍 Cere Squid Indexer Status Check"
echo "=================================="

# Check .env file
if [ -f .env ]; then
    echo "✅ .env file exists"
    START_BLOCK=$(grep "SQD_FIRST_BLOCK" .env | cut -d'=' -f2)
    echo "   Starting block: $START_BLOCK"
else
    echo "❌ .env file missing"
fi

# Check if project is built
if [ -d "lib" ] && [ -f "lib/main.js" ]; then
    echo "✅ Project is built"
else
    echo "❌ Project not built (lib/ missing)"
fi

# Check TypeORM entities
if [ -d "src/model" ] && [ -f "src/model/index.ts" ]; then
    echo "✅ TypeORM entities exist"
else
    echo "❌ TypeORM entities missing"
fi

# Check migrations
if [ -d "db/migrations" ] && [ -n "$(ls -A db/migrations 2>/dev/null)" ]; then
    echo "✅ Database migrations exist"
    echo "   Migrations count: $(ls db/migrations/*.js 2>/dev/null | wc -l)"
else
    echo "❌ Database migrations missing"
fi

# Check Docker services
echo ""
echo "🐳 Docker Services:"
docker-compose ps 2>/dev/null || echo "❌ Docker Compose not running"

# Check database connection
echo ""
echo "🗄️ Database Connection:"
if command -v psql &> /dev/null; then
    if psql -h localhost -p 5432 -U postgres -d squid -c "\dt" 2>/dev/null | grep -q "account"; then
        echo "✅ Database connected and tables exist"
        echo "   Tables:"
        psql -h localhost -p 5432 -U postgres -d squid -c "\dt" 2>/dev/null | grep -E "account|ddc_" | awk '{print "   - " $3}'
    else
        echo "❌ Database tables missing or connection failed"
    fi
else
    echo "⚠️ psql not available for database check"
fi

# Check if services are running
echo ""
echo "⚙️ Services Status:"
if pgrep -f "sqd process" > /dev/null; then
    echo "✅ Processor running"
else
    echo "❌ Processor not running"
fi

if pgrep -f "sqd serve" > /dev/null; then
    echo "✅ GraphQL server running"
else
    echo "❌ GraphQL server not running"
fi

# Check GraphQL endpoint
echo ""
echo "🌐 GraphQL Endpoint:"
if curl -s http://localhost:4350/graphql > /dev/null 2>&1; then
    echo "✅ GraphQL server responding"
else
    echo "❌ GraphQL server not responding"
fi

echo ""
echo "💡 Recommended actions:"
if [ ! -f .env ]; then
    echo "   - Run: ./local-setup.sh"
elif [ ! -d "db/migrations" ] || [ -z "$(ls -A db/migrations 2>/dev/null)" ]; then
    echo "   - Run: ./fix-database.sh"
elif ! docker-compose ps 2>/dev/null | grep -q "Up"; then
    echo "   - Run: ./start-local.sh"
else
    echo "   - System appears healthy!"
fi 