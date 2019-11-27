const connection = require("../db/connection");

const updateUser = (username, avatar_url) => {
  const update = connection
    .update({ avatar_url })
    .where({ username })
    .from("users")
    .returning("*")
    .then(rows => {
      return rows[0];
    });

  // const update = connection.select("*").from();

  return update;
};

module.exports = { updateUser };
