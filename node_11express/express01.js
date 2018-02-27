var express = require ('express');
var app = express();
//路由
app.get("/",function(req,res){
	res.send('hello world');
});

app.get('/haha',function(req,res){
	
	res.send('哈哈哈哈哈');
});

//app.get('/^\/student\/([\d]{10})$/',function(req,res){
//	res.send('学号是'+req.params[0]);
//});
app.get('/student/:num',function(req,res){
	res.send('学号是'+req.params.num);
});


app.listen(3000);
