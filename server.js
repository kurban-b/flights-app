const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("flights.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(process.env.PORT || 5000, () => {
  console.log(`SERVER STARTED ON PORT: ${process.env.PORT || 5000}`);
});
