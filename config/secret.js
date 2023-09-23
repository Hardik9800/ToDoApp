const crypto = require('crypto');
// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');
const password ='ocljilclqrikwxsq';
module.exports = {
  secretKey,
  password
};
