const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Đảm bảo rằng bạn chuyển tên tệp nếu nó không được đặt tên là db.json
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server đang chạy tại http://localhost:${port}`);
});
