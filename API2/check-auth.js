const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const decoded = jwt.verify(req.body.token, "api2");
        req.userData = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
    next();
}