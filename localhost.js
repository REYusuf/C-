var http = require('http');
http.createServer(function(req,res){
    res.write("Hellü World! WELCOME to this tutorial");
    res.end();  
}).listen(8080);