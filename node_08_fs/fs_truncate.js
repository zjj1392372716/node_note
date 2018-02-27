var fs = require('fs');
//参数
//path           文件路径
//len              截断长度，只保留该字符长度内的字符，超出部分将被清除。
//callback      回调，传递一个异常参数err
//将目标文件中的字符串，截取前2个字符，其余的去掉，
fs.truncate('./test_txt/name4.txt', 2, function(err){
   if(err){
throw err;
   }
   console.log('文件内容截断成功');
})


//同步操作
fs.truncateSync('./test_txt/name4.txt',10);
