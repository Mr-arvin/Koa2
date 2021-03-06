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

/**  注意：我们需要在每一个路由的render立马都要渲染一个公共的数据 
 * 公共的数据放在这个里面，这样的化在模版的任何地方都可以用
 ctx.state = { //放在中间件
    session: this.session,
    title:'app'
 }
 */    
app.use(async(ctx,next)=>{
    ctx.state.userinfo='张三';
    await next();
})

// 1:配置模版引擎中间件 --第三方中间件
app.use(views('views',{
    extension:'ejs' //应用ejs模版引擎
})) 

//2:另外这样配置也可以,但文件需要是点html结尾
// app.use(views('views',{map:{html:'ejs'}}))

// 1或2配置好之后，再写这里
router.get('/',async(ctx)=>{
    let title = 'myheart will be ok!'
    await ctx.render('index',{
        title:title
    });
})

router.get('/news',async(ctx)=>{
    let arr = ['红色','绿色','蓝色'];
    let content = "<h2>这是颜色列表</h2>";
    let num = 12;
    await ctx.render('news',{
        newsList:arr,
        content:content,
        num:num
    })
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
