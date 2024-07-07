const parser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const Account = require('./Account');
const Flight = require('./Flight');
const Booking = require('./Booking');
const installer = require('./installer');
const checkauth = require('./check-auth');

// index endpoint runs installer.js
router.get('/', installer,(req, res, next) => {
    res.status(404);
    res.json({
        message: "API6 is working"
    });
});

// flights endpoint: gets flights
router.get("/flights", (req, res, next) => {
    Flight.find({})
    .exec()
    .then( flights =>{
        return res.status(200).json({flights:flights})
    })
    .catch( err=>{
        return res.status(500).json({err:err});
    });
    res.status(200).json(flights);
});

// flights endpoint: creates flights
router.post("/flights", (req, res, next) => {
    const flight = new Flight({destination:req.body.destination, seatsAvailable:req.body.seatsAvailable, number:req.body.id})
    flight.save()
    .then( result=>{
        return res.status(201).json({message:"flight created"});
    })
    .catch( err=>{
        return res.status(500).json({err:err});
    });
});

// Vulnerable booking endpoint (Unrestricted Access)
router.get("/bookings", (re, res, next) => {
    Booking.find({})
    .exec()
    .then( result=>{   
        return res.status(200).json({bookings:result});
    })
    .catch( err => {
        return res.status(500).json({err:err});
    });
});

// Vulnerable booking endpoint (Unrestricted Access)
router.post('/bookings', checkauth, (req, res, next) => {
    const flightId = req.body.flightId;
    const numOfSeats = req.body.numOfSeats;
    
    Flight.findOne({number:flightId})
    .then( result=>{
        if (result.length <= 1) {
            return res.status(404).send('Flight not found');
        } else {
            console.log(numOfSeats);
             if ( Number(result.seatsAvailable) > numOfSeats ) {
                result.seatsAvailable = ((result.seatsAvailable) - numOfSeats);
            } else {
               return res.status(400).send('Insufficient seats available');
            }
            Booking.find({})
            .exec()
            .then( bookings =>{
                const booking = new Booking({flightID: flightId, numOfseat:numOfSeats})
                booking.save()
                .then(result =>{
                    return res.status(201).json({message: "booking succesfull", booking: booking});  
                }).catch( err =>{
                    return res.status(500).json({err:err});
                });

            }).catch( err=>{
                return res.status(500).json({err:err})
            });
            
        }
    })
    .catch(err=>{
        return res.status(500).json({err:err});
    });
});

// signup endpoint creates an account
router.post('/signup', (req, res, next) => {
    Account.find({email:req.body.email})
    .exec()
    .then( account=> {
        if (account.length >= 1) {
            return res.status(409).json({
                message: 'Mail Exist'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
            
                if (err) {
                    return res.status(500).json({
                        message: "unexpected error",
                        error: err
                    });
        
                } else {
                    const account = new Account({_id: new mongoose.Types.ObjectId, name:req.body.name, email: req.body.email, password: hash, posts: req.body.posts});
                    
                    account
                    .save()
                    .then( (result) => {
                        res.status(201).json({
                            message: "auth succesfull",
                            result: result
                        });
                    })
                    .catch( (err) => {
                        res.status(500).json({
                            message: "error",
                            error: err
                        });
                    });
                }
            });
        }
    
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).json({
            message:"unexpected error",
            error: err
        })
    })
  });
  
  // login endpoint gives a jwt token
  router.post("/login", (req, res, next) => {
    Account.find({ email: req.body.email })
    .exec()
    .then( (accounts) => {
        if (accounts.length <1) {
            return res.status(404).json({
                message: "Mail not found, account doesn't exist",
                message: 'Auth Failed'
            });
        } 
        bcrypt.compare(req.body.password, accounts[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message: 'auth failed'
                });
            }
  
            if (result) {
                const token = jwt.sign({
                    email: accounts[0].email,
                    isAdmin: accounts[0].isAdmin
                }, process.env.JWT_KEY6, 
                {
                    expiresIn: "1h"
                })
  
                return res.status(200).json({
                    message: 'Auth succesfull',
                    token: token
                });
            }
  
            res.status(401).json({
                message: 'Auth failed'
            });
        })
    })
    .catch();
  });

module.exports = router;