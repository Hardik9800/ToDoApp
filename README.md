# ToDoApp
 - A simple backend using Express JS to perform simple CreateReadUpdateDelete(CRUD) operations of todos using passwordless register and login.
 - This README provides instructions on how to run the service locally and other important information related to the service.

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
   - Create two tables with name users and todos with fields email, token in users table and id, task, description in todos table
   - Update the database configuration in `db/db.js` with your database credentials.
     
6. Setup nodemailer:
   - go to myaccount.google.com
   - go to security
   - go to App passwords
   - set the app name to node mailer.You will get a password for your app.Copy it and remove spaces then replace the password in the `config/secret.js` file.
   - in `src/controllers/authcontroller.js` replace to with your email.
 
   

7. Start the application:

   ```bash
   cd src
   ```

   ```bash
   node server.js
   ```
8. The To-Do App should now be running locally at `http://localhost:3000`.

## Usage

### Access the To-Do App by navigating to `http://localhost:3000` in your postman:-

#### Register
- Register a user account by navigating to `http://localhost:3000/auth/register` in your postman .
- Send email as json data and make POST request
- You will receive a link in your email
- Copy the link in email.

#### Verify
- paste the link in postman.
- make the GET request.
- User will be verified.
- copy the token.

#### Login
- log in if you already have an account.
- Hit the link http://localhost:3000/auth/login with POST request by Sending email and token as json data
- use wil be logged in.
#### Create
- In Headers Select key as Authorisation and value as Bearer 'Token' (paste the token copied).If you will not do this step you will see unauthorised user as message while sending 
   requests. 
- Hit the link http://localhost:3000/api/todos with POST request by Sending title and description of todo as json data
#### Read All data
- Hit the link http://localhost:3000/api/todos with GET request.
#### Read a paricular id
- Hit the link http://localhost:3000/api/todos/:id with GET request .
#### Update a paricular id
- Hit the link http://localhost:3000/api/todos/:id with Put request .
#### Delete a paricular id
- Hit the link http://localhost:3000/api/todos/:id with Delete request .

- Use the API endpoints for programmatic access (see [API Endpoints](#api-endpoints)).

## API Endpoints

The To-Do App provides the following API endpoints:

- **POST http://localhost:3000/auth/register**: Register a new user.
- **get http://localhost:3000/auth/verify**: To verify user.
- **POST http://localhost:3000/auth/login**: Log in and receive an access token.
- **GET http://localhost:3000/api/todos**: Get all to-do tasks.
- **GET http://localhost:3000/api/todos/:id**: Get a specific to-do task by ID.
- **POST http://localhost:3000/api/todos**: Create a new to-do task.
- **PUT http://localhost:3000/api/todos/:id**: Update a to-do task by ID.
- **DELETE http://localhost:3000/api/todos/:id**: Delete a to-do task by ID.  

## Authentication

- The ToDo App uses JSON Web Tokens (JWT) for authentication.
- To access protected API endpoints, include the JWT token in the `Authorization` header of your requests.

## Nodemailer

- ToDo App used nodemailer for passwordless register and login. Passwordless login means entering an email and clicking on a link in the email (a magic link) which takes you to the site and logs you in. 



