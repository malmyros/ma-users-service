#!/usr/bin/env bash

knex migrate:latest --env development --knexfile ./knexfile.js
knex seed:run --env development --knexfile ./knexfile.js
npm run start
