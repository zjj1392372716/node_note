var express = require('express');
var app = express();

app.get('/',function(req,res,next){
	console.log('1');
	next();
});

app.get('/index',function(req,res){
	console.log('2');
	
})

app.listen(3100);
