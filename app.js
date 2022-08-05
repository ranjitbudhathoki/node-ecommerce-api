const express = require("express");

const app = express();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
