var fs = require('fs');

//读取文件
//这里读取文件如果不设置编码方式，读取的文件就是以buffer的形式返回
//设置为utf-8后，返回的就是字符串的形式。如下:
fs.readFile('./test_txt/test02.txt',{
	encoding:'utf-8',
	flag:'r'
},function(err,data){
	if(err){
//		throw new Error('error');
		console.log('error');
	}
	console.log(data);
});
