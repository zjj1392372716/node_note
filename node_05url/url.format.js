
//产生一个地址
var url = require('url');
 
var a = url.format({ 
protocol : 'http' , //协议
auth : null , //是否有斜线
host : 'example.com:8080' ,//主机 
port : '8080' , //端口
hostname : 'example.com' ,//主机名 
hash : null , //hash
search : '?a=index&t=article&m=default',//查询字符串 
query : 'a=index&t=article&m=default', //查询数据
pathname : '/one', //子路径名
path : '/one?a=index&t=article&m=default', 
href : 'http://example.com:8080/one?a=index&t=article&m=default' //完整的地址
});
console.log(a);