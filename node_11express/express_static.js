var express = require ('express');
var app = express();


//静态文件的加载
app.use(express.static("./static"));
app.use("/jingtai",express.static("./static"));
//加载静态文件可以加上路由，这样更好


app.use("/images",function(req,res){
	res.send("哈哈");
	
});

//这就是404页面了，因为如果上面的所有中间件都无法接住，那么也就是404了
app.use(function(req,res){
	res.send("没有这个页面了");
});
app.listen(3000);
