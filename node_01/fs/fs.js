var fs=require('fs');


//读文件
//fs.readFile('add.txt',function(err,data){
//	if(err){
//		console.log('error');
//	}
//	else{
//		console.log(data);//产生的是二进制数据
//		console.log(data.toString());//转换为了文字信息
//	}
//})
//读文件
fs.writeFile('www.txt','content',function(err){
	if(err){
		console.log('error');
	}
	
})