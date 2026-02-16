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
4. Start backend server:
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
Request Body:
```json
{
  "title": "Server Down",
  "description": "Production server is not responding",
  "severity": "High",
  "status": "Open"
}
```

### Get All Incidents
```
GET /api/incidents
```

### Get Single Incident
```
GET /api/incidents/:id
```

### Update Incident
```
PUT /api/incidents/:id
```

### Delete Incident
```
DELETE /api/incidents/:id
```

## 🏗 Design Decisions & Tradeoffs
- Followed MVC architecture in backend (Models, Controllers, Routes) for separation of concerns and maintainability.
- Implemented RESTful API design using proper HTTP methods and structured endpoints.
- Used MongoDB for flexible schema handling of incident data. Tradeoff: Requires strong validation at application level.
- Chose Angular for structured frontend architecture and scalability. Tradeoff: Slightly heavier initial setup compared to lightweight frameworks.
- Stored sensitive configuration inside `.env` file to prevent exposing credentials in version control.

## 🔮 Improvements With More Time
- Implement JWT-based authentication and role-based authorization
- Add pagination and filtering
- Add input validation and centralized error handling
- Implement unit and integration testing
- Dockerize application
- Deploy frontend and backend to cloud platforms
- Add logging and monitoring system
- Improve UI responsiveness and accessibility

## 👨‍💻 Author
Sai Teja  
Full Stack Developer – MEAN Stack

## 🎯 Final Notes
This project demonstrates end-to-end full-stack development capability, scalable backend design, Angular integration, and professional GitHub repository structuring suitable for production-level applications.
