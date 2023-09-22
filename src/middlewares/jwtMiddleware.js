// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const jwtSecret = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function authenticateTodo(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication error: Missing token' });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, jwtSecret);
    // You can also decode additional information from the token if needed
    // const userId = decoded.userId;

    // If the token is valid, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If the token is invalid or has expired, send a 401 Unauthorized response
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
}

module.exports = { authenticateTodo };
