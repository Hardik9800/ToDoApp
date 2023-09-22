const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for token verification and user login
router.get('/verify', authController.verifyToken);

// Route for logging out (if using sessions)
router.post('/login', authController.loginHandler);


module.exports = router;
