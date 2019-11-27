const messageRouter = require("express").Router();
const {
  postMessage,
  getMessages,
} = require("../controllers/messagesController");

messageRouter
  .route("/")
  .post(postMessage)
  .get(getMessages);

module.exports = messageRouter;
