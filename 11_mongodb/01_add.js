const MongoClient = require('mongodb').MongoClient;
console.log(MongoClient);
const assert = require('assert');
const url = 'mongodb://localhost:27017';

console.time('timeline1');

MongoClient.connect(url,{useNewUrlParser:true}, function(err,client){
    const dbName = 'koa2';
    if(err){
        console.log(err);
        return;
    }
    // console.log('connected successfully to server');

    const db=client.db(dbName);
    //增加数据
    db.collection('user').insertOne({'username':"章三",'age':"123"},function(err,result){
        if(!err){
            console.log('增加数据成功');
            client.close();
            console.timeEnd('timeline1');
        }
    })
});

