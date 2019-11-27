const express = require("express");
const app = express();
const apiRouter = require("./Routes/apiRouter");
const { normalErrors } = require("./errorHandlers");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.use(normalErrors);

module.exports = app;
