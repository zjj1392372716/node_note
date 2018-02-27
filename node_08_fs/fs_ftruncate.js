var fs = require('fs');
//path             文件路径
//len              截断长度，只保留该字符长度内的字符，超出部分将被清除。
//callback         回调，传递一个异常参数err

//截取文件某一段
fs.ftruncate('./test_txt/name4.txt', 2, function(err){
	if(err){
	  throw err;
	}
 	console.log('文件内容截断成功');
})