
exports.up = function(knex) {
    return knex.schema.createTable('maintainers', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('passwordHash', 256).notNullable();
        table.string('emailVerificationToken',64);
        //TODO: roleId
        table.timestamps(false, true);
   });
};

exports.down = function(knex) {
    return knex.schema.dropTable('maintainers');
};
