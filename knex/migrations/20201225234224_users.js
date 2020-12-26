
exports.up = function(knex) {
   return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable();
        //TODO: any information captured from login
        table.datetime('dateOfBirth').notNullable();
        table.integer('diagnosisAge');
        table.string('ethnicity');
        table.boolean('hasEndometriosis').defaultTo(false);
        table.boolean('hasPCOS').defaultTo(false);
        table.boolean('hasDiabetes').defaultTo(false);
        table.string('typeOfPCOS');
   });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
