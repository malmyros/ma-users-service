const usersModel = require('../models/users');

const createUser = (email, password) => usersModel.createUser(email, password);

const getUser = email => usersModel.getUser(email);

module.exports = {
  createUser,
  getUser,
};
