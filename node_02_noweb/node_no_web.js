var http = require('http');
var fs=require('fs');
http.createServer(function (req, res) {
	
	if(req.url == "/fang"){
		fs.readFile("./test/xixi.html",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/yuan"){
		fs.readFile("./test/haha.html",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/0.jpg"){
		fs.readFile("./test/1.jpg",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"image/jpg"});
			res.end(data);
		});
	}else if(req.url == "/bbbbbb.css"){
		fs.readFile("./test/aaaaaa.css",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/css"});
			res.end(data);
		});
	}else{
		res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
		res.end("嘻嘻，没有这个页面呦");
	}
    
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');