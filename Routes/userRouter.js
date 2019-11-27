const userRouter = require("express").Router();

const { getUser } = require("../controllers/userController.js");

userRouter.route("/:username").get(getUser);

module.exports = userRouter;
