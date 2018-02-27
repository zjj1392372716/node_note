var fs = require("fs");
//暴露一个获取文件夹的函数
exports.getAlbum = function(callback){
	
	fs.readdir("./uploads",function(err,fils){
	var allalbums=[];
	(function iterator(i){
	 	if(i==fils.length){
	 		console.log(allalbums);
			callback(allalbums);
			return ;
	 	}
	 	fs.stat("./uploads/"+fils[i],function(err,stats){
	 		console.log(__dirname);
	 		if(stats.isDirectory()){
	 			allalbums.push(fils[i]);
	 		}
	 		if(err){
	 			console.log(1);
	 		}
	 		iterator(i+1);
	 	})
	})(0);
})

}
