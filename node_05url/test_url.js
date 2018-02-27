var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	
	var query=url.parse(req.url).query;
	var age=url.parse(req.url,true).query.age;//得到查询对象中的数据
	var hash=url.parse(req.url).hash;
	console.log(pathname);
	console.log(query);
	console.log(hash);
	console.log(age);
	
}).listen(7777);
