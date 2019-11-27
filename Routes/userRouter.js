const usersRouter = require("express").Router();
const { postUser } = require("../controllers/userController");

usersRouter.route("/").post(postUser);

module.exports = usersRouter;
