var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("Hello,World");
}).listen(2020);
console.log("Hello,World");

