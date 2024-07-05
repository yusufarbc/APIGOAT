const axios = require('axios');

const user1 = {
    name: 'Alice',
    email: "alice@example.com",
    isAdmin: true,
    password: "password123",
    posts: ['Public post 1']
};
const user2 = {
    name: 'Bob',
    email: "bobe@example.com",
    isAdmin: false,
    password: "12345",
    posts: ['Public post 2'] 
};

const user3 = {
    name: 'Michel',
    email: "michele@example.com",
    isAdmin: false,
    password: "12345",
    posts: ['Public post 3'] 
};

module.exports = (req, res, next) => {
    try {
        axios
            .post('http://localhost:3000/api/api3/signup', user1)
            .then(res => {
                console.log("user1 ceated");
            })
            .catch(err => {
                console.log("user1 ceated");
            });

            axios
            .post('http://localhost:3000/api/api3/signup', user2)
            .then(res => {
                console.log("user2 ceated");
            })
            .catch(err => {
                console.error(err)
            });

            axios
            .post('http://localhost:3000/api/api3/signup', user3)
            .then(res => {
                console.log("user3 ceated");
            })
            .catch(err => {
                console.error(err)
            });

    } catch (error) {
        console.log("already intalled");
    }
    next();
}