
const userRouter = require("express").Router();
const { patchUser, postUser, getUser } = require("../controllers/userController.js");

userRouter.route("/").post(postUser).get(getUser);
userRouter.route("/:username").patch(patchUser);


module.exports = userRouter;

