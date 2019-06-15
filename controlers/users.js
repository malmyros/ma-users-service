const usersModel = require('../models/users');

const createUser = (email, password) => usersModel.createUser(email, password);

const getUser = email => usersModel.getUser(email);

const deleteUser = id => usersModel.deleteUser(id);

module.exports = {
  createUser,
  getUser,
  deleteUser,
};
