const connection = require("../db/connection");

exports.createMessage = data => {
  const { sender, message } = data;

  return connection("messages")
    .insert({ sender, message })
    .returning("*");
};

exports.selectMessages = () => {
  return connection("messages").select("*");
};
