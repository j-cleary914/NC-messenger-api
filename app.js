const express = require("express");
const app = express();
const apiRouter = require("./Routes/apiRouter");
const cors = require("cors");

// requiring in http to build on top of the express app
const http = require("http").Server(app);
// requiring in socket.io to build on top of http
const io = require("socket.io")(http);

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;
