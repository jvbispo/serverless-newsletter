const User = require("../models/user");


const getByEmail = async (email) => {
    console.log(email);
    return User.findOne({
        where: {
            email: email,
        },
    });
}

const getAll = async () => {
    return User.findAll({
        where: {
            deletedOn: null,
        },
    });
}

const create = async (email) => {
    console.log('test');
    return User.create({
        email,
    });
};

module.exports = {
    create,
    getByEmail,
    getAll,
}