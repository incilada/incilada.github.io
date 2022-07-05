const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "../assets/data/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4200, () => {
  console.log("JSON Server is running");
});
