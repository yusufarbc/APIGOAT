//const bootstrap = require('bootstrap');
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');


const app = express();

//Index Routes
const indexRoutesHandler = require('./utils/indexRoutes');

//indexRoutes middleware
app.use('/',indexRoutesHandler);

//API handler
const apiHandler = require('./utils/apihandler');

//API handler middleware
app.use('/api', apiHandler(app));

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

module.exports= app;