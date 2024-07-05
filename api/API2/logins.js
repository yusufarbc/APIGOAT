const axios = require('axios');

const user1 = {
    email: "alice@example.com",
    password: "password123"
};
const user2 = {
    email: "bobe@example.com",
    password: "12345"
};

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));



module.exports = async (req, res, next) => {
    while(true){
        await sleep(9000);  
            axios
            .post('http://localhost/api/api2/login', user1)
            .then(res => {
                console.log("user1 login");
            })
            .catch(err => {
                console.log("user1 cannot login");
            });

            axios
            .post('http://localhost/api/api2/login', user2)
            .then(res => {
                console.log("user2 login");
            })
            .catch(err => {
                console.error("user2 cannnot login")
            });
        
    }
}