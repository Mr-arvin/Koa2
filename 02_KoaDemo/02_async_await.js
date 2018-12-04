//普通方法
function getData1(){
    return '这是一个数据1';
}
console.log(getData1());

// async 是让变成异步方法
async function getData2(){
    return '这是一个数据2';
}
console.log(getData2());//Promise { '这是一个数据2' }

// 获取async方法里面的Promise第一种方法
var p=getData2();
p.then((data)=>{
    console.log(data)
});

//await是等待异步方法执行完成，可以获取异步方法里面的数据，但是必须得用在异步方法里面
// 下面是await错误的用法
// async function getData3(){
//     return '这是一个数据3';
// }
// var d=await getData3();
// console.log(d)

async function getData4(){
    var data = '这是一个数据4';
    return data;
}
async function test(){
    var d = await getData4();
    setTimeout(function(){        
        console.log(d)
    },1000)
}
test();

console.log('这是一个数据5');

// await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用。
async function notAsyncFunc() {
    await Math.random();
}
notAsyncFunc()