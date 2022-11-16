const handleError = async (err, req, res, next) => {
  res
    .status(404)
    .json({ status: "falied to process this request", response: err });
};

module.exports = handleError;
