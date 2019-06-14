exports.up = knex => knex.schema.createTableIfNotExists('users', (t) => {
  t.increments();
  t.string('email').unique().notNullable();
  t.string('password').notNullable();
  t.string('first_name');
  t.string('last_name');
  t.timestamps(false, true);
  t.index(['email', 'first_name', 'last_name']);
});

exports.down = knex => knex.schema.dropTableIfExists('users');
