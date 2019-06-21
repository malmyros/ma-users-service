exports.up = knex => knex.schema
  .hasTable('users')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (t) => {
        t.increments('user_id').notNullable().primary();
        t.integer('user_group_id', 11).notNullable();
        t.string('username', 20).notNullable();
        t.string('password', 40).notNullable();
        t.string('salt', 9).notNullable();
        t.string('first_name', 32).notNullable();
        t.string('last_name', 32).notNullable();
        t.string('email', 96).notNullable();
        t.string('image', 255).notNullable();
        t.string('code', 40).notNullable();
        t.string('ip', 40).notNullable();
        t.integer('status', 1).notNullable();
        t.timestamps(false, true);
        t.index(['email', 'first_name', 'last_name']);
      });
    }
    return null;
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
