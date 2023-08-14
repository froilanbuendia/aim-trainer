// Service talks to the database and has the busines logic
const { v4: uuid } = require('uuid');
const User = require('../../database/User');

const getAllUsers = async () => {
  return await User.getAllUsers();
};

const getUser = async (user) => {
  const doesUsernameExist = await User.doesUsernameExist(user);
  if (doesUsernameExist) {
    return user.username;
  }
  return "Username doesn't exist";
};
const createNewUser = async (newUser) => {
  const createdUser = {
    id: uuid(),
    ...newUser,
  };
  const doesUsernameExist = await User.doesUsernameExist(createdUser);
  if (doesUsernameExist) {
    return 'Username already exists';
  }
  const newCreatedUser = await User.createNewUser(createdUser);
  return newCreatedUser;
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
};
