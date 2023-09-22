const express = require('express');
const router = express.Router();
const db = require('../db/db');
const nodemailer = require('../../config/nodemailer'); // Import your nodemailer configuration
const url= 'http://localhost:3000';
const jwt = require('jsonwebtoken');

const {secretKey:jwtSecret} = require('../../config/secret'); // Require the secrets module
  

// Generate a random token
function generateToken(email) {
  // Create a payload containing the user's email
  const payload = { email };

  // Generate a JWT token with the payload and secret, set expiration to 1 hour
  const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

  return token;
}
// Send a registration email with a link containing the token
async function sendRegistrationEmail(email, token) {
  try {
    const mailOptions = {
      from: 'your-email@example.com',
      to: 'hardikgupta7500@gmail.com',
      subject: 'Registration Link',
      text: `Click the following link to complete your registration: ${url}/auth/verify?token=${token}`,
    };

    await nodemailer.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('An error occurred while sending the registration email.');
  }
}

// Handle user registration
async function registerUser(req, res) {
  const { email } = req.body;
  const token = generateToken(email);

  try {
    // Insert user data into the "users" table
    await db.query('INSERT INTO users (email, token) VALUES ($1, $2)', [email, token]);

    // Send registration email
    await sendRegistrationEmail(email, token);

    res.status(200).json({ message: 'Registration email sent. Check your inbox.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
}

// Handle token verification
async function verifyToken(req, res) {
  const { token } = req.query;

  try {
    const result = await db.query('SELECT * FROM users WHERE token = $1', [token]);

    if (result.length === 0) {
      res.status(400).json({ error: 'Token not found or expired.' });
    } else {
      
      res.status(200).send('this is a verified user'); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during token verification.' });
  }
}

// Define the login handler function
async function loginHandler(req, res) {
  const { email, token } = req.body;

  // Use your database or data store to verify the email and token
  const user = await verifyUserCredentials(email, token);

  if (user) {
    // User is authenticated; you can set a session or JWT token here
    // For example, you can generate a JWT token and send it in the response
    //const jwtToken = generateJwtToken(user.email);
    res.status(200).send('Login successful. You are now logged in.');
    ;
  } else {
    // Authentication failed
    res.status(401).json({ error: 'Authentication failed. Please check your credentials.' });
  }
}
async function verifyUserCredentials(email, token) {
  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1 AND token = $2  ', [email, token]);

    if (result.length === 1) {
      return result[0]; // User is authenticated
    }
  } catch (error) {
    console.error(error);
  }

  return null; // Authentication failed
}


module.exports = {
  registerUser,
  verifyToken,
  loginHandler
};
