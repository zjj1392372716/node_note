application
创建:
var express = require('express');
var app = express();

app对象的方法:
	Routing HTTP requests;路由
	Configuring middleware; see app.route.中间件
	Rendering HTML views; see app.render.渲染视图
	Registering a template engine; see app.engine.注册模板引擎
	
[1]:app.locals

[2]:app.all
	app.all方法和标准的app.METHOD()方法相似，

	例如，如果你把下面内容放在所有其他的路由定义的前面，它要求所有从这个点开始的路由需要认证和自动加载一个用户。记住这
	些回调并不是一定是终点:loadUser可以在完成了一个任务后，调用next()方法来继续匹配随后的路由。
	app.all("*",requireAuthentication,loadUser)
	或者这种相等的形式:
	app.all('*', requireAuthentication);
	app.all('*', loadUser);
[3]:app.disabled(name)
	调用app.set('foo', false)和调用app.disable('foo')是等价的。 比如:
	app.disable('trust proxy');
	app.get('trust proxy');
	// => false





































































































































































