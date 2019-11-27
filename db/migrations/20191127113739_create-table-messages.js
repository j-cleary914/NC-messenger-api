exports.up = function(knex) {
  return knex.schema.createTable("messages", messageTable => {
    messageTable
      .increments("message_id")
      .primary()
      .unique();
    messageTable.string("message").notNullable();
    messageTable
      .string("sender")
      .references("username")
      .inTable("users")
      .notNullable();
    messageTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("messages");
};
