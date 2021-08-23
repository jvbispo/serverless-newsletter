const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.NUMBER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdOn: {
        type: Sequelize.DATE,
    },
    deletedOn: {
        type: Sequelize.DATE,
    }
});


module.exports = User;