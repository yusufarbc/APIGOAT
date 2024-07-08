const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

router.get('/api1', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API1.html'));
});

router.get('/api2', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API2.html'));
});

router.get('/api3', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API3.html'));
});

router.get('/api4', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API4.html'));
});

router.get('/api5', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API5.html'));
});

router.get('/api6', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API6.html'));
});

router.get('/api7', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API7.html'));
});

router.get('/api8', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API8.html'));
});

router.get('/api9', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API9.html'));
});

router.get('/api10', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/API10.html'));
});

module.exports = router;