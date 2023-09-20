// src/routes/todoRoutes.js

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Create a new TODO item
router.post('/todos', todoController.createTodo);

// Get all TODO items
router.get('/todos', todoController.getAllTodos);

// Get a specific TODO item by ID
router.get('/todos/:id', todoController.getTodoById);

// Update a TODO item by ID
router.put('/todos/:id', todoController.updateTodoById);

// Delete a TODO item by ID
router.delete('/todos/:id', todoController.deleteTodoById);

module.exports = router;
