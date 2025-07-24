# Employee CRUD Project

This is a full-stack Employee Management application built with **Vite React** for the frontend and **Spring Boot** for the backend. The project demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing employee records.

## Features

- Add new employees
- View a list of employees
- Update employee details
- Delete employees
- Responsive and modern UI

## Tech Stack

- **Frontend:** Vite + React
- **Backend:** Spring Boot (REST API)
- **Database:** (Specify your database, e.g., H2, MySQL, PostgreSQL)
- **API Communication:** Axios (or fetch)

## Getting Started

### Prerequisites

- Node.js & npm/yarn (for frontend)
- Java 24 (for backend)
- MySQL

### Setup Instructions

#### Backend (Spring Boot)

1. Clone the repository and navigate to the backend folder:
    ```bash
    cd Employee_CRUD_Poject/employee
    ```
2. Install dependencies and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```
   or use your IDE to run the main application class.

3. The backend API will be available at `http://localhost:8080`.

#### Frontend (Vite React)

1. Navigate to the frontend folder:
    ```bash
    cd Employee_CRUD_Poject/employee_frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend application:
    ```bash
    npm run dev
    ```
4. The frontend will be available at `http://localhost:5173`.

#### Database (MySQL)

1. Create a database in MySQL of your choice and Update the `application.properties` database name to your database name.

2. Table in the database will be created on its own.

### Configuration

- Update the frontend API endpoints if your backend runs on a different port.
- Modify database configuration in `application.properties` (Spring Boot) if using a persistent database.

## Folder Structure
