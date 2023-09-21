// src/middleware/validation.js

// Example validation middleware for request data
function validateTodoInput(req, res, next) {
    const { title, description } = req.body;
  
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }
  
    // Add more validation checks as needed
  
    next();
  }
  
  module.exports = {
    validateTodoInput,
  };
  