const express = require('express');
const router = express.Router();
const path = require('path');
const installer = require('./installer')
const Profile = require('./Profile');
const mongoose = require('mongoose');

// index endpoint runs installer.js
router.get('/', installer,(req, res, next) => {
  res.status(200).json({
    message: "API8 is working"
  });
});

// Permissive CORS policy (allowing all origins - BAD!)
router.get('/profiles/:user', (req, res) => {
  user = req.params.user;
  Profile.findOne({username: user})
  .exec()
  .then( (profile) =>{
    res.status(200).json({
      profile:profile
    });
  })
  .catch( (err) =>{
    res.status(500).json({
      error: err
    })
  })
});


// Profiles endpoint: post request creates a profile
router.post('/profiles',  (req, res, next) => {
  const profile = new Profile({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      number: req.body.id
  });
  profile
      .save()
      .then(result => {
      //success call back
      console.log(result);
      res.status(201).json({
          message: 'profile successfully created',
          creadted_Profile: result
      });
      })
      //error call back
      .catch(err => {
          console.log(err);
          res.status(500).json({
              error:err
          })
      });
});
  
// exposed debugging endpoint (REMOVE in production!)
router.get('/debug/info', (req, res) => {
    res.send({ serverInfo: 'Internal server details' }); // Potentially sensitive information (BAD!)
});

module.exports = router;