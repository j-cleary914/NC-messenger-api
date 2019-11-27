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

  return update;
};

module.exports = { updateUser };
