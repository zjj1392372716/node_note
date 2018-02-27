var express = require('express');
var app = express();

app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   //将json、对象转换为字符串
   res.end(JSON.stringify(response));
})
 
var server = app.listen(3000, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
