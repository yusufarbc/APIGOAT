const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        message:"working"
    });
});

// Dummy user data (replace with proper user authentication)
const users = {
    user1: { id: 1, name: 'Alice' },
    user2: { id: 2, name: 'Bob' },
};
  
// Simulate file storage (replace with database or storage system)
const files = {
    1: { ownerId: 1, content: 'Alice\'s secret document' },
    2: { ownerId: 2, content: 'Bob\'s private photos' },
};
  
// Vulnerable endpoint for downloading files (Broken Authorization)
router.get('/files/:fileId', (req, res) => {
    const fileId = req.params.fileId;
    const file = files[fileId];
  
    // No authorization check!
    if (!file) {
      return res.status(404).send('File not found');
    }
  
    res.send(file.content);
});


module.exports = router;