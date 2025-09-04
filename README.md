# Role-Based Access Control (RBAC) Mini App

A simple Role-Based Access Control application built with React + Vite + TypeScript. It uses TanStack Router for routing, TailwindCSS for styling, Axios for API calls, and JSON Server as a mock backend.

## 🔧 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start JSON Server

```bash
json-server db.json --port 3000
```
This will serve the API at http://localhost:3000

### 3. Start JSON Server

```bash
npm run dev
```
The app will be available at http://localhost:5173.

## ✨ Features

- Login simulation with role assignment
- Protected routes based on user roles
- Dynamic navigation and access control
- Simple mock API with JSON Server

## 🔐 Credentials 
**Role** | **Username** | **Password** 
 ------------ | ------------- | ------------- 
**Admin** | admin | 12345 
**Manager** | manager | 12345 
**User** | user | 12345 

> *“It is never too late to be who you might have been.”* -**George Eliot**