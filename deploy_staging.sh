#!/bin/bash

# Stop the script if any command fails
set -e

echo "==> [1/4] Installing dependencies"
npm install --silent

echo "==> [2/4] Building project for staging"
npx cross-env APP_ENV=staging node build.js

echo "==> [3/4] Starting staging server on port 4000"
npx cross-env APP_ENV=staging PORT=4000 node server.js &

SERVER_PID=$!

sleep 2

echo "==> [4/4] Running health check against staging"
curl -s http://localhost:4000/health

echo ""
echo "Deployment to staging complete. Server PID: $SERVER_PID"