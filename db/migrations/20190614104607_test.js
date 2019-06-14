exports.up = knex => knex.schema.createTableIfNotExists('test_table', (t) => {
  t.increments('id').primary().notNullable();
  t.string('first_name').notNullable();
  t.string('last_name');
  t.timestamps(false, true);
});

exports.down = knex => knex.schema.dropTableIfExists('test_table');
