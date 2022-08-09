const express = require("express");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const globalErrorHandler = require("./utils/globalErrorHandler");
const AppError = require("./utils/appError");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
