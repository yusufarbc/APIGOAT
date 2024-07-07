const axios = require('axios');

const user1 = {
    name: 'Alice',
    email: "alice@example.com",
    password: "password123"
};
const user2 = {
    name: 'Bob',
    email: "bobe@example.com",
    password: "12345"
};



module.exports = (req, res, next) => {
    try {
        axios
            .post('http://localhost/api/api2/signup', user1)
            .then(res => {
                console.log("user1 ceated");
            })
            .catch(err => {
                console.log("user1 cannot ceated");
            });

            axios
            .post('http://localhost/api/api2/signup', user2)
            .then(res => {
                console.log("user2  ceated");
            })
            .catch(err => {
                console.log("user2 cannot ceated");
            });

    } catch (error) {
        console.log("already intalled");
    }
    next();
}