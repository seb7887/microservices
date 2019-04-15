const http = require("http");
const app = require("./src/app");

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("running on port 3000");
  console.log("--------------------");
});
