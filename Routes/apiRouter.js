const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const { sendEndpoints } = require("../controllers/apiController");

const messageRouter = require("./messageRouter");

apiRouter.route("/").get(sendEndpoints);
apiRouter.use("/messages", messageRouter);
apiRouter.use("/users", userRouter);

module.exports = apiRouter;
