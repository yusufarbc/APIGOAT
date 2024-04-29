const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(404);
    res.json({
        message:"working"
    });
});

// Dummy user data (replace with proper user database)
const users = {
    alice: { username: 'alice', password: 'password123' }, // Plain text password - BAD!
    bob: { username: 'bob', password: '12345' }, // Plain text password - BAD!
  };
  
// Vulnerable login endpoint (Broken Authentication)
router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // No validation or secure password hashing!
    const user = users[username];
  
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }
  
    // Simulate generating a token (replace with secure JWT generation)
    const token = 'fake-token-for-' + username;
    res.send({ token });
});
  
  // Hypothetical protected API endpoint (assuming successful login)
router.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
  
    // No token validation! (placeholder for actual token verification)
    if (!authHeader || authHeader !== 'Bearer fake-token') {
      return res.status(401).send('Unauthorized');
    }
  
    res.send('This is protected data!');
});

module.exports = router;