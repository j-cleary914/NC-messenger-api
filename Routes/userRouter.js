const userRouter = require("express").Router();
const { patchUser } = require("../controllers/userController.js");

userRouter.route("/:username").patch(patchUser);

module.exports = { userRouter };
