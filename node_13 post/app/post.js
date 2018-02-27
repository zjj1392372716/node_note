var express = require('express');
//下载express

var app = express();
var bodyParser = require('body-parser');
//下载body-parser


///创建application/x-www-form-urlencode编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/process_post",urlencodedParser,function(req,res){
	var responseJson={
		"firstname":req.body.first_name,
		"lastname":req.body.last_name
	};
	console.log(responseJson);
	res.end(JSON.stringify(responseJson));
	
})
app.listen(3000);
