var http = require('http');
var fs = require("fs"); /* Se encarga de comunicarse con el sistema de archivos del pc*/



http.createServer(function(req,res){
	fs.readFile("./index.html", function(err,html){
		res.write(html);
		res.end();
	});
}).listen(8080);