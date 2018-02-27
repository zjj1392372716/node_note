var fs = require('fs');

//以异步的方式删除文件目录。且文件目录必须是空的
fs.rmdir('./test', function(err){
	if(err){
	  console.log(err);
	}else{
	  console.log("done");
	}
});