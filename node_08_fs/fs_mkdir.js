var fs = require('fs');

//以异步的方式创建一个空目录
//参数:
//path            	将创建的目录路径
//mode          	目录权限（读写权限），默认0777
//callback      	回调，传递异常参数err
fs.mkdir('./test', 0777,function(err){
	if(err){
	  console.log(err);
	}else{
	  console.log("done");
	}
});


//同步操作
//fs.mkdirSync(path[, mode]);
