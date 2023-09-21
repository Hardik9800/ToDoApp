const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for token verification and user login
router.get('/verify', authController.verifyToken);

// Route for logging out (if using sessions)
router.get('/logout', (req, res) => {
  // Destroy the session or clear the authentication token here
  req.session.destroy((err) => {
    if (err) {
      console.error('Error during logout:', err);
      res.status(500).json({ error: 'An error occurred during logout.' });
    } else {
      res.redirect('/login'); // Redirect to the login page or another appropriate page
    }
  });
});

module.exports = router;
