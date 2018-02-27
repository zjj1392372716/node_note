var express = require('express');
var app = express();

//可以接收一个函数
app.use(fun);
app.listen(3000,'127.0.0.1');
//函数读取路径
function fun(req,res){
	//读取路径
	var filepath = req.originalUrl;
	fs.readfile('./public/'+filepath,function(err,data){
		if(err){
			//如果没有这个文件夹，就继续执行
			next();
			return ;
		}//如果有public文件夹，那么就加载改文件夹之下的数据
		res.send(data.toString());
	})
}


