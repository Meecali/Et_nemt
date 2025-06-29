#!/bin/bash

echo "?? Installing backend dependencies..."
cd backend && npm install && cd ..

echo "?? Installing frontend dependencies..."
cd frontend && npm install && cd ..

echo "?? Starting containers..."
docker-compose up --build -d

echo "? M&E Technology Dispatcher is live at http://sbt.meecali.com"
