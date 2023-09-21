const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const { isAuthenticated } = require('./middleware/authentication');

const app = express();
app.use(express.json());

// Middleware
//app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/api', todoRoutes); // Protected API routes

// Initialize Auth0 SDK
//const auth0Config = require('../../config/auth');
// const auth0 = new AuthenticationClient({
//   domain: 'dev-0to38utpyvz2q5j6.us.auth0.com', // Replace with your Auth0 domain
//   clientId: 'GCZGvmnMTiKDwxjUA51sVo8D4X0yFOBe', // Replace with your Auth0 client ID
//   clientSecret: 'VFIcTbgZnzVy-tUJT9wJy-VHap_aTZna2Aq8OHhRFKYpS3UhOI_yu0VhJ-ZnMA47', // 
// });

// Error handling middleware
// app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
