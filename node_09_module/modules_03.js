var per=require('app');
//当没有写./的时候，是默认去一个node_modules的文件夹中去找的,看有没有app 这个文件夹，如果有就引入这个app文件夹中的index.js、、也可以设置package.json文件

console.log(per.msg);
