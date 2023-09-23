# ToDoApp
The To-Do App is a simple web application that allows users to create, read, and organize their to-do tasks. This README provides instructions on how to run the service locally and other important information related to the service.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [nodemailer](#nodemailer)
   

## Prerequisites

Before you can run the To-Do App locally, ensure that you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (Nodejs)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/) (Database)
- [Postman](https://www.postman.com/) (Postman)
- VScode


## Getting Started

Follow these steps to set up and run the To-Do App locally:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Hardik9800/ToDoApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ToDoApp
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```
4. install required dependencies:

   ```bash
   npm install express express-session jsonwebtoken nodemailer pg pg-promise
   ```
   
5. Set up your PostgreSQL database:
   - Create a PostgreSQL database with name todo .
   - Update the database configuration in `db/db.js` with your database credentials.
     
6. Setup nodemailer:
   - create a temporary account in gmail with password

7. Start the application:

   ```bash
   cd src
   ```

   ```bash
   node server.js
   ```
8. The To-Do App should now be running locally at `http://localhost:3000`.

## Usage

- Access the To-Do App by navigating to `http://localhost:3000` in your web browser.
- Register a user account or log in if you already have one.
- Create, view, update, and delete your to-do tasks.
- Use the API endpoints for programmatic access (see [API Endpoints](#api-endpoints)).

## API Endpoints

The To-Do App provides the following API endpoints:

- **POST /auth/register**: Register a new user.
- **get /auth/verify**: To verify user.
- **POST /auth/login**: Log in and receive an access token.
- **GET /api/todos**: Get all to-do tasks.
- **GET /api/todos/:id**: Get a specific to-do task by ID.
- **POST /api/todos**: Create a new to-do task.
- **PUT /api/todos/:id**: Update a to-do task by ID.
- **DELETE /api/todos/:id**: Delete a to-do task by ID.

## Authentication

- The ToDo App uses JSON Web Tokens (JWT) for authentication.
- To access protected API endpoints, include the JWT token in the `Authorization` header of your requests.

## Nodemailer

- ToDo App used nodemailer for passwordless register and login



