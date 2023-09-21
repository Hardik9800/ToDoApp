const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const { isAuthenticated } = require('./middleware/authentication');

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/api', todoRoutes); // Protected API routes


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
