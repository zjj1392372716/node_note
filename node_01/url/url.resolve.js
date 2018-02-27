url.resolve('http://www.baidu.com','search/list')
//给一个基础 URL， href URL，如同浏览器一样的解析它们可以带上锚点，例如： 
 
'http://www.baidu.com/search/list'

//例如：
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'