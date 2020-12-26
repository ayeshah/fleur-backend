
exports.up = function(knex) {
    return knex.schema.createTable('daily_symptoms', (table) => {
        table.increments('id').primary();
        table.foreign('userId').references('users.id');
        table.string('cervicalFluid');
        table.string('bloodFlow');
        table.string('sleep');
        table.string('mood');
        table.boolean('hasCramps').defaultTo(false).notNullable();
        table.boolean('hasAcne').defaultTo(false).notNullable();
        table.boolean('hasBloating').defaultTo(false).notNullable();
        table.timestamps(false, true);
   });
};

exports.down = function(knex) {
    return knex.schema.dropTable('daily_symptoms');
};
