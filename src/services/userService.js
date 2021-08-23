const UserRepository = require('../repositories/userRepository');

const createUser = async (email) => {
    console.log(email);
    const user = await  UserRepository.getByEmail(email);
    console.log(user);
    if (user) return user;

    const newUser = await UserRepository.create(email);

    return newUser;
}; 

const getAllUsers = async () => {
   return UserRepository.getAll();
}; 

module.exports = {
    createUser,
    getAllUsers,
}