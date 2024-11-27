# Node.js API Project

A RESTful API built with Node.js and Express.js that provides user and post management functionality.

## Features

- User management (CRUD operations)
- Post management (CRUD operations)
- Error handling middleware
- Environment configuration
- CORS enabled
- Security headers with Helmet

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middleware/     # Custom middleware
├── routes/         # API routes
├── services/       # Business logic
├── app.js         # Express app setup
└── server.js      # Server entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory:
   ```
   PORT=3000
   NODE_ENV=development
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot reload
- `npm test`: Run tests

## API Endpoints

### Users
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID
- POST /api/users - Create new user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

### Posts
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get post by ID
- POST /api/posts - Create new post
- PUT /api/posts/:id - Update post
- DELETE /api/posts/:id - Delete post