const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : `${req.url}`,
  );
  const extName = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".css": " text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error?.code === "ENOENT") {
        res.writeHead(404, {
          "content-type": "text/html",
        });
        res.end("File not found");
      }
    } else {
      res.writeHead(200, {
        "content-type": contentType,
      });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log("__dirname : " + __dirname);
  console.log("__filename : " + __filename);
  /*
    __dirname : /Users/anyhowinfo/Desktop/execute/self-written-projects-node/2server
    __filename : /Users/anyhowinfo/Desktop/execute/self-written-projects-node/2server/server.js
  */
  console.log("Server started at port : " + port);
});
