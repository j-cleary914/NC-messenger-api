const { fetchUser } = require("../models/userModel");

exports.getUser = (req, res, next) => {
  fetchUser(req.params.username).then(user => {
    console.log("user response is...", user);
    res.status(200).send({ user });
  });
};
