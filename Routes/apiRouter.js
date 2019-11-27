const apiRouter = require("express").Router();
const { sendEndpoints } = require("../controllers/apiController");
const { userRouter } = require("./userRouter");

apiRouter.route("/").get(sendEndpoints);

apiRouter.use("/users", userRouter);

module.exports = apiRouter;
