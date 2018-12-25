// 引入koa模块
var Koa = require('koa');
var router = require('koa-router')();/*引入是实例化路由 推荐 */

/**
 * ejs模版引擎的使用
 * 1: npm i koa-views ejs --save
 * 2:app.use(views(__dirname,{extension:'ejs'}))
 * 3:await ctx.render('index')
 */
var views = require('koa-views');
var ejs = require('ejs');

var app = new Koa();

//app.use(views('views),{map:{html:'ejs'}}) 这样配置也可以
// 配置模版引擎中间件 --第三方中间件
app.use(views('views',{
    extension:'ejs' //应用ejs模版引擎
}))

router.get('/',async(ctx)=>{
    await ctx.render('index');
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
