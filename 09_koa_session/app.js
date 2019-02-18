/**
 * 1.npm i koa-session
 * 2.
 * 3.ctx.session.username = "章三" 设置session
 * 4.ctx.session.username 获取sesson
 */
var Koa = require('koa'),
router = require('koa-router')(),
render = require('koa-art-template'),
static = require('koa-static'),
path = require('path'),
session = require('koa-session');

var app = new Koa();

//配置koa-art-template模版引擎
render(app, {
    root: path.join(__dirname, 'views'), //视图的位置
    extname: '.html', //后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

//配置session的中间件
app.keys = ['some secret hurr']; //cookie的签名
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) 默认*/
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 5000,//cookie的郭麒时间 【需要修改】
    overwrite: true, /** (boolean) can overwrite or not (default true) 没有效果，默认*/
    httpOnly: true, /** (boolean) httpOnly or not (default true) true表示只有服务器端可以获取cookie*/
    signed: true, /** (boolean) signed or not (default true) 默认 签名*/
    rolling: true, /** 在每次请求时强制设置cookie，这种重置cookie过期时间（默认：false 建议true）【需要修改】 */
    renew: false, /** 当它快过期的时候我们重新设置，【需要修改】*/
};
app.use(session(CONFIG, app));

app.use(static(__dirname + '/static'));

router.get('/',async(ctx)=>{
    //获取session
    console.log(ctx.session.userinfo)
    await ctx.render('index',{
        list:ctx.session.userinfo
    });
});

router.get('/login',async(ctx)=>{
    //获取session
    ctx.session.userinfo="张三";
    ctx.body="登陆成功,设置session成功";
});


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('server start')