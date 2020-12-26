
exports.up = function(knex) {
    return knex.schema.createTable('health_metrics', (table) => {
        table.increments('id').primary();
        table.foreign('userId').references('users.id');
        table.float('weight');
        table.string('weightUnit');
        table.float('height');
        table.string('heightUnit');
        table.float('bodyFatPercent');
        table.timestamps(false, true);
   });
};

exports.down = function(knex) {
    return knex.schema.dropTable('health_metrics');
};
