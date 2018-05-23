var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'Text/html'});
    res.write('<h1>HELLO SE by Node.js</h1>');
    res.end();
}).listen(8080,'127.0.0.1');