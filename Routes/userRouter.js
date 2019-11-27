const usersRouter = require("express").Router();
const { postUser,getUser } = require("../controllers/userController");

userRouter.route("/").post(postUser).get(getUser);

module.exports = usersRouter;