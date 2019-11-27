const usersRouter = require("express").Router();
const { patchUser } = require("../controllers/usersController.js");

usersRouter.route("/:username").patch(patchUser);

module.exports = { usersRouter };
