const apiRouter = require("express").Router();
const { sendEndpoints } = require("../controllers/apiController");
const messageRouter = require("./messageRouter");

apiRouter.route("/").get(sendEndpoints);
apiRouter.use("/messages", messageRouter);

module.exports = apiRouter;
