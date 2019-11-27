const { userData, messageData } = require("../development-data/index");

exports.seed = function(knex) {
  //   const messageInsertions = knex("messages").insert(messagesData);
  //   const usersInsertions = knex("users").insert(userData);

  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("users").insert(userData);
    })
    .then(() => {
      return knex("messages").insert(messageData);
    });
};
