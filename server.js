const http = require("http");


const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const mongoConnect = require("./services/mongo");


const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listeming on port ${process.env.PORT}`);
  });
}

startServer()

