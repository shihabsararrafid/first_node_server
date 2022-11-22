const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end(
      "Hello , welcome to the node js !!!!!! You can do it . Let's Go. It's time to explore the new world ...................."
    );
  } else {
    res.end("Not a good way");
  }
});

server.listen(5000);
