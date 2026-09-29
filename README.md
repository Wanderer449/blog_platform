# Blog Platform with Comments
Full-stack blog app: React + Vite frontend, Express REST API, MongoDB/Mongoose, JWT login, post CRUD, comments.

## Setup
Requirements: Node.js 18+ and MongoDB.
1. Backend: `cd backend`, `npm install`, copy `.env.example` to `.env`, set `JWT_SECRET` and `MONGO_URI`, then `npm run dev`.
2. Frontend: in another terminal, `cd frontend`, `npm install`, copy `.env.example` to `.env`, then `npm run dev`.
Frontend: http://localhost:5173 | API: http://localhost:5000

Windows PowerShell: `Copy-Item .env.example .env` (instead of `cp`).

## API
Auth: POST `/api/auth/register`, POST `/api/auth/login`, GET `/api/auth/me`
Posts: GET `/api/posts` (optional `?search=`), GET `/api/posts/:id`, POST `/api/posts`, PUT `/api/posts/:id` (author only), DELETE `/api/posts/:id` (author only)
Comments: POST `/api/posts/:id/comments`, DELETE `/api/posts/:id/comments/:commentId` (comment author or post author)

Demo project. Add validation, rate limiting, moderation and production security before deployment.
