const { addUser } = require("../models/userModel");

exports.postUser = (req, res, next) => {
  const { body } = req;
  return addUser(body)
    .then(response => {
      const user = response[0];
      res.status(201).send({ user });
    })
    .catch(next);
};
