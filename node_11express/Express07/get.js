var express = require('express');
var app = express();

app.get('/',function(req,res){
	//req.query直接就可以获取到get传入的数据
	console.log(req.query);
	res.send();
})


app.listen(3000);
