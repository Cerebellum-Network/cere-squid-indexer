#!/bin/bash

echo "📊 Cere Squid Indexer Progress Monitor"
echo "======================================"

# Function to get current block from network
get_network_block() {
    node get-current-block.js 2>/dev/null | grep "Current block:" | awk '{print $3}'
}

# Function to get current processed block from logs
get_processed_block() {
    # Try to get from docker logs
    PROCESSED=$(docker-compose logs --tail=10 processor 2>/dev/null | grep -o "[0-9]* / [0-9]*" | tail -1 | awk '{print $1}')
    if [ -z "$PROCESSED" ]; then
        echo "N/A"
    else
        echo "$PROCESSED"
    fi
}

# Get info from .env
if [ -f .env ]; then
    START_BLOCK=$(grep "SQD_FIRST_BLOCK" .env | cut -d'=' -f2)
    echo "🎯 Starting block: $START_BLOCK"
else
    echo "❌ .env file not found"
    exit 1
fi

# Get current network block
NETWORK_BLOCK=$(get_network_block)
echo "🌐 Current network block: $NETWORK_BLOCK"

# Get processed block
PROCESSED_BLOCK=$(get_processed_block)
echo "⚙️ Last processed block: $PROCESSED_BLOCK"

# Calculate progress
if [ "$PROCESSED_BLOCK" != "N/A" ] && [ ! -z "$NETWORK_BLOCK" ] && [ ! -z "$START_BLOCK" ]; then
    TOTAL_BLOCKS=$((NETWORK_BLOCK - START_BLOCK))
    PROCESSED_BLOCKS=$((PROCESSED_BLOCK - START_BLOCK))
    
    if [ $TOTAL_BLOCKS -gt 0 ]; then
        PROGRESS=$((PROCESSED_BLOCKS * 100 / TOTAL_BLOCKS))
        REMAINING=$((NETWORK_BLOCK - PROCESSED_BLOCK))
        
        echo ""
        echo "📈 Progress: $PROGRESS% ($PROCESSED_BLOCKS / $TOTAL_BLOCKS blocks)"
        echo "⏳ Remaining: $REMAINING blocks"
        
        # Estimate time if we have rate info
        RATE_INFO=$(docker-compose logs --tail=5 processor 2>/dev/null | grep "rate:" | tail -1)
        if [ ! -z "$RATE_INFO" ]; then
            echo "📊 Latest rate info:"
            echo "   $RATE_INFO"
        fi
    fi
fi

echo ""
echo "🔄 To update to current block: ./quick-update-block.sh"
echo "📋 To view live logs: docker-compose logs -f processor" 