
const { addUser, fetchUser } = require("../models/userModel");

exports.postUser = (req, res, next) => {
  const { body } = req;
  return addUser(body)
    .then(response => {
      const user = response[0];
      res.status(201).send({ user });
    })
    .catch(next);
}

exports.getUser = (req, res, next) => {
  fetchUser(req.params.username).then(user => {
    console.log("user response is...", user);
    res.status(200).send({ user });
  });
};
