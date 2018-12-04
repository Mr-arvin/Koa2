function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
function normalFunc() {
    console.log('normalFunc');
}
async function awaitDemo() {
    await normalFunc();
    let result = await sleep(2000);
    console.log(result);// 两秒之后会被打印出来
    console.log('something, ~~');
    // 等执行完之后，再执行console
}
awaitDemo();
// normalFunc
// VM4036:13 something, ~~
// VM4036:15  enough sleep~