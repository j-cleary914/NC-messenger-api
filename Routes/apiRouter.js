const apiRouter = require("express").Router();
const usersRouter = require("./usersrouter");
const { sendEndpoints } = require("../controllers/apiController");

apiRouter.route("/").get(sendEndpoints);

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
