const { createMessage, selectMessages } = require("../models/messageModels.js");

exports.postMessage = (req, res, next) => {
  const data = req.body;

  createMessage(data)
    .then(message => {
      res.status(201).send({ message });
    })
    .catch(next);
};

exports.getMessages = (req, res, next) => {
  selectMessages()
    .then(messages => {
      res.status(200).send({ messages });
    })
    .catch(next);
};
