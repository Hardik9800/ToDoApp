// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const {secretKey:jwtSecret} = require('../../config/secret'); // Require the secrets module


function authenticateTodo(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication error: Missing token' });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    // If the token is invalid or has expired, send a 401 Unauthorized response
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
}

module.exports = { authenticateTodo };
