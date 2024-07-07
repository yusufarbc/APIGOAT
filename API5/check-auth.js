const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    next();
    //vulnerable function, cannot verify user
}