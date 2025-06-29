#!/bin/bash

set -e

REPO_URL="https://github.com/Meecali/Et_nemt.git"
INSTALL_DIR="/root/nemt_platform"

# 1. Install required packages
apt update && apt install -y \
  git curl gnupg2 ca-certificates lsb-release nginx \
  nodejs npm docker.io docker-compose mongodb \
  build-essential ufw unzip

# 2. Install PM2 globally
npm install -g pm2

# 3. Clone the repo
rm -rf "$INSTALL_DIR"
git clone "$REPO_URL" "$INSTALL_DIR"
cd "$INSTALL_DIR"

# 4. Build frontend
cd frontend
npm install
npm run build
mkdir -p /var/www/nemt_platform
cp -r build/* /var/www/nemt_platform/
chown -R www-data:www-data /var/www/nemt_platform

# 5. Deploy backend
cd ../backend
npm install
pm2 start server.js --name nemt-backend
pm2 save
pm2 startup --silent

# 6. Docker services (MongoDB, optional frontend if desired)
cd ..
docker-compose down || true
docker-compose up -d --build

# 7. NGINX config check & reload
nginx -t && systemctl reload nginx

echo "✅ NEMT platform deployed and monitored via PM2. Access at: http://sbt.meecali.com"
