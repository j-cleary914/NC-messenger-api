const { updateUser } = require("../models/usersModel.js");

const patchUser = (req, res, next) => {
  const { avatar_url } = req.body;
  const { username } = req.params;
  updateUser(username, avatar_url)
    .then(user => {
      res.status(200).send({ user });
    })
    .catch(console.log);
};

module.exports = { patchUser };
