 var http= require('http');
 var url=require('url');
 var server=http.createServer(function(req,res){
 	var userurl=url.parse(req.url).pathname;
 	
 	if(userurl.substr(0,9)=='/student/'){
 		console.log(userurl.substr(0,9));
 		var studentid=userurl.substr(9);
 		if(/^\d{10}$/.test(studentid)){
   			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
 			res.end('true02'+studentid);
 		}else{
 			res.end('error03');
 		}
 	}else if(userurl.substr(0,9)=='/teacher/'){
 		console.log(userurl.substr(0,9));
 		var teacherid=userurl.substr(9);
 		console.log(teacherid);
 		if(/^\d{6}$/.test(teacherid)){
 			res.end('true01'+teacherid);
 		}else{
 			res.end('error02');
 		}
 	}else{
 		res.end('error01');
 	}
 });
 server.listen(3000);
