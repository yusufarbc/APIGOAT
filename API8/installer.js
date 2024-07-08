const axios = require('axios')

const p1 = { username: "username", name: "user1", email: "usedfsfsdr@test.com", id:5 }
const  p2 = { username: "admin", name: "jane", email:"jane@test.com", id:2 }
const  p3 = { username: "user", name: "johny", email:"johny@test.com", id:3 }
const  p4 = { username: "account", name: "account", email:"account@test.com", id:4 }

module.exports = (req, res, next) => {
    try {
        axios
            .post('http://localhost:'+String(process.env.PORT_API8)+'/profiles', p1)
            .then(res => {
                console.log("profile1 is ceated");
            })
            .catch(err => {
                console.log("profile1 cannot be ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API8)+'/profiles', p2)
            .then(res => {
                console.log("profile2 is ceated");
            })
            .catch(err => {
                console.log("profile2 cannot be ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API8)+'/profiles', p3)
            .then(res => {
                console.log("profile3 is ceated");
            })
            .catch(err => {
                console.error("profile3 cannot be ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API8)+'/profiles', p4)
            .then(res => {
                console.log("profile4 is ceated");
            })
            .catch(err => {
                console.error("profile4 cannot be ceated");
            });

    } catch (error) {
        console.log("already installed");
    }
    next();
}