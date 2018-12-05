// 这篇主讲应用级中间件
//引入 koa 模块
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

// koa 应用级中间件 匹配路由之前打印日期
app.use(async (ctx,next)=> {
    ctx.body="这是一个中间件";
    console.log(new Date());
    await next();//当前路由匹配完成以后继续向下匹配，如果不写路由就不会继续向下匹配
})

//配置路由 ctx：上下文context，包含了request和response等信息
router.get('/',async (ctx,next)=>{
    //ctx.router available
    ctx.body="首页"; //返回数据 相当于：原生里面的res.writeHead() res.end()
})
router.get('/news', async (ctx)=>{
    ctx.body="这是一个新页面"
})

//动态路由 动态路由里面可以传入多个值 http://localhost:3000/newscontent/23423/sdf
router.get('/newscontent/:aid/:cid', async (ctx)=>{
    //获取动态路由的传值
    console.log(ctx.params) //{ aid: '23423', cid: 'sdf' }
   ctx.body="新闻详情"
})

//启动路由
app
    .use(router.routes())
    .use(router.allowedMethods())
//监听端口
app.listen(3000)