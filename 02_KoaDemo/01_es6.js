// 回调函数 获取异步方法里面的数据
function getData1(callback) {
    setTimeout(function() {
        var name = "张三1";
        callback(name)
    },3000);
}
getData1(function(data){
    console.log(data)
})

// Promise 来处理 方式一：
// resolve 成功的回调函数
// reject 失败的回调函数
var p = new Promise(function(resolve,reject){
    // ajax
    setTimeout(function(){
        var name = "张三2";
        if(Math.random() < 0.5){
            resolve(name);
        }else{
            reject(name)
        }
    },1000);
})

p.then((data)=> {
    console.log(data)
})

// Promise 来处理 方式二：
// resolve 成功的回调函数
// reject 失败的回调函数
function getData(resolve, reject){
    // ajax
    setTimeout(function(){
        var name="张三3";
        resolve(name)
    },2000)
}

var p = new Promise(getData);

p.then(function(data){
    console.log(data)
})