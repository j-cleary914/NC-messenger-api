const connection = require("../db/connection");

exports.addUser = user => {
  if (!user.username) {
    return Promise.reject({
      status: 400,
      msg: "Not enough information. Please input 'username'",
    });
  }

  return connection("users")
    .insert(user)
    .returning("*");
};
