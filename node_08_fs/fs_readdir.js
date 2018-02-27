var fs = require('fs');
fs.readdir('./test_txt', function(err,files){
 if(err){
  console.log(err);
 }
 //以数组的形式返回目录下的文件
 console.log(files);
})

//fs.readdirSync(path)