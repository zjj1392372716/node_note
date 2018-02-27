var express = require("express");

var app = express();
//引入路由
var router = require("./controller/router.js");
//设置模板引擎
app.set("view engine","ejs");
//设置中间件（public下放静态资源）
app.use(express.static("./public"));
//默认路由，进入首页
app.get("/",router.showindex);

//加载相册
app.get("/admin",router.shoualbum);
app.listen(3000);

