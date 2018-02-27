var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var queryObj=url.parse(req.url,true).query;
	var name=queryObj.username;
	var pwd=queryObj.pwd;
	console.log(name);
	console.log(pwd);
	res.end('信息：'+name+pwd);
	
}).listen(3000);
