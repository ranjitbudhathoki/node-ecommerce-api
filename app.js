const express = require("express");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const globalErrorHandler = require("./utils/globalErrorHandler");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can;t find ${req.originalUrl} on this server`,
  });
  next();
});

app.use(globalErrorHandler);

module.exports = app;

