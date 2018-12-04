// async 定义的方法返回的是 Promise对象（以前的写法）
// 所以不是 async开头的方法，里面返回的是Promise对象也能用await

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var username='章三';
            resolve(username);
        },1000);
    })
}
var p = getData();
p.then(function(data){
    console.log(data)
})

// koa2里面 获取异步数据
async function test(){
    var data=await getData(); //把异步转换成同步,必须等待setTimeout执行完之后再继续，去掉await就失效了
    console.log(data+'2');
}
test();
