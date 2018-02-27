var express = require('express');
var app = express();

//引入body-parser
var bodyParser = require("body-parser");


//使用中间件
app.use(bodyParser.urlencoded({ extended: false }));

//
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  console.log(req.body);
  
  //转为json对象
  res.end(JSON.stringify(req.body, null, 2));
})

app.listen(3000);
