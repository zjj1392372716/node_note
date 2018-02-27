var student=require('./student')
var teacher=require('./teacher')

//teacher.add('arry');通过模块所暴露的api，便可以操作模块
function add(teacherName,StudentName){
	teacher.add(teacherName)
	
	studentName.forEach(function(item,index){
		student.add(item)
	})
}

exports.add=add

//module.exports=add//使你的
