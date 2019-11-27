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
}
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
