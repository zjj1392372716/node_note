var fs = require('fs');

//打开文件
//参数列表:
//fs.open(path, flags, [mode], [callback(err,fd)])
//path     文件路径
//flags     方式
//callback  回调函数会传递一个文件描述符 fd ，和一个异常err

/**
 * 
'r' -   以读取模式打开文件。
'r+' - 以读写模式打开文件。
'rs' - 使用同步模式打开并读取文件。指示操作系统忽略本地文件系统缓存。
'rs+' - 以同步的方式打开，读取 并 写入文件。
注意：这不是让fs.open变成同步模式的阻塞操作。如果想要同步模式请使用fs.openSync()。
 
'w' - 以读取模式打开文件，如果文件不存在则创建
'wx' - 和 ' w ' 模式一样，如果文件存在则返回失败
'w+' - 以读写模式打开文件，如果文件不存在则创建
'wx+' - 和 ' w+ ' 模式一样，如果文件存在则返回失败
 
'a' - 以追加模式打开文件，如果文件不存在则创建
'ax' - 和 ' a ' 模式一样，如果文件存在则返回失败
'a+' - 以读取追加模式打开文件，如果文件不存在则创建
'ax+' - 和 ' a+ ' 模式一样，如果文件存在则返回失败
mode    用于创建文件时给文件制定权限，默认0666
 */
fs.open('./test_txt/name4.txt','a',function(err,fd){
	if(err){
		throw err;
	}
	
//更改一个文件所提供的文件描述符引用的文件的时间戳。
//参数列表
//fd       文件标识符
//atime
//mtime
//callback   回调
	fs.futimes(fd,1388648322, 1388648322,function(err){
		if(err){
			throw err;
		}
		console.log('futimes is complete');
	});
	
	
	//关闭文件
	//fd文件的标识符
	fs.close(fd,function(){
		console.log('file is closed');
	});
	
});
