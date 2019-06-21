
exports.up = knex => knex.schema
  .hasTable('users_group')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users_group', (t) => {
        t.increments('user_group_id').notNullable().primary();
        t.string('name', 64).notNullable();
        t.text('permission').notNullable();
      });
    }
    return null;
  });

exports.down = knex => knex.dropTableIfExists('users_group');
