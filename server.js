const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const server = http.createServer((request, result) => {
  const filePath = path.join(
    __dirname,
    request.url === "/" ? "index.html" : request.url
  );

  const extensionName = String(path.extname(filePath).toLowerCase);

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  const contentType = mimeTypes[extensionName] || "application/octet-stream";
});

server.listen(port, () => {
  console.log("Server started on port", port);
});
