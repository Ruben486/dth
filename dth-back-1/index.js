const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(
  cors({
    credentials: false,
    origin: "*",
  })
);
server.use((req,res,next) => {
  const cacheTime = 60 * 60 *24
  res.set({
    'cache-control': `max-age${cacheTime}`
  });
  next();
});
server.listen(port);
console.log(`Servidor montado en http://localhost:${port}`);
