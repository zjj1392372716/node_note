/*
 * 	写入文件（根据文件描述符），功能与 fs.writeFile() 类似，但该方法提供更底层的操作，实际应用中建议使用多 fs.writeFile()  。
 * 
	该方法有两种形式：
	
	
	1、fs.write(fd, buffer, offset, length[, position], [callback(err, bytesWritten, buffer)])
	这种写法将buffer写入文件（根据文件描述符fd来查找文件）。
	2、fs.write(fd, data[, position[, encoding]], [callback(err, written, string)])
	这种写法将数据data写入文件（根据文件描述符fd来查找文件）。如果数据不是一个缓冲区的实例值将被强制转换为一个字符串。
 */
//fs.write(fd, buffer, offset, length[, position], [callback(err, bytesWritten, buffer)])
//执行结果：bytesWritten = 8 , buffer = <Buffer 00 00 00 01 00 00 00 00>
 
 
//[1]



var fs = require('fs');
fs.open('./test_txt/name4.txt', 'a', function(err,fd){
 if(err){
  throw err;
 }
 
 //参数列表：
// fd     文件描述符。
//  buffer      缓冲区，数据将被写入。buffer尺寸的大小设置最好是8的倍数，效率较高。
//  offset      buffer写入的偏移量
//  length     （integer）   指定文件读取字节数长度
//  position   （integer）   指定文件读取的起始位置，如果该项为null，将从当前文件指针的位置开始读取数据。
//  callback      回调传递了三个参数，err， bytesRead， buffer
//· err  异常
//· bytesRead:读取的字节数
//· buffer:缓冲区对象
 
 var data = '123123123 hello world';
 
 var buf = new Buffer(8);
 fs.write(fd, buf, 0, 8, 0, function(err, bytesWritten, buffer){
  if(err){
   throw err;
  }
  console.log(bytesWritten);
  console.log(buffer);
 
  fs.close(fd,function(err){
   if(err){
    throw err;
   }
   console.log('file closed');
  })
 })
})
/*
 * 运行结果：
 *  8
	<Buffer 00 00 00 00 00 00 00 00>
	file closed

 */
 
 
 //【2】
 
 
 
//fs.write(fd, data[, position[, encoding]], [callback(err, written, string)])
//执行结果：written = 21 , string = <Buffer 31 32 33 31 32 33 31 32 33 20 68 65 6c 6c 6f 20 77 bf 72 6c 64>
var fs = require('fs');
fs.open('content.txt', 'a', function(err,fd){
   if(err){
throw err;
   }
   
   
// encoding     字符编码
// callback
//· err            异常
//· written      指定多少字符数将被写入到文件。
//· string       返回的Buffer
   var data = '123123123 hello world';
   fs.write(fd, data, 0 , 'utf-8', function(err, written, string){
if(err){
   throw err;
}
console.log(written);
console.log(string);
   
fs.close(fd,function(err){
   if(err){
    throw err;
   }
   console.log('file closed');
})
   })
})