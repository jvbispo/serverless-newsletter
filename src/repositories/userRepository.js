const User = require("../models/user");


const getByEmail = async (email) => {

    return User.findOne({
        where: {
            email,
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

const create = async (name, email) => {
    return User.create({
        email,
        name,
    });
};

module.exports = {
    create,
    getByEmail,
    getAll,
}