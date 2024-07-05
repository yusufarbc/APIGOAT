const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const decoded = jwt.verify(req.body.token, "api1");
        req.userData = decoded;
        console.log("verify acccess");
        next();
    } catch (error) {
        console.log("verify deny");
        return res.status(403).json({
            message:"forbidden"
        })
    }
};
