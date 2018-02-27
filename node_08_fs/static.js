/**
 * 模仿apache服务器
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var server =http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	var extname=path.extname(pathname);
	if(pathname=='/'){
		pathname='./static/1.html';
	}
	//读取文件
	fs.readFile("./www/"+pathname,function(err,data){
		if(err){
			fs.readFile('./www/404.html',function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset:utf-8"});
				res.end(data);
			})
			return ;
		}else{
			//检测扩展名
			var mime=getMime(extname);
			res.writeHead(200,{"Content-type":mime});
			res.end(data);
		}
	});
}).listen(3000); 

function getMime(extname){
	switch(extname){
		case ".html":
		return "text/html";
		break;
		case ".jpg":
		return "image/jpg";
		break;
		case ".png":
		return "image/png";
		break;
		case ".css":
		return "text/css";
		break;
	}
}
