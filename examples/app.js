"use strict";
const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/plain"});
  res.write("This is sent from a Node.js server");
  res.end();
}).listen(8888);