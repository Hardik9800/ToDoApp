// src/middleware/authentication.js


// Authentication middleware
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Authentication required.' });
}

module.exports = {
  isAuthenticated,
};
