# 🚀 Incident Tracker – MEAN Stack Application

## 📖 Overview
Incident Tracker is a full-stack web application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). The application allows users to create, manage, update, and track incidents through a RESTful API and an interactive Angular frontend. This project demonstrates full-stack development, REST API design, MVC architecture, client-server communication, and scalable application structure.

## 🛠 Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- dotenv (Environment configuration)

### Frontend
- Angular
- TypeScript
- Angular HTTP Client
- Reactive Forms

## 📂 Project Structure
```
Incident-Tracker/
│
├── backend/      # Express + MongoDB REST API
├── frontend/     # Angular application
└── README.md
```

## ⚙️ Setup & Run Instructions

### 🔹 Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (Local installation or MongoDB Atlas)
- Angular CLI  
  ```
  npm install -g @angular/cli
  ```

### 🔹 Backend Setup
1. Navigate to backend:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file inside `/backend` directory and add:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. (Optional) Seed database with sample records:
   ```
   npm run seed
   ```
5. Start backend server:
   ```
   npm run dev
   ```
   or
   ```
   node server.js
   ```
Backend runs on:
```
http://localhost:5000
```

### 🔹 Frontend Setup
1. Navigate to frontend:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start Angular server:
   ```
   ng serve
   ```
Frontend runs on:
```
http://localhost:4200
```

## 📡 API Overview
Base URL:
```
http://localhost:5000/api
```

### Create Incident
```
POST /api/incidents
```
Includes request validation before storing data.

### Fetch Incidents (Paginated)
```
GET /api/incidents?page=1&limit=10
```
Supports server-side pagination.

### Search / Filter / Sort (Server-Side)
```
GET /api/incidents?search=server&status=Open&sort=createdAt
```

### Get Single Incident
```
GET /api/incidents/:id
```

### Update Incident Status
```
PUT /api/incidents/:id
```

### Delete Incident
```
DELETE /api/incidents/:id
```

## 🏗 Design Decisions & Tradeoffs

- Followed MVC architecture (Models, Controllers, Routes) to maintain separation of concerns and improve maintainability.
- Implemented input validation during incident creation to ensure data integrity at API level.
- Used MongoDB for flexible schema handling and scalability for incident records.
- Seeded the database with ~200 records to simulate real-world data volume and properly test pagination, filtering, and sorting.
- Implemented server-side pagination instead of client-side pagination to ensure scalability for large datasets.
- Implemented server-side search, filtering, and sorting to optimize performance and reduce frontend load.
- Designed API endpoints using REST principles for consistency and extensibility.
- Angular was chosen for structured frontend architecture and long-term scalability.
- Environment variables are managed through `.env` to secure sensitive configuration data.

Tradeoffs:
- Server-side filtering and pagination increases backend logic complexity but improves performance at scale.
- MongoDB provides flexibility but requires strong validation to maintain data consistency.
- Angular introduces more initial setup compared to lightweight frameworks but offers better maintainability for larger applications.

## 👨‍💻 Author
Sai Teja Kandadi
Full Stack Developer – MEAN Stack

## 🎯 Final Notes
This project demonstrates end-to-end full-stack development capability, scalable backend design, server-side data processing, Angular integration, and professional GitHub repository structuring suitable for production-level applications.
