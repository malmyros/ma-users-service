const path = require('path');

const migrations = {
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
      database: 'ma-template-service-production',
      user: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      host: process.env.SQL_HOST,
    },
    pool,
    migrations,
    seeds,
  },
  staging: {
    client: 'mysql',
    connection: {
      database: 'ma-template-service-staging',
      user: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      host: process.env.SQL_HOST,
    },
    pool,
    migrations,
    seeds,
  },
  development: {
    client: 'mysql',
    connection: {
      database: 'ma-template-service-development',
      user: 'root',
      password: '',
      host: process.env.SQL_HOST,
    },
    pool,
    migrations,
    seeds,
  },
};
