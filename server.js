const dotenv = require("dotenv");
const http = require("http");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listeming on port ${process.env.PORT}`);
});

module.exports = app;
