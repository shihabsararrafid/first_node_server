const http = require("http");
const url = require("url");
//to use node js file system we have to require file system to the application
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    fs.readFile("./demoFile.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      return res.end();
    });
    // res.end(
    //   "Hello , welcome to the node js !!!!!! You can do it . Let's Go. It's time to explore the new world ...................."
    // );
  } else if (req.url == "/read") {
    fs.readFile("./first.txt", (err, data) => {
      if (err) {
        res.end(" Failed to load the data from server!!!!!!!!");
      } else {
        res.writeHead(200, { "content-type": "text/txt" });
        res.write(data);
        return res.end();
      }
    });
  } else if (req.url == "/write") {
    fs.readFile("./first.txt", (err, data) => {
      if (data) {
        fs.writeFile("second.txt", data, (err) => {
          if (err) throw err;
          else console.log("Updated");
        });
        res.end("Successfully updated>>>>>>>>>>><<<<<<<<<<<<<");
      }
    });
  } else if (req.url == "/append") {
    fs.appendFile(
      "./first.txt",
      "Sorry, it is not pull it is full!!!!!!",
      (err) => {
        if (err) {
          res.end("Failed to append!!!!!!!!!!!!");
        } else {
          res.end("Appended!!!!!!!!!!!!!!!!!!!");
        }
      }
    );
  } else {
    res.end("Not a good way");
  }
});

server.listen(5000);
