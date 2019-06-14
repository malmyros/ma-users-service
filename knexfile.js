const path = require('path');

const migrations = {
  tableName: 'knex_migrations',
  directory: path.join(__dirname, 'db', 'migrations'),
};

const seeds = {
  directory: path.join(__dirname, 'db', 'seeds'),
};

const pool = {
  min: 5,
  max: 30,
};

module.exports = {
  production: {
    client: 'mysql',
    connection: {
      database: 'ma-users-service-production',
      user: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
    },
    pool,
    migrations,
    seeds,
  },
  staging: {
    client: 'mysql',
    connection: {
      database: 'ma-users-service-staging',
      user: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
    },
    pool,
    migrations,
    seeds,
  },
  development: {
    client: 'mysql',
    connection: {
      database: 'ma-users-service-development',
      user: 'root',
      password: '',
    },
    pool,
    migrations,
    seeds,
  },
};
