/**
 * koa-static 静态资源中间件 静态web服务
 * 1:cnpm install koa-static --save
 * 2:static = require('koa-static')
 * app.use(static('static'))
 */


var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views'),
    bodyParser = require('koa-bodyparser'),
    static = require('koa-static');

var app = new Koa();

app.use (bodyParser());

// 应用及ejs模版引擎
app.use(views('views',{
    extension: 'ejs'
}));

//http://localhost:3000/css/basic.css 首先去static目录找，如果能找到返回对应的文件，找不到next()
app.use(static(__dirname + '/static'));
app.use(static(__dirname + '/public')); //出来两个突破 说明koa静态资源中间件可以配置多个

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
console.log('server start')