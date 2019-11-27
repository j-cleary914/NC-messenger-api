const usersRouter = require("express").Router();
const { postUser } = require("../controllers/usersController");

usersRouter.route("/").post(postUser);

module.exports = usersRouter;
