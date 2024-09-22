var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');  // Import the path module

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  // Normalize the path to avoid issues with slashes
  filename = path.normalize(__dirname + q.pathname); // local path concatenation will appen

  console.log("Request for " + filename + " received.");

  // Check if the file exists before reading it
  if (!fs.existsSync(filename)) {
    console.log("File not found: " + filename);
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  }

  // Read and serve the file
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log("Server running at http://localhost:8080/");
