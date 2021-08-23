const userService = require('../services/userService');

const create = async (req, res, next) => {
    try {
        const { email } = req.body;
        console.log(email);
        const user = await userService.createUser(email);
    
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