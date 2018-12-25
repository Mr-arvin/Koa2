// 这篇主讲路由级中间件 错误处理
//引入 koa 模块
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

//配置路由 ctx：上下文context，包含了request和response等信息
router.get('/',async (ctx,next)=>{
    //ctx.router available
    ctx.body="首页"; //返回数据 相当于：原生里面的res.writeHead() res.end()
})
// 匹配到news路由之后继续乡下匹配
router.get('/news', async (ctx,next)=>{
    console.log('这是一个新闻')
    await next();
})
router.get('/news', async (ctx,next)=>{
    ctx.body="这是一个新页面"
})

app.use(async (ctx,next)=> {
    console.log("这是一个中间件01");
    await next();//当前路由匹配完成以后继续向下匹配，如果不写路由就不会继续向下匹配
    if(ctx.status==404){//找不到页面 
        ctx.status = 404;
        ctx.body="这是一个404页面"
    }
})

//启动路由
app
    .use(router.routes())
    .use(router.allowedMethods())
//监听端口
app.listen(3000)