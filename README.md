# Tactical Arena

This repository contains the **Tactical Arena** project, consisting of a Clojure/ClojureScript backend and frontend.

- **Backend:** `ta_backend` (Clojure)
- **Frontend:** `ta_frontend` (ClojureScript with Shadow CLJS)

---

## Prerequisites

Make sure you have the following installed:

- [Java JDK 11+](https://adoptium.net/)
- [Leiningen](https://leiningen.org/) for Clojure projects
- [Node.js 18+](https://nodejs.org/) for frontend dependencies
- [npm or yarn](https://www.npmjs.com/) package manager

---

## Backend (`ta_backend`)

### 1. Navigate to backend

```bash
cd ta_backend
```

### 2. Get dependencies

```bash
lein deps
```

### 3. Run the backend server

```bash
lein run
```

You should see logs similar to:
````
INFO [ta-backend.logger:13] - Server started on http://localhost:8080
INFO [ta-backend.logger:13] - Swagger documentation is placed on http://localhost:8080/api-docs/index.html
````

API Base URL: http://localhost:8080

Swagger documentation: http://localhost:8080/api-docs/index.html

### 4. Run backend tests

```bash
lein midje
```

All tests are located under test/ folder.

---

## Frontend (ta_frontend)

### 1. Navigate to frontend

```bash
cd ta_frontend
```

### 2. Get dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the frontend development server

```bash
npx shadow-cljs watch app
```

This will compile ClojureScript and watch for changes. Open your browser at:

````
http://localhost:3000
````

Note: Ensure the backend server is running at http://localhost:8080 for API calls.

### 4. Build frontend for production

```bash
npx shadow-cljs release app
```

The build output will be in public/js/.
