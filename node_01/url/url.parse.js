【【【解析路径:]]]
url.parse('http://www.jdon.com/idea/js/mean.html')

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.jdon.com',
  port: null,
  hostname: 'www.jdon.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/idea/js/mean.html',
  path: '/idea/js/mean.html',
  href: 'http://www.jdon.com/idea/js/mean.html' }

> url.parse('http://www.jdon.com:8080/idea/js/mean.html?username=name&password=p
wd#page=1')

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.jdon.com:8080',
  port: '8080',
  hostname: 'www.jdon.com',
  hash: '#page=1',
  search: '?username=name&password=pwd',
  query: 'username=name&password=pwd',
  pathname: '/idea/js/mean.html',
  path: '/idea/js/mean.html?username=name&password=pwd',
  href: 'http://www.jdon.com:8080/idea/js/mean.html?username=name&password=pwd#p
age=1' }

url.parse('http://www.jdon.com:8080/idea/js/mean.html?username=name&password=pwd#p
age=1',true);
url.parse('http://www.jdon.com:8080/idea/js/mean.html?username=name&password=pwd#p
age=1',true,true);
