var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === "/") {
        fs.readFile("head.html", function (err, pgres) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write("HEAD.HTML NOT FOUND");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    } else if (req.url === "/tailPage") {
        fs.readFile("tail.html", function (err, pgres) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write("TAIL.HTML NOT FOUND");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    } else {
        // Handle other routes here, if needed
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("PAGE NOT FOUND");
        res.end();
    }

}).listen(4000, function () {
    console.log("SERVER STARTED PORT: 4000");
});
