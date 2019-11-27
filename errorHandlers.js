exports.normalErrors = (err, req, res, next) => {
  const { status, msg } = err;
  res.status(status).send({ msg });
};
