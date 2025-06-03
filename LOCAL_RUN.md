# Cere Squid Indexer

A Substrate blockchain indexer for Cere Network using the Squid framework. This indexer implements breaking changes for v54114 including cluster-based storage migration and new DDC features.

## 🚀 Quick Start

### Method 1: Automated Setup (Recommended)

```bash
# 1. Initial setup (run once)
./local-setup.sh

# 2. Start all services
./start-local.sh
```

### Method 2: Index from Current Block (Faster)

If you want to start indexing from the current block (without processing full history):

```bash
# 1. Basic setup
./local-setup.sh

# 2. Setup from current block
./setup-current-block.sh

# 3. Start services
./start-local.sh
```

### Method 3: Quick Problem Resolution

If something went wrong:

```bash
# 1. Diagnose issues
./check-status.sh

# 2. Complete database fix
./fix-database.sh

# 3. Start services
./start-local.sh
```

After startup you'll have:
- 📊 GraphQL Playground: http://localhost:4350/graphql
- 🗄️ PostgreSQL: localhost:5432 (user: postgres, password: postgres, db: squid)

## ⚡ Block Management

### Extrinsic Version Issue

If you see `unsupported extrinsic version` error, it means Subsquid doesn't support the block format at current heights. Solution:

```bash
# Find safe block automatically
node find-safe-block.js

# Update .env with found block
sed -i.bak "s/SQD_FIRST_BLOCK=.*/SQD_FIRST_BLOCK=2000000/" .env
```

**Verified Safe Blocks:**
- `2000000` - stable (runtime v73035)
- `1500000` - earlier block
- `1000000` - very early
- `14909` - original project block

### Check Current Network Block

```bash
# Get current block number
node get-current-block.js
```

### Quick Block Update

```bash
# Update .env to current block (without DB recreation)
./quick-update-block.sh

# Restart processor to apply changes
sqd down
sqd process
```

### Monitor Indexing Progress

```bash
# View sync progress
./monitor-progress.sh

# Live processor logs
docker-compose logs -f processor

# Check all components status
./check-status.sh
```

Example monitoring output:
```
📊 Cere Squid Indexer Progress Monitor
======================================
🎯 Starting block: 2000000
🌐 Current network block: 2388670
⚙️ Last processed block: 2001999

📈 Progress: 0% (1999 / 388670 blocks)
⏳ Remaining: 386671 blocks
📊 Latest rate info:
   18:40:26 INFO sqd:processor 2001999 / 2388664, rate: 7 blocks/sec, eta: 14h 20m
```

## 🛠️ Troubleshooting

### System Diagnostics

```bash
# Complete system diagnosis
./check-status.sh
```

The script checks:
- ✅ .env file presence
- ✅ Project build
- ✅ TypeORM entities
- ✅ Database migrations
- ✅ Docker containers
- ✅ DB connection
- ✅ Service status
- ✅ GraphQL endpoint

### Complete Recovery

If system is not working:

```bash
# Automatic fix for all issues
./fix-database.sh
```

The script will:
1. Stop all services
2. Clean Docker containers and volumes
3. Clean migrations and builds
4. Rebuild project
5. Generate TypeORM entities
6. Create fresh migrations
7. Apply migrations

### Find Safe Block

```bash
# Automatic search for working block
node find-safe-block.js
```

The script tests blocks from recent to old and finds the first working one.

## 🔧 Manual Setup

### Step 1: Environment Preparation

```bash
# Install dependencies
npm ci

# Install sqd CLI (if not already installed)
npm install -g @subsquid/cli

# Build project
npm run build
```

### Step 2: Environment Configuration

Create `.env` file in project root:

```bash
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
SQD_FIRST_BLOCK=2000000  # Safe block
SQD_LAST_BLOCK=0

# GraphQL server configuration
GQL_PORT=4350

# Types bundle path
TYPES_BUNDLE=./specs/cere-types-bundle.json
```

### Step 3: Code and Migration Generation

```bash
# Generate TypeORM entities
sqd codegen

# Generate database migrations
sqd migration:generate
```

### Step 4: Start Services

```bash
# Terminal 1: Start database
sqd up:db

# Terminal 2: Start processor (indexer)
sqd process

# Terminal 3: Start GraphQL server
sqd serve
```

## 🔧 Service Management

### sqd Commands

```bash
# Start database
sqd up:db

# Stop all Docker containers
sqd down

# Apply database migrations
sqd migration:apply

# Start processor
sqd process

# Start GraphQL server
sqd serve

# Open GraphQL Playground in browser
sqd open
```

### Alternative Commands

```bash
# Use Docker Compose directly
docker-compose up -d db          # Database only
docker-compose up -d             # All services
docker-compose down              # Stop all

# View logs
docker-compose logs -f processor # Processor logs
docker-compose logs -f api       # API server logs
```

## 🧪 Testing with GraphQL Playground

### Interface Access

After starting services, open http://localhost:4350/graphql in your browser.

### Example Queries

Use queries from `example-queries.graphql` file:

#### 1. Get Account List
```graphql
query GetAccounts {
  accounts(limit: 10) {
    id
    cereFreeBalance
    ddcActiveBalance
  }
}
```

#### 2. Get DDC Deposits with Cluster Support
```graphql
query GetDdcCustomerDeposits {
  ddcCustomerDeposits(
    limit: 20
    orderBy: blockTimestamp_DESC
  ) {
    id
    blockTimestamp
    accountId { id }
    amount
    clusterId
    fromAccountId { id }
    toAccountId { id }
  }
}
```

#### 3. Get Specific Cluster Information
```graphql
query GetClusterStats($clusterId: String!) {
  ddcCluster(id: $clusterId) {
    id
    status
    ddcBuckets(where: { isRemoved_eq: false }) {
      id
      ownerId { id }
    }
    ddcNodes {
      id
      host
      mode
    }
  }
}
```

### Test Variables

```json
{
  "accountId": "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
  "clusterId": "0x0123456789abcdef0123456789abcdef01234567"
}
```

## 🔍 Monitoring and Debugging

### Service Status Check

```bash
# Complete system diagnostics
./check-status.sh

# Check Docker container status
docker-compose ps

# Check database connection
psql -h localhost -p 5432 -U postgres -d squid

# Check GraphQL server
curl http://localhost:4350/graphql

# Monitor indexing progress
./monitor-progress.sh
```

### Logs and Debugging

```bash
# Processor logs
docker-compose logs -f processor

# API server logs
docker-compose logs -f api

# Database logs
docker-compose logs -f db

# Restart specific service
docker-compose restart processor
```

### Performance Optimization

```bash
# Increase processing speed (in .env):
SQD_RATE_LIMIT=1000    # More requests per second
SQD_CAPACITY=20        # More parallel connections

# Start from safe block
node find-safe-block.js
sed -i.bak "s/SQD_FIRST_BLOCK=.*/SQD_FIRST_BLOCK=2000000/" .env

# Use local RPC endpoint (if available)
RPC_CERE_HTTP=ws://localhost:9944
```

## 🛠️ Development and Modification

### Schema Changes

1. Edit `schema.graphql`
2. Regenerate TypeORM entities: `sqd codegen`
3. Create migration: `sqd migration:generate`
4. Apply migration: `sqd migration:apply`
5. Restart processor

### Processing Logic Changes

1. Edit files in `src/processors/`
2. Rebuild project: `npm run build`
3. Restart processor

### Adding New Events

1. Update `src/processor.ts` to add new events
2. Create or update corresponding processor in `src/processors/`
3. Update `src/main.ts` to handle new data

## 🚨 Common Problem Solutions

### "relation does not exist"
```bash
# Database not created or migrations not applied
./fix-database.sh
```

### "unsupported extrinsic version"
```bash
# Incompatible block version
node find-safe-block.js
# Update SQD_FIRST_BLOCK in .env to found block
```

### Database won't start
```bash
# Stop all and clean
sqd down
docker system prune -f

# Start fresh
./fix-database.sh
```

### Processor can't connect to RPC
- Check `RPC_CERE_HTTP` variable in `.env`
- Ensure RPC endpoint is accessible
- Try alternative endpoint

### GraphQL server unavailable
```bash
# Check if port 4350 is free
lsof -i :4350

# Restart API server
docker-compose restart api
```

### Migration errors
```bash
# Complete recovery
./fix-database.sh
```

### Slow synchronization
```bash
# Start from safe block
node find-safe-block.js

# Update starting block
sed -i.bak "s/SQD_FIRST_BLOCK=.*/SQD_FIRST_BLOCK=2000000/" .env

# Increase performance parameters in .env
SQD_RATE_LIMIT=1000
SQD_CAPACITY=20
```

### RPC connection drops
```bash
# Try different RPC endpoint in .env:
RPC_CERE_HTTP=wss://archive.mainnet.cere.network/ws

# Or reduce load:
SQD_RATE_LIMIT=200
SQD_CAPACITY=5
```

## 📚 Additional Resources

- [Subsquid Documentation](https://docs.subsquid.io/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [TypeORM Documentation](https://typeorm.io/)
- [Cere Network Documentation](https://docs.cere.network/)

## 🎯 New Features v54114

This indexer supports new blockchain v54114 features:

1. **Cluster-based balances**: Each account can have different balances in different clusters
2. **Deposited Events**: Deposit Processing with Cluster Support
3. **Backward compatibility**: Support for old event and storage versions

### Testing New Features

Use special GraphQL queries to test cluster-based functionality:

```graphql
# Deposits with cluster specification
query GetClusterDeposits($clusterId: String!) {
  ddcCustomerDeposits(where: { clusterId_eq: $clusterId }) {
    id
    clusterId
    fromAccountId { id }
    toAccountId { id }
    amount
  }
}
```

## 🎨 Useful Scripts

Here's a list of all available scripts for project management:

```bash
# Initial setup
./local-setup.sh              # Basic setup with auto block detection
./setup-current-block.sh       # Setup from current block
./fix-database.sh              # Complete DB and migration recovery

# Diagnostics and monitoring
./check-status.sh              # Comprehensive system diagnostics
./monitor-progress.sh          # Sync progress monitoring

# Block management
./quick-update-block.sh        # Quick starting block update
node get-current-block.js      # Get current network block
node find-safe-block.js        # Find safe starting block

# Launch and management
./start-local.sh              # Start all services
sqd up:db                     # Database
sqd process                   # Processor
sqd serve                     # GraphQL server
sqd down                      # Stop all
```

## ⚠️ Important Notes

1. **Sync time**: Starting from block 2000000, full sync will take 15-20 hours
2. **Block versions**: Blocks after ~2200000 may have incompatible extrinsic versions
3. **RPC limits**: High load may cause RPC connection timeouts
4. **Memory**: Process may consume significant RAM during active sync

## 🔄 Development Workflow

```bash
# 1. First run
./local-setup.sh && ./start-local.sh

# 2. If problems occur
./check-status.sh
./fix-database.sh

# 3. For quick testing (without full history)
node find-safe-block.js
./setup-current-block.sh
./start-local.sh

# 4. Monitor progress
./monitor-progress.sh

# 5. When changing schema
sqd down
sqd codegen
sqd migration:generate
sqd migration:apply
./start-local.sh
```

## 📊 Performance Expectations

- **Block processing rate**: 3-7 blocks/sec (depends on network and RPC)
- **Full sync time**: 15-20 hours from block 2000000
- **Memory usage**: 1-2 GB during active sync
- **Storage requirements**: ~1 GB for database

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Run `./check-status.sh` for diagnostics
3. Check logs with `docker-compose logs -f processor`
4. Create an issue in the repository with error details
