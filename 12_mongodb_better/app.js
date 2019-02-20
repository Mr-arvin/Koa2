/**
 *
 */
var Koa = require('koa'),
router = require('koa-router')(),
render = require('koa-art-template'),
static = require('koa-static'),
path = require('path'),
DB = require('./module/db.js');

var app = new Koa();

//配置koa-art-template模版引擎
render(app, {
    root: path.join(__dirname, 'views'), //视图的位置
    extname: '.ejs', //后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

app.use(static(__dirname + '/static'));

router.get('/',async(ctx)=>{
    // ctx.body =  "首页";
    var result = await DB.find('user',{});
    console.log(result)
    let list = {
        name: '张三',
        h: '<h3>这是一个h3</h3>',
        num: 20,
        data: ['111111','2222222',3333333]
    }

    await ctx.render('index',{
        list:list
    });
});

router.get('/news',async(ctx)=>{
    let list = {
        name: '张三',
        h: '<h3>这是一个h3</h3>',
        num: 20,
        data: ['111111','2222222',3333333]
    }

    await ctx.render('news',{
        list:list
    });
});


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('server start')