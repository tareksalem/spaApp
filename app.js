const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const url = require("url");
const path = require("path");
var staticFolders = require("./config");
var mimeTylpes = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".html": "text/html",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".jpeg": "image/jpeg",
    ".json": "application/json",
    ".txt": "text/plain",
    ".ico": "image/faveicon"

};
function errorHandle(req, res) {
    if (res.statusCode == 402) {
        render(req, res, "error.html");
    }
    if (res.statusCode == 404) {
        render(req, res, "error.html");
    }
}
function staticFiles(req, res) {

         var fileSource = path.join(staticFolders.public, req.url);
         fs.exists(fileSource, function (exist) {
             if (exist) {
                 var fileStream = fs.createReadStream(fileSource);
                 var headers = {"content-type": mimeTylpes[path.extname(req.url)]};
                 res.writeHead(200, headers);
                 fileStream.pipe(res);
             } else {
                 res.writeHead(402, "file not found");
                 res.statusCode = 402;
                 errorHandle(req, res);
             }
         });
}

function render(req, res, file) {
    if (req.method == "GET") {
        var htmlSource = path.join(staticFolders.views, file);
            var htmlStream = fs.createReadStream(htmlSource);
        res.writeHead(200, {"content-type": "text/html"});
        htmlStream.pipe(res);
    }
}
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("hello");
    }
});

server.listen(port);