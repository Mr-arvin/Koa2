//DB库
var MongoClient = require('mongodb').MongoClient;
var Config=require('./config.js');

class Db{
    constructor(){
        this.dbClient='';
        this.connect();//初始化的时候连接数据库
    }

    connect(){ //连接数据库 
        /* 异步变同步 */
        return new Promise((resolve,reject)=>{ //=>可以解决this指向问题
            MongoClient.connect(Config.dbUrl,{useNewUrlParser:true},(err,client)=>{
                if(err){
                    reject(err);
                }else{
                    var db = client.db(Config.dbName);
                    resolve(db);
                }
            })
        })
    }
    
    find(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                var result = db.collection(collectionName).find(json);
                result.toArray((err,docs)=>{
                    if(err){
                        reject(err);
                        return;
                    }else{
                        resolve(docs);
                    }
                })
            })
        })
    }
    update(){

    }
    insert(){

    }
}

var myDb0 = new Db();
console.time('start0')
myDb.find('user',{}).then((data)=>{
    console.log(data)
    console.timeEnd('start0')
})

var myDb1 = new Db();
console.time('start1')
myDb1.find('user',{}).then((data)=>{
    console.log(data)
    console.timeEnd('start1')
})