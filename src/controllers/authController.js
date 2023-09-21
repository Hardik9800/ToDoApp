const express = require('express');
const router = express.Router();
// authController.js

const db = require('../db/db');
const nodemailer = require('../../config/nodemailer'); // Import your nodemailer configuration
const url= 'http://localhost:3000';
// Generate a random token
function generateToken() {
  // Generate a random token here (e.g., using crypto.randomBytes)
  // Return the generated token as a string"
   const tokenLength = 32; // Adjust the token length as needed
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
}
return token}
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
  const token = generateToken();

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
      // Log the user in (e.g., set a session or issue a token)
      res.status(200).send('this is a verified user'); // Redirect to the desired page after successful login
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during token verification.' });
  }
}

module.exports = {
  registerUser,
  verifyToken,
};
