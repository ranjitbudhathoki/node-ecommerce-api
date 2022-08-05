const mongoose = require("mongoose");

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

mongoose.connection.on("open", () => {
  console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB: " + err);
});

function mongoConnect() {
  mongoose.connect(DB);
}

module.exports = mongoConnect;
