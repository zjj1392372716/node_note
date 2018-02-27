var fs = require('fs');
//更改文件所有权。

//参数
//path          目录路径
//uid            用户ID
//callback    回调 ，传递异常参数 err
fs.chown('./test_txt/name4.txt', uid, gid, function(err){
	 if(err){
	  console.log(err);
	 }else{
	  console.log("change done");
	 }
})


//同步操作
//fs.chownSync(path, uid, gid)