~~~~~Express完全是由路由和中间件构成的一个web开发框架,从本质上讲,一个Express应用就是在调各种
中间件.
~~~~什么是中间件呢?

中间件就是一个函数,他可以访问请求对象request Object和请求响应response Object
和web应用中的处于请求-响应中间流中的中间件(一般被命名为next的变量).


~~~~~中间件的功能:
	执行任何代码。
	修改请求和响应对象。
	终结请求-响应循环。
	调用堆栈中的下一个中间件。
	
~~~~~如果中间件没有终结请求响应循环,就必须调用next()方法,将控制权交给下一个中间件,否则将会挂起.

~~~~~Express 应用可使用如下几种中间件：

		应用级中间件
		路由级中间件
		错误处理中间件
		内置中间件
		第三方中间件
		
