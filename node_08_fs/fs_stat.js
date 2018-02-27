var fs = require('fs');

//返回文件的信息
fs.stat('./test_txt/name4.txt', function(err, stats){
 if(err){
  throw err;
 }else{
  console.log(stats);
  
 }
})


//同步操作
var statInfo = fs.statSync('./test_txt/name4.txt');
console.log(statInfo);


/**
 * Stats {
	  dev: 569434,
	  mode: 33206,
	  nlink: 1,
	  uid: 0,
	  gid: 0,
	  rdev: 0,
	  blksize: undefined,
	  ino: 8725724278350228,
	  size: 10,
	  blocks: undefined,
	  atimeMs: 1510616282381.8777,
	  mtimeMs: 1510619994203.4966,
	  ctimeMs: 1510619994203.4966,
	  birthtimeMs: 1510616282381.8777,
	  atime: 2017-11-13T23:38:02.382Z,
	  mtime: 2017-11-14T00:39:54.203Z,
	  ctime: 2017-11-14T00:39:54.203Z,
	  birthtime: 2017-11-13T23:38:02.382Z 
	  }

 */