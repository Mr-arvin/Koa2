//DB库 callback的写法 自己好好体会
var MongoClient = require('mongodb').MongoClient;
var Config=require('./config.js');

class Db{
    constructor(){
        // this.connect();//初始化的时候连接数据库
    }

    connect(callback){ //连接数据库 
        /* 异步变同步 */
        MongoClient.connect(Config.dbUrl,{useNewUrlParser:true},(err,client)=>{
            var db = client.db(Config.dbName);
            return callback(db)
        })
    }
    
    find(collectionName,json,callback){
        this.connect(function(db){
            var result = db.collection(collectionName).find(json);
            result.toArray((err,docs)=>{
               return callback(docs)
            })

        })
    }
    update(){

    }
    insert(){

    }
}

var myDb = new Db();

myDb.find('user',{},function(data){
    console.log(data)
})