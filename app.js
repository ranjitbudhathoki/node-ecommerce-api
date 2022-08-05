const express = require("express");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");

const app = express();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
