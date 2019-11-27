const apiRouter = require("express").Router();
const { sendEndpoints } = require("../controllers/apiController");
const { usersRouter } = require("./usersRouter");

apiRouter.route("/").get(sendEndpoints);

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
