const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

const createUser = (email, password) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return knex('users')
    .insert({
      email,
      password: hash,
    });
};

const getUser = email => knex('users').where({ email }).first();

const getUserById = id => knex('users').where({ id: parseInt(id, 10) }).first();

const deleteUser = id => knex('users').where({ id }).del();

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
};
