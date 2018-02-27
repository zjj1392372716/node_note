var http=require("http");
var fs=require('fs');

var server=http.createServer(function(req,res){
	//不处理收藏夹图标
	if(req.url=='/favicon.ico'){
		return ;
	}
	//读取文件夹
	fs.readdir("./aaa/",function(err,file){
		console.log(file);
		//空数组，用于存放东西
		var files=[];
		(function iterator(i){
			if(i==file.length){
				console.log(files);
				return ;
			}
			fs.stat("./aaa/"+file[i],function(err,stats){
				if(stats.isDirectory()){
					files.push(file[i]);
				}
			})
			iterator(i+1);
		})(0);
		
	})
	
	
}).listen(3000);
