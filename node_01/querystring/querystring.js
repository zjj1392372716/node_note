//序列化

// 将一个对象转换为字符串
 querystring.stringify({name:"zjj",course:['aaa','bbb'],form:''})
'name=zjj&course=aaa&course=bbb&form='

//加一个参数，','表示替换运来的&
 querystring.stringify({name:"zjj",course:['aaa','bbb'],form:''},',')
'name=zjj,course=aaa,course=bbb,form='

//家第三个参数，':'替换原来的=
 querystring.stringify({name:"zjj",course:['aaa','bbb'],form:''},',',':')
'name:zjj,course:aaa,course:bbb,form:'



//反序列化(解析)
 querystring.parse('name=zjj&course=aaa&course=bbb&form='
	... )
 { name: 'zjj', course: [ 'aaa', 'bbb' ], form: '' }

 querystring.parse('name=zjj,course=aaa,course=bbb,form=',',')
{ name: 'zjj', course: [ 'aaa', 'bbb' ], form: '' }

querystring.parse('name:zjj,course:aaa,course:bbb,form:',',',':')
{ name: 'zjj', course: [ 'aaa', 'bbb' ], form: '' }


//转义和反转义
querystring.escape('<我是谁>');
'%3C%E6%88%91%E6%98%AF%E8%B0%81%3E'
//反转义
querystring.unescape('%3C%E6%88%91%E6%98%AF%E8%B0%81%3E')
'<我是谁>'
