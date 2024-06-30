const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        message:"working"
    });
});

// Dummy user data (replace with proper user database)
const users = {
    user1: { id: 1, name: 'Alice', isAdmin: true, posts: ['Public post 1'] },
    user2: { id: 2, name: 'Bob', isAdmin: false, posts: ['Public post 2'] },
};
  
  // Vulnerable endpoint for retrieving user profiles (Broken Authorization)
router.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users[userId];
  
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    // Return all user properties regardless of permissions!
    res.send(user);
});


module.exports = router;