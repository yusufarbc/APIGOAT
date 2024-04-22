const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'index.html'))  
});

router.get('/API1', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API1.html'))  
});

router.get('/API2', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API2.html'))  
});

router.get('/API3', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API3.html'))  
});

router.get('/API4', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API4.html'))  
});

router.get('/API5', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API5.html'))  
});

router.get('/API6', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API6.html'))  
});

router.get('/API7', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API7.html'))  
});

router.get('/API8', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API8.html'))  
});

router.get('/API9', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'static', 'html', 'API9.html'))  
});

router.get('/API10', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname,  '../', 'static', 'html', 'API10.html'))  
});

module.exports = router;