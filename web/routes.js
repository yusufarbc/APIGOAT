const express = require('express');
const { request } = require('http');
const router = express.Router();
const path = require('path');

const Flag = require('./Flag');

router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.get('/api1', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api1', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api2', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api2', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api3', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api3', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api4', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api4', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api5', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api5', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api6', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api6', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api7', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api7', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api8', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api8', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api9', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api9', (req, res, next) => {
    flag = req.body.flag;

});

router.get('/api10', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.post('/api10', (req, res, next) => {
    flag = req.body.flag;

});


module.exports = router;