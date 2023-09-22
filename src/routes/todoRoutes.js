// src/routes/todoRoutes.js

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const jwtMiddleware = require('../middlewares/jwtMiddleware'); // Import your authentication middleware


// Create a new TODO item
router.post('/todos', jwtMiddleware.authenticateTodo, todoController.createTodo);

// Get all TODO items
router.get('/todos', jwtMiddleware.authenticateTodo,todoController.getAllTodos);

// Get a specific TODO item by ID
router.get('/todos/:id', jwtMiddleware.authenticateTodo,todoController.getTodoById);

// Update a TODO item by ID
router.put('/todos/:id', jwtMiddleware.authenticateTodo,todoController.updateTodoById);

// Delete a TODO item by ID
router.delete('/todos/:id',jwtMiddleware.authenticateTodo ,todoController.deleteTodoById);

module.exports = router;
