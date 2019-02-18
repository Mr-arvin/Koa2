//koa的一个bug
console.log(new Buffer('张三').toString('base64'));// 转换成 base64 字符 串:aGVsbG8sIHdvcmxkIQ==
console.log(new Buffer('5byg5LiJ', 'base64').toString());// 还原 base 64 字符串:hello, world!