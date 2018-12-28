/**
 *  koa 中  koa-bodyparser 中间件获取表单提交的数据
 *  npm install --save koa-bodyparser
 *  引入 var bodyParser = require('koa-bodyparser');
 *  app.use(bodyParser());
 *  ctx.request.body;
 */
var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views'),
    bodyParser = require('koa-bodyparser');

var app = new Koa();

app.use (bodyParser());

// 应用及ejs模版引擎
app.use(views('views',{
    extension: 'ejs'
}))

router.get('/',async(ctx)=>{
    await ctx.render('index');
});

router.post('/doAdd',async(ctx)=>{
    //koa 中  koa-bodyparser 中间件获取表单提交的数据
    ctx.body = ctx.request.body;
})


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);