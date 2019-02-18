/**
 * 1.cookie保存在浏览器客户端
 * 2.可以让我们用同一个浏览器访问同一个域名的时候共享数据
 * a.保存用户信息
 * b.浏览器历史记录
 * c.猜你喜欢的功能
 * d.10天免登录
 * e.多个页面之间的数据传递
 * f.cookie实现购物车功能
 */
var Koa = require('koa'),
router = require('koa-router')(),
render = require('koa-art-template'),
static = require('koa-static'),
path = require('path');

var app = new Koa();

//配置koa-art-template模版引擎
render(app, {
    root: path.join(__dirname, 'views'), //视图的位置
    extname: '.html', //后缀名
    debug: process.env.NODE_ENV !== 'production' //是否开启调试模式
});

app.use(static(__dirname + '/static'));

router.get('/',async(ctx)=>{
    // ctx.body =  "首页";
    var data = new Buffer('张三').toString('base64');
    ctx.cookies.set('userinfo',data,{
        maxAge:60*1000*60,
        // expires:'2019-12-12',
        // path:'/news',//生效的路径
        // domain:'.baidu.com',//域名，正常默认情况所有页面都可以访问,.baidu.com表示二级域名（多个子域名）可以共享cookies的数据
        // secure:'false',//true则http不能访问了
        httpOnly:false,//true表示这个cookie只有服务器端可以访问，false表示客户端（js）、服务器端都可以访问

    });

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
    let data = ctx.cookies.get('userinfo');
    var userinfo = new Buffer(data,'base64').toString();

    console.log(userinfo)
    let list = {
        name: userinfo
    }

    await ctx.render('news',{
        list:list
    });
});

router.get('/shop',async(ctx)=>{
    let userinfo = ctx.cookies.get('userinfo');
    ctx.body='这是一个商品'+userinfo;
});


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('server start')