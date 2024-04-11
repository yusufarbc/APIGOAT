const Sequelize = require('sequelize');

const fs = require('fs');

//const { options } = require('../app');

const sequelize = new Sequelize('apidiot', 'superman', "G{gQqbX#,:^m[5Y's>f)", {
    host: 'node-app.postgres.database.azure.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        // CAUTION: there are better ways to load the certificate, see comments below
        ca: fs.readFileSync('DigiCertGlobalRootCA.crt.pem').toString()
      }
    }
  });

module.exports = sequelize;