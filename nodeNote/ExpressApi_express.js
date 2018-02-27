express():是一个由express模块引入的入口函数
var express = require("express");
var app = express();

内置方法:
[1]:express.static(root,[options])
	express.static是一个express内置的唯一一个的中间件,负责托管静态资源
	
	
	将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
	例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：
	app.use(express.static("public"));
	
	访问public目录下的文件:
	所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。
	http://localhost:3000/images/kitten.jpg
	http://localhost:3000/css/style.css
	
	//如果你的静态资源文件存放在多个目录下面,你可以多次调用express.static()
	app.use(express.static("public"));
	app.use(express.static("link"));
	
	
	如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录
	（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：
	
	app.use("/static",express.static("public"));
	现在，你就爱可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。
	
	http://localhost:3000/static/images/kitten.jpg

