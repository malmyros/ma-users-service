const usersModel = require('../models/users');
const { User } = require('../helpers/users');

const createUser = (email, password) => usersModel.createUser(email, password);

const getUser = email => usersModel.getUser(email).then(user => new User(user).toJSON);

const getUserById = id => usersModel.getUserById(id).then(user => new User(user).toJSON);

const deleteUser = id => usersModel.deleteUser(id);

const updateUser = (id, firstName, lastName) => usersModel.updateUser(id, firstName, lastName);

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
};
