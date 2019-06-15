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

const getUser = email => knex('users')
  .select(['id', 'email', 'first_name', 'last_name'])
  .where({ email })
  .first();

const getUserById = id => knex('users')
  .select(['id', 'email', 'first_name', 'last_name'])
  .where({ id: parseInt(id, 10) })
  .first();

const deleteUser = id => knex('users')
  .where({ id })
  .del();

const updateUser = (id, firstName, lastName) => knex('users')
  .where({ id })
  .update({ first_name: firstName, last_name: lastName });

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
};
