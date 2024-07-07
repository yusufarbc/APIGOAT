const axios = require('axios')
const path = require('path');

const user1 = {
    name: 'Alice',
    email: "alice@example.com",
    password: "secret"
};
const user2 = {
    name: 'Bob',
    email: "bobe@example.com",
    password: "secret"
};

const file1 = {
    id: "1",
    name: 'secret_document',
    content: "Alice's secret document",
    path: "/secret/doc"
    
};

const file2 = {
    id: "2",
    name: "private_photos",
    content: "Bob's private photos" ,
    path: "/private/photos"
}

const file3 = {
    id: "2",
    name: "another_file",
    content: "another's private library" ,
    path: "/private/library"
}

module.exports = (req, res, next) => {
    try {
        axios
            .post('http://localhost'+String(process.env.PORT_API2)+'/signup', user1)
            .then(res => {
                console.log("user1 ceated");
            })
            .catch(err => {
                console.log("user1 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API2)+'/signup', user2)
            .then(res => {
                console.log("user2 cannot ceated");
            })
            .catch(err => {
                console.error(err)
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API2)+'/files', file1)
            .then(res => {
                console.log("file1 ceated");
            })
            .catch(err => {
                console.error("file1 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API2)+'/files', file2)
            .then(res => {
                console.log("file2 ceated");
            })
            .catch(err => {
                console.error("file2 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API2)+'/files', file3)
            .then(res => {
                console.log("file2 ceated");
            })
            .catch(err => {
                console.error("file2 cannot ceated");
            });
    } catch (error) {
        console.log("already installed");
    }
    next();
}