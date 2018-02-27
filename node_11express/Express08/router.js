/*
 * 
 * locals是Express应用中 Application(app)对象和Response(res)对象中的属性，
 * 该属性是一个对象。该对象的主要作用是，将值传递到所渲染的模板中。
 */
var express = require("express");

var ejs = require('ejs');
//创建一个新的router
var router = express.Router();

router.get("/",function(req,res){
	
	 res.render('index',{
	 	name:"zjj",
	 	url:"http://www.baidu.com",
	 	introduce:"我是内容"
	 });
	 
//	  也可以使用 res.locals 变量
     res.locals = {
       name:'IT笔录', 
       url:'http://itbilu.com', 
       introduce:'学习、记录、整理'
     };
     res.render('index');
})
