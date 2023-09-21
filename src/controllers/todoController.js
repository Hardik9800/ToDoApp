// src/controllers/todoController.js

const db = require('../db/db');


// Create a new TODO item
async function createTodo(req, res) {
  try {
    console.log('Received request body:', req.body);
    const { title, description } = req.body;
    console.log(`Received request to create TODO item with title: ${title}, description: ${description}`);
    console.log('Title:', title);
    console.log('Description:', description);

    const result = await db.query('INSERT INTO todos (title, description) VALUES ($1, $2)  ', [title, description]);

    

    console.log('TODO item created successfully:', result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error occurred during database query:', error);
    return res.status(500).json({ error: 'An error occurred while creating the TODO item.' });
  }
}





// Get all TODO items
async function getAllTodos(req, res) {
  try {
    const result = await db.query('SELECT * FROM todos');
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching TODO items.' });
  }
}

// Get a specific TODO item by ID
async function getTodoById(req, res) {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM todos WHERE id = $1', [id]);
    if (result.length === 0) {
      res.status(404).send({ error: 'TODO item not found.' });
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the TODO item.' });
  }
}

// Update a TODO item by ID
async function updateTodoById(req, res) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await db.query('UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
    if (result.length === 0) {
      res.status(404).send({ error: 'TODO item not found.' });
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while updating the TODO item.' });
  }
}

// Delete a TODO item by ID
async function deleteTodoById(req, res) {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    if (result.length === 0) {
      res.status(404).send({ error: 'TODO item not found.' });
    } else {
      res.status(200).send({ message: 'TODO item deleted successfully.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while deleting the TODO item.' });
  }
}

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
