//await是等待异步方法执行完成，可以获取异步方法里面的数据，但是必须得用在异步方法里面
//await 阻塞的功能，把异步改成一个同步
function getData4(){
    console.log(2)
    return '这是一个数据4';
}
async function test(){
    console.log(1)
    var d = await getData4();
    console.log(d)
    console.log(3)
}
test(); //123

