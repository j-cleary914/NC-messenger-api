const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const { sendEndpoints } = require("../controllers/apiController");

apiRouter.route("/").get(sendEndpoints);
apiRouter.use("/users", userRouter);

module.exports = apiRouter;
