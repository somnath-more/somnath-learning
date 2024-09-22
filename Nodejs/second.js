const http = require('http');   

const server = http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write("<h1>Hello Nodejs </h1>")
    resp.write("<h2>Understanding http module for creating server and sending response</h2>")
    resp.write("<button >Click Me !!</button>")
    resp.end("ok bye bye");
})

server.listen(9999)