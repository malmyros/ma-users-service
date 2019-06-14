exports.seed = knex => knex('test_table')
  .del()
  .then(() => knex('test_table')
    .insert([
      { id: 1, first_name: 'rowValue1', last_name: 'rowValue4' },
      { id: 2, first_name: 'rowValue2', last_name: 'rowValue5' },
      { id: 3, first_name: 'rowValue3', last_name: 'rowValue6' },
    ]));
