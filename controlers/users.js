const usersModel = require('../models/users');

const createUser = (username, password) => usersModel.createUser(username, password);

const getUser = username => usersModel.getUser(username);

module.exports = {
  createUser,
  getUser,
};
