const axios = require('axios');
const { authorize } = require('passport');

const book1 = {
    name: 'book1',
    author: 'author1'
};
const book2 = {
    name: 'book2',
    author: 'author2'
};
const book3 = {
    name: 'book3',
    author: 'author3'
};
const book4 = {
    name: 'book4',
    author: 'author4'
};
const book5 = {
    name: 'book5',
    author: 'author5'
};

module.exports = (req, res, next) => {
    try {
        axios
            .post('http://localhost:'+String(process.env.PORT_API5)+'/books', book1)
            .then(res => {
                console.log("Book1 ceated");
            })
            .catch(err => {
                console.log("Book1 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API5)+'/books', book2)
            .then(res => {
                console.log("Book2 ceated");
            })
            .catch(err => {
                console.log("Book2 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API5)+'/books', book3)
            .then(res => {
                console.log("Book3 ceated");
            })
            .catch(err => {
                console.log("Book3 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API5)+'/books', book4)
            .then(res => {
                console.log("Book4 ceated");
            })
            .catch(err => {
                console.log("Book4 cannot ceated");
            });

            axios
            .post('http://localhost:'+String(process.env.PORT_API5)+'/books', book5)
            .then(res => {
                console.log("Book5 ceated");
            })
            .catch(err => {
                console.log("Book5 cannot ceated");
            });

    } catch (error) {
        console.log("already intalled");
    }
    next();
}