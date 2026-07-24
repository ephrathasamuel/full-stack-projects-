# FILL STACK PROJECTS

A full-stack web application built as a hands-on learning project to practice end-to-end development — from database design to backend APIs to a working frontend.

## Project Overview

This project was built to learn and practice full-stack development fundamentals: designing a database, building a backend API, connecting a frontend to it, and handling real-world concerns like authentication, error handling, and deployment. It's intentionally built from scratch rather than from a template, so each piece is understood rather than copy-pasted.

## Learning Goals

- Understand how frontend, backend, and database layers communicate
- Practice designing a database schema and writing queries
- Build and consume a REST API
- Implement basic authentication (login/registration)
- Handle errors and edge cases gracefully across the stack
- Deploy a working full-stack app publicly

## Features

- [ ] User registration and login
- [ ] [Core feature #1 — e.g. create/read/update/delete records]
- [ ] [Core feature #2]
- [ ] Basic error handling and input validation
- [ ] Responsive frontend UI

## Technologies & Dependencies

- **Frontend**: [e.g. React / HTML, CSS, JS]
- **Backend**: [e.g. Node.js + Express / Python + Flask]
- **Database**: [e.g. PostgreSQL / SQLite / MongoDB]
- **Authentication**: [e.g. JWT / sessions]
- **Other tools**: [e.g. Git, Postman, dotenv]

## Architecture & Folder Structure

```
project-name/
├── backend/
│   ├── routes/         # API endpoint definitions
│   ├── models/          # Database models/schema
│   ├── controllers/     # Business logic
│   └── server.js         # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI pieces
│   │   ├── pages/         # Full page views
│   │   └── App.js
├── .env                     # Environment variables (gitignored)
├── .gitignore
└── README.md
```

## Core Principles

- **Separation of Concerns**: frontend, backend, and database logic each live in their own layer
- **Secrets Management**: API keys and credentials are stored in `.env`, excluded from version control
- **Incremental Learning**: each feature is built and tested before moving to the next, rather than writing the whole app at once

## Getting Started

### Prerequisites

- [Runtime, e.g. Node.js 18+ / Python 3.10+]
- [Database installed locally, or a free-tier hosted database]

### Setup Instructions

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd project-name
   ```
2. Install backend dependencies:
   ```
   cd backend
   [npm install / pip install -r requirements.txt]
   ```
3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```
4. Create a `.env` file with required variables:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```
5. Run the backend and frontend (in separate terminals):
   ```
   [npm run dev / py app.py]
   ```

## What I Learned

- [e.g. How to structure a REST API and handle routing]
- [e.g. How authentication tokens work in practice]
- [e.g. Debugging CORS issues between frontend and backend]
- [e.g. How to design a normalized database schema]

## Known Limitations

- [e.g. No automated tests yet]
- [e.g. Basic error handling, not production-hardened]

## Future Improvements

- [ ] Add unit and integration tests
- [ ] Improve input validation and error messages
- [ ] Deploy to a live hosting platform
- [ ] Add more polished UI/UX

## Status

🚧 Learning project — in progress
