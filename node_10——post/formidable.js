var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
	timestamp = require('time-stamp'),
	path=require('path'),
    fs=require('fs');
http.createServer(function(req, res) {
  if (req.url == '/test' && req.method.toLowerCase() == 'post') {
    // parse a file upload 
    //创建一个
    var form = new formidable.IncomingForm();
	//设置储存路径
 	form.uploadDir = "./myimg";
 	
 	//执行表单获取
    form.parse(req, function(err, fields, files) {
    //执行回调函数的时候就已经全部接收完毕了
    	console.log(fields);
    	console.log(files);
    	console.log(util.inspect({fields: fields, files: files}));
    	
	//改名
	var ttt = timestamp('YYYYMMDD');
	var ran = parseInt(RandNum(5));
	var extname = path.extname(files.file.name);
	var oldname =__dirname+'/'+ files.file.path;
	var newname =__dirname+'/'+ ttt + ran + extname;
	fs.rename(oldname,newname,function(err,data){
		if(err){
			throw err;
		}
		res.writeHead(200, {'content-type': 'text/plain'});
      	res.end(util.inspect({fields: fields, files: files}));
	})
     
    });
 	 
    
  }
 
  // show a file upload form 
  res.writeHead(200, {'content-type': 'text/html'});
  
}).listen(3000);


function RandNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++) {
        rnd += Math.floor(Math.random() * 10);
    }
    return rnd;
}