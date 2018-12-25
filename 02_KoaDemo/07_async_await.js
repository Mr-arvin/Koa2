
async function a() {
    await console.log(1)
    console.log(2)
}

async function b() {
    await　a();
}

b();

setTimeout(function(){
    console.log(3)
},0)

async function aa() {
    await console.log(11)
    console.log(22)
}

async function bb() {
    await　aa();
}

bb();

console.log(33)
