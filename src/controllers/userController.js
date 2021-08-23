const userService = require('../services/userService');
const User = require('../models/user');
const sequelize = require('../config/database');

const create = async (req, res, next) => {
    try {
        // const { name, email } = req.body;

        // const user = await userService.createUser(name, email);
        
        const user = await User.findAll();

        res.json(user);

    } catch (err) {
        next(err);
    }
}


const fetch = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();

        res.json(users);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    create,
    fetch,
}