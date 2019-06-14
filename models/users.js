const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

const createUser = (username, password) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return knex('users')
    .insert({
      username,
      password: hash,
    }).returning('*');
};

const getUser = username => knex('users').where({ username }).first();

const getUserById = id => knex('users').where({ id: parseInt(id, 10) }).first();

module.exports = {
  createUser,
  getUser,
  getUserById,
};
