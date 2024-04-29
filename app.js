const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const mongose = require('mongoose');
mongose.connect('mongodb+srv://yusuftalhaarabaci:qpEitl3p7ZLq41do@appgoat.aogk0vv.mongodb.net/?retryWrites=true&w=majority&appName=appgoat');

const api1handler = require('./api/API1/api1handler');
const api2handler = require('./api/API2/api2handler');
const api3handler = require('./api/API3/api3handler');
const api4handler = require('./api/API4/api4handler'); 
const api5handler = require('./api/API5/api5handler');
const api6handler = require('./api/API6/api6handler');
const api7handler = require('./api/API7/api7handler');
const api8handler = require('./api/API8/api8handler');
const api9handler = require('./api/API9/api9handler');
const api10handler = require('./api/API10/api10handler');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Index Routes
const indexRoutesHandler = require('./utils/index');

//indexRoutes middleware
app.use('/',indexRoutesHandler);

//API
app.use('/api/api1', api1handler);
app.use('/api/api2', api2handler);
app.use('/api/api3', api3handler);
app.use('/api/api4', api4handler);
app.use('/api/api5', api5handler);
app.use('/api/api6', api6handler);
app.use('/api/api7', api7handler);
app.use('/api/api8', api8handler);
app.use('/api/api9', api9handler);
app.use('/api/api10', api10handler);

//not found middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404; 
    next(error);
});

// other error middleware
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(3000, ()=> {
    console.log("listening on port 3000")
});

