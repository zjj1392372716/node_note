var express = require('express');
var app = express();


//应用级中间件
//一  应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()，
//其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。例如：

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use("/admin/:id",function(req,res,next){
	console.log('Request Type:', req.method);
	console.log(req.params.id);
	res.end('admin/');
	next();
});

//// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
	
	res.send('USER');
	
});


//一个挂载点装载一组中间件。
////依次执行
app.use("/admin/:name",function(req,res,next){
	console.log(1);
	next();
},function(req,res,next){
	console.log(2);
	next();
});
	
	
// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0) next('route');
  // 否则将控制权交给栈中下一个中间件
  else next(); //
}, function (req, res, next) {
  // 渲染常规页面
  res.end("hello");
});

// 处理 /user/:id， 渲染一个特殊页面
app.get('/user/:id', function (req, res, next) {
 res.end("yes");
});
app.listen(3000,'127.0.0.1');


