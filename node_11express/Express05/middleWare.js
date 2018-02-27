var express = require('express');
var app = express();

//如果是下面的顺序，则无法实现自己先要的结果，
/*
 * app.get('/:username/:pwd',function(req,res){
	console.log('2');
	res.send('用户信息：'+req.params.username);
})
app.get('/admin/pwd',function(req,res){
	console.log('1');
	res.send('管理员登录');
});

 */
//所以解决方法一：倒换顺序


app.get('/admin/pwd',function(req,res){
	console.log('1');
	res.send('管理员登录');
});

app.get('/:username/:pwd',function(req,res){
	console.log('2');
	res.send('用户信息：'+req.params.username);
})



//解决方法二：

app.get('/:username/:pwd',function(req,res,next){
	var username = req.params.username;
	if(username在数据库中存在){
		console.log('2');
		res.send('用户信息：'+req.params.username);
	}else{
		next();
	}             
})
app.get('/admin/pwd',function(req,res){
	console.log('1');
	res.send('管理员登录');
});




app.listen(3100);
