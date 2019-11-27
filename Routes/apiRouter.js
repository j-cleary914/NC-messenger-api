const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const { sendEndpoints } = require("../controllers/apiController");
const messageRouter = require("./messageRouter");

apiRouter.route("/").get(sendEndpoints);
apiRouter.use("/users", userRouter);
apiRouter.use("/messages", messageRouter);


module.exports = apiRouter;
