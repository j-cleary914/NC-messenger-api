const apiRouter = require("express").Router();
const { sendEndpoints } = require("../controllers/apiController");

apiRouter.route("/").get(sendEndpoints);

module.exports = apiRouter;
