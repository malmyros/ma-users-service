const usersModel = require('../models/users');
const { User } = require('../schemas/user');

const createUser = (email, password) => usersModel.createUser(email, password);

const getUser = email => usersModel.getUser(email).then(user => new User(user).toJSON);

const getUserById = userId => usersModel.getUserById(userId).then(user => new User(user).toJSON);

const deleteUser = userId => usersModel.deleteUser(userId);

const updateUser = (userId, firstName, lastName) => usersModel.updateUser(userId, firstName, lastName);

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
};
