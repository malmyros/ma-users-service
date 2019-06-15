const usersModel = require('../models/users');

const createUser = (email, password) => usersModel.createUser(email, password);

const getUser = email => usersModel.getUser(email);

const deleteUser = id => usersModel.deleteUser(id);

const updateUser = (id, firstName, lastName) => usersModel.updateUser(id, firstName, lastName);

module.exports = {
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
