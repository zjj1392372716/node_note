var fs = require('fs');

//删除文件操作
//这是异步操作的例子:因为有IO处理
var filepath = './test_txt/test01.txt';
fs.unlink(filepath, function(err){
	 if(err){
	  throw err;
	 }
   	console.log('文件:'+filepath+'删除成功！');
})
//删除文件操作，没有IO
var filepath = './test_txt/test01.txt';
fs.unlinkSync(filepath);

