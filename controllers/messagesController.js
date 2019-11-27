const { createMessage } = require("../models/messageModels.js");

exports.postMessage = (req, res, next) => {
  const data = req.body;

  createMessage(data)
    .then(message => {
      res.status(201).send({ message });
    })
    .catch(next);
};
