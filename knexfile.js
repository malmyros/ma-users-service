const path = require('path');

module.exports = {
  production: {
    client: 'mysql',
    connection: process.env.PRODUCTION_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
  staging: {
    client: 'mysql',
    connection: process.env.STAGING_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
  development: {
    client: 'mysql',
    connection: process.env.DEVELOPMENT_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
};
