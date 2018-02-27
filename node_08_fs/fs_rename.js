var fs = require('fs');

//同以目录下的文件更名：
var oldfile = './test_txt/name2.txt';//旧文件名旧文件是存在的
var newfile = './test_txt/name3.txt'//新文件名，不一定存在
fs.rename(oldfile,newfile, function(err){
	 if(err){
	  	throw err;
	}
   	console.log('done');
})





//不同路径下的文件更名 + 移动：（新的路径必须已存在，路径不存在会返回异常）
//将125.txt与移动到name3.txt的路径下,并吧内容也移过去了，name3.txt里面的内容就是125的内容了，也不存在125.txt文件饿了
fs.rename('./125.txt','./test_txt/name3.txt', function(err){
   if(err){
throw err;
   }
   console.log('done!');
})



//上面都是异步操作
//同步操作：name3.txt更名为name4.txt
fs.renameSync('./test_txt/name3.txt','./test_txt/name4.txt');
