
var http = require('http');

var server = http.createServer(function(req,res){
	
	if(req.url=='/test' && req.method.toLowerCase()=='post'){
		var alldata="";
		req.addListener("data",function(chuck){
			alldata+=chuck;
			console.log(chuck);
		});
		req.addListener("end",function(){
			
			res.end(alldata.toString());
		})
	}
}).listen(3000,'127.0.0.1');
