var http = require("http");
var url=require('url');
//创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){
	//req参数表示请求，res表示响应
	res.writeHead(200,{"Content-Type":"text/plain;charset=UTF8"});
	console.log(req.url);
//	console.log(url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash"));
//	console.log(url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash",true));
	console.log(url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash",true,true));
	res.end();
	
});
//监听端口
server.listen(3001,"127.0.0.1");