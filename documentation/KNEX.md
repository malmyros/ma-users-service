# KNEX.JS

Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

[knex documentation](https://knexjs.org/)

## Migration CLI

To use the migration CLI we need to install knex globally

```
npm i knex -g
```

After we have installed the migration CLI we can create migrations and run them.

1). To create a migration we can run:

```
knex migrate:make migration_name
```

2). To run the latest migration we can run:

```
knex migrate:latest
```

3). To rollback a migration we can run:

```
knex migrate:rollback migration_name
```

## Database Structure

After we run our first migration two new tables would be created in our database

`knexMigrations` and `knexMigrations_lock`

The `knexMigrations` table contains all the migration that have run where
the `knexMigrations_lock` is used to prevent multiple processes from running the
same migration batch in the same time.

## Migration Files

When we run `knex migrate:make migration_name` a new file will be created under
`src/knex/migrations` with a timestamp and the name of the migration.

Inside the file we need two functions an up and down function. The up function
is responsible for applying any new changes and the down function for automatically
rolling back in case there is an issue and the migration fails.

Example of the `UP` function

```
exports.up = (knex) => {
  return knex.schema.createTableIfNotExists('tableName', (t) => {
    t.increments('id').primary().notNullable()
    t.string('columnName').notNullable()
    t.string('columnName')
    t.timestamps(false, true)
  }).engine('InnoDB')
    .charset('utf8')
}
```

Example of the `DOWN` function

```
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('tableName')
}
```
