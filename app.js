//const bootstrap = require('bootstrap');
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

//API Routes
const indexRoutes = require('./routes/index');
const api1Routes = require('./routes/API1');
const api2Routes = require('./routes/API2');
const api3Routes = require('./routes/API3');
const api4Routes = require('./routes/API4');
const api5Routes = require('./routes/API5');
const api6Routes = require('./routes/API6');
const api7Routes = require('./routes/API7');
const api8Routes = require('./routes/API8');
const api9Routes = require('./routes/API9');
const api10Routes = require('./routes/API10');

const app = express();

//database connection
const database = require('./utilities/database');
database.authenticate()
.then( () =>{
    console.log("connection established");
    })
.catch(err =>{
    console.error("unable to connect");
    console.log(err)
    });


//indexRoutes middleware
app.use('/',indexRoutes);

//api1Routes middleware
app.use('/API1',api1Routes);

//api2Routes middleware
app.use('/API2',api2Routes);

//api3Routes middleware
app.use('/API3',api3Routes);

//api4Routes middleware
app.use('/API4',api4Routes);

//api5Routes middleware
app.use('/API5',api5Routes);

//api6Routes middleware
app.use('/API6',api6Routes);

//api7Routes middleware
app.use('/API7',api7Routes);

//api8Routes middleware
app.use('/API8',api8Routes);

//api9Routes middleware
app.use('/API9',api9Routes);

//api10Routes middleware
app.use('/API10',api10Routes);


//not found middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404; 
    res.sendFile(path.join(__dirname, 'views', '404.html')) 
    console.error(error)
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

module.exports= app;