// Set up email
const nodemailer = require('nodemailer');
const {password:password} = require('../config/secret'); // Require the secret module

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  
  auth: {
      user: 'hardikgupta7500@gmail.com',
      pass: password
  }
});

module.exports = transporter;
