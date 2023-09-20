// server.js

const express = require('express');
const bodyParser = require('body-parser');
//const passport = require('passport');
const session = require('express-session');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const { isAuthenticated } = require('./middleware/authentication');
const { errorHandler } = require('./middleware/errorHandling');

const app = express();
app.use(express.json());

// Middleware
app.use(bodyParser.json());
//app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Passport configuration (Local authentication)
//require('./config/passport')(passport);

// Routes
//app.use('/auth', authRoutes); // Authentication routes
app.use('/api', todoRoutes); // Protected API routes

// Error handling middleware
//app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
