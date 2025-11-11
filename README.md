# Inspiration Quotes - React + Express (Render)

A minimal full-stack app that serves random inspirational quotes from an Express API and displays them in a React UI. Designed for one-click deployment to Render (API as a Web Service, client as a Static Site).

## Tech
- Frontend: React (Vite)
- Backend: Express (Node.js)
- Deployment: Render
- AI Tooling: Cursor + ChatGPT

## Local Development

Prereqs: Node.js 18+ and npm.

1) Install dependencies:
```
cd server && npm install
cd ../client && npm install
```

2) Run the API:
```
cd server
npm run dev
# API on http://localhost:4000
```

3) Run the client:
```
cd client
# If your API runs on a different host/port, set VITE_API_URL accordingly
# On Windows PowerShell:
# $env:VITE_API_URL="http://localhost:4000"
npm run dev
# Web on http://localhost:5173
```

## API

- `GET /api/quote` → `{ text: string, author: string }`
- `GET /api/health` → `{ status: "ok" }`

## Deploy on Render

This repo includes a `render.yaml` to create:
- `quotes-api`: Web Service (Node) using `server/`
- `quotes-web`: Static Site using `client/`

Steps:
1. Push this project to a GitHub repo.
2. In Render, "New +" → "Blueprint" → pick your repo. Confirm services from `render.yaml`.
3. After the `quotes-api` deploys, copy its public URL (e.g. https://quotes-api-xxxxx.onrender.com).
4. In the `quotes-web` Static Site, set Environment Variable:
   - `VITE_API_URL` = your API URL (e.g. `https://quotes-api-xxxxx.onrender.com`)
5. Redeploy `quotes-web`.

Notes:
- CORS is open by default (`CORS_ORIGIN="*"` in `render.yaml`). Restrict it to your static site's domain for production.
- No database is required; quotes are served from an in-memory list in `server/quotes.js`.

## Project Structure
```
server/           # Express API
  index.js
  quotes.js
  package.json

client/           # React (Vite)
  index.html
  src/
    App.jsx
    api.js
    main.jsx
  package.json
  vite.config.js

render.yaml       # Render blueprint for API + Static Site
```


