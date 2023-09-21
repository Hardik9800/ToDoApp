// Set up email
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,

  auth: {
      user: 'hardikgupta7500@gmail.com',
      pass: 'ocljilclqrikwxsq'
  }
});

module.exports = transporter;
