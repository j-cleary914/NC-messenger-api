const connection = require("../db/connection");

exports.fetchUser = username => {
  console.log(username);
  return connection
    .select("*")
    .from("users")
    .where("username", username)
    .then(response => {
      return response[0];
    });
};
