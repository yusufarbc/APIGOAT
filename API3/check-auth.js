const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        let decoded = jwt.verify(req.body.token, process.env.JWT_KEY3);
        req.userData = decoded;
        return next();
    } catch (err) {
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
    next();
}