#!/bin/bash

echo "⚡ Quick update to current block..."

# Get current block
CURRENT_BLOCK=$(node get-current-block.js | grep "Current block:" | awk '{print $3}')
START_BLOCK=$((CURRENT_BLOCK - 100))

echo "📈 Current block: $CURRENT_BLOCK"
echo "🎯 Updating to start from: $START_BLOCK"

# Update .env
sed -i.bak "s/SQD_FIRST_BLOCK=.*/SQD_FIRST_BLOCK=$START_BLOCK/" .env

echo "✅ Updated .env file"
echo "🔄 Restart your processor to apply changes"
echo ""
echo "Current .env setting:"
grep "SQD_FIRST_BLOCK" .env 