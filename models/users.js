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
  .select(['user_id', 'email', 'first_name', 'last_name'])
  .where({ email })
  .first();

const getUserById = userId => knex('users')
  .select(['user_id', 'email', 'first_name', 'last_name'])
  .where({ user_id: parseInt(userId, 10) })
  .first();

const deleteUser = userId => knex('users')
  .where({ user_id: userId })
  .del();

const updateUser = (userId, firstName, lastName) => knex('users')
  .where({ user_id: userId })
  .update({ first_name: firstName, last_name: lastName });

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
};
