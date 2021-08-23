const UserRepository = require('../repositories/userRepository');

const createUser = async (name, email) => {
    const user = await  UserRepository.getByEmail(email);

    if (user) return user;

    const newUser = await UserRepository.create(name, email);

    return newUser;
}; 

const getAllUsers = async () => {
   return UserRepository.getAll();
}; 

module.exports = {
    createUser,
    getAllUsers,
}