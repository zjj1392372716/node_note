/**
 * 模块类
 */
var person=function(name,age,job){
	this.name=name;
	this.age=age;
	this.job=job;
}
person.prototype={
	showPerson:function(){
		console.log(this.name+this.age+this.job);		
	}
}
//暴露出去这个类，一般一个js文件暴露一个类
module.exports = person;