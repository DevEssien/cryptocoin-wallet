const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');

const Trader = sequelize.define('Trader', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    buy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sell: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    volume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    base_unit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Trader;

