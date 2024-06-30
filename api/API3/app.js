const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const mongose = require('mongoose');
mongose.connect('mongodb+srv://yusuftalhaarabaci:qpEitl3p7ZLq41do@appgoat.aogk0vv.mongodb.net/?retryWrites=true&w=majority&appName=appgoat');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const routes = require('./routes');
app.use('/',routes);

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


app.listen(8003, ()=> {
    console.log("listening on port 8003");
});

