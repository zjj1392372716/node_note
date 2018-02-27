var express = require('express');
var app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
	//没有写路径，所以默认都会执行这个中间件，因为有next，所以也会执行下面的中间件
	//如果没有写next,那么就会挂起，不会自动执行下面的req-res循环
  	console.log('Time:', Date.now());
  	next();
});

app.use("/admin",function(req,res){ 
    res.write("originalUrl"+req.originalUrl + "\n");   //    /admin/aa/bb/cc/dd
    res.write("baseUrl"+req.baseUrl + "\n");  //   /admin
    res.write("path"+req.path + "\n");   //    /aa/bb/cc/dd
    res.end("你好");
});
app.listen(3000,'127.0.0.1');



