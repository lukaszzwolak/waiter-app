# 🧾 Waiter App

A table management application for restaurants, built with React, Redux Toolkit, and JSON Server.

## 🔗 Live Demo

You can view the live version here:  
👉 [http://128.140.64.138:3000](http://128.140.64.138:3000)

> *Note: The backend is powered by JSON Server and runs on port 3131 using a REST API.*


## 🛠 Technologies Used
- React + Redux Toolkit
- React Router DOM
- React Bootstrap
- JSON Server (mock backend)
- PM2 (process manager on VPS)
- Yarn / npm


## 🚀 Running Locally
# Install dependencies
yarn install

# Start frontend + mock API
yarn start
⚙️ Production Deployment on VPS
1. Build the frontend:
yarn build
2. Serve the production build:
serve -s build -l 3000
3. Start JSON Server backend:
npx json-server --host 0.0.0.0 --port 3131 --delay 250 --watch public/db/app.json --routes public/db/routes.json
Optionally, use PM2 to run both frontend and backend as background services.

📦 API Endpoints
GET /api/tables – Fetch all tables

PATCH /api/tables/:id – Update a table

👤 Author
Łukasz Zwolak
Project created as part of a React/Redux learning path and deployed to a VPS environment.
