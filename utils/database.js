require('dotenv').config();

const { Sequelize } = require('sequelize');

const dbPassword = process.env.MYSQL_DB_PASSWORD;

const sequelize = new Sequelize('crypto_traderdb', 'root', dbPassword, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;