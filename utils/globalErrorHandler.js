const globalErrorHandler = (err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err,
  });
  next()
};


module.exports = globalErrorHandler;