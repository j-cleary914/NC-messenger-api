const messageRouter = require("express").Router();
const { postMessage } = require("../controllers/messagesController");

messageRouter.route("/").post(postMessage);

module.exports = messageRouter;
