//引入 koa 模块
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

//配置路由 ctx：上下文context，包含了request和response等信息
router.get('/',async (ctx,next)=>{
    //ctx.router available
    ctx.body="首页"; //返回数据 相当于：原生里面的res.writeHead() res.end()
}).get('/news', async (ctx)=>{
    ctx.body="这是一个新页面"
}).get('/newscontent', async (ctx)=>{
    //获取get传值
    /* 
        在koa2中get传值通过request接受，但是接收的方法有两种：query和querystring，
        query：返回的是格式化好的参数对象；
        querystring：返回的是请求字符串；
    */
   console.log(ctx.query) //{aid: '123'} 推荐
   console.log(ctx.querystring) //aid=123&name=zjhang
   console.log(ctx.url) //获取url地址
   //ctx里面的request里面获取get传值
   console.log(ctx.request.url)
   console.log(ctx.request.query)
   console.log(ctx.request.querystring)
   ctx.body="新闻详情"
})

//启动路由
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)