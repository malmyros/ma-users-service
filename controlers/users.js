const usersModel = require('../models/users');

const createUser = (email, password) => usersModel.createUser(email, password);

const getUser = email => usersModel.getUser(email);

const deleteUser = email => usersModel.deleteUser(email);

module.exports = {
  createUser,
  getUser,
  deleteUser,
};
