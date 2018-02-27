var fs = require('fs');

//读取文件
//这里读取文件如果不设置编码方式，读取的文件就是以buffer的形式返回
//设置为utf-8后，返回的就是字符串的形式。如下:
fs.readFile('./test_txt/test01.txt',{
	encoding:'utf-8',
	flag:'r'
},function(err,data){
	if(err){
//		throw new Error('error');
		console.log('error');
	}
	console.log(data);
});

//写一个文件
fs.writeFile('./test_txt/test01.txt','rrrrrrrrr',{
	//data：可以是字符串或者buffer
	encoding:'utf-8',//可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
	flag:'w',
	mode:438//文件读写权限，默认值 438
},function(err){
	if(err){
		console.log('error');
	}
});

//打开一个文件

