module.exports ( () => {
    const api1handler = require('../api/API1/api1handler');
    const api2handler = require('../api/API2/api2handler');
    const api3handler = require('../api/API3/api3handler');
    const api4handler = require('../api/API4/api4handler'); 
    const api5handler = require('../api/API5/api5handler');
    const api6handler = require('../api/API6/api6handler');
    const api7handler = require('../api/API7/api7handler');
    const api8handler = require('../api/API8/api8handler');
    const api9handler = require('../api/API9/api9handler');
    const api10handler = require('../api/API10/api10handler');

    app.use('/api1', api1handler);
    app.use('/api2', api2handler);
    app.use('/api3', api3handler);
    app.use('/api4', api4handler);
    app.use('/api5', api5handler);
    app.use('/api6', api6handler);
    app.use('/api7', api7handler);
    app.use('/api8', api8handler);
    app.use('/api9', api9handler);
    app.use('/api10', api10handler);
});