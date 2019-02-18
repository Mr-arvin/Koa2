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
    //查询数据
    var result = db.collection('user').find({});
    result.toArray((err,docs)=>{
        console.log(docs);
    });
    console.timeEnd('timeline1');
});

