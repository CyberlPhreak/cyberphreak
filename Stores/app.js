/* Runner pack
to run the app-web*/

var http = require ("http");
// When we create a server the
// callback function will be called
http.createServer(function (req,res) {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    });
    res.end("<h1>wer're Live <h1>");
    console.log("run");
// createServer returns an object with a
// listen method
}).listen(8000);
