var file = require("../models/file.js");
//引入文件读取的模块

//暴露展示功能
exports.showindex=function(req,res){
	
	//调用引入的file的获取文件夹的函数
	file.getAlbum(function(allalbums){
		res.render("index",{
			"albums":allalbums
			
		});
	})
};


//
exports.shoualbum=function(req,res){
	res.send("我是相册页面");
}
