// src/db/db.js
const pgPromise = require('pg-promise');

// Create a new instance of pg-promise
const pgp = pgPromise();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'todo',
  user: 'postgres',
  password: 'hgupta',
};

// Create a database connection
const db = pgp(connection);
console.log("databse connected");

db.connect()
  .then(obj => {
    console.log('Connected to the database');
    obj.done(); // Release the connection
  })
  .catch(error => {
    console.error('Error connecting to the database:', error.message);
  });



module.exports = db;
