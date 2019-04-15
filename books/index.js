const http = require("http");
const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");

mongoose.connect(DB_URI);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("running on port 3000");
  console.log("--------------------");
});
