exports.up = function(knex) {
  return knex.schema.createTable("users", userTable => {
    userTable
      .string("username")
      .unique()
      .primary();
    userTable
      .string("avatar_url")
      .defaultTo(
        "https://www.synbio.cam.ac.uk/images/avatar-generic.jpg/image"
      );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
