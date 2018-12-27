exports.getPostData = function(ctx){
    //获取数据 封装一个异步的方法
    return new Promise(function(resolve,reject){
        try {
            let str='';
            ctx.req.on('data',function(chunk){
                str+=chunk;
            })

            ctx.req.on('end',function(chunk){
                resolve(str);
            })
        } catch (error) {
            reject(err);
        }
    })
}