// const auth0 = require('../../config/auth'); // Your Auth0 configuration
// const express = require('express');
// const router = express.Router();

// // Move the logic for initiating passwordless authentication here
// router.post('/passwordless', (req, res) => {
//   const { email } = req.body;

//   // Use the auth0 configuration object here
//   auth0.passwordlessStart(
//     {
//       connection: 'email', // Specify the email connection in Auth0
//       send: 'link',
//       email: email, // User's email
//       redirectUri: 'http://localhost:3000/callback', // Replace with your callback URL
//     },
//     function (err, response) {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Error sending magic link.' });
//       }
//       // Magic link sent successfully
//       res.json({ message: 'Magic link sent to your email.' });
//     }
//   );
// });

// // Handle the callback URL after the user clicks the magic link
// router.get('/callback', (req, res) => {
//   const { code } = req.query;

//   // Use the auth0 configuration object here
//   auth0.passwordlessLogin(
//     {
//       connection: 'email', // Specify the email connection in Auth0
//       code: code,
//     },
//     function (err, response) {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Authentication failed.' });
//       }
//       // Successful authentication
//       res.json({ message: 'Authentication successful', user: response.profile });
//     }
//   );
// });

// // Logout the user
// router.get('/logout', (req, res) => {
//   // Clear the Auth0 session (implement as needed)
//   // For example, you can use req.logout() or any Auth0-specific logout method.
//   // Refer to Auth0 documentation for the correct implementation.
//   res.json({ message: 'Logout successful' });
// });

// module.exports = router;
