//DB库  
var MongoClient = require('mongodb').MongoClient;
var Config=require('./config.js');

class Db{
    static getInstance(){ //单例 多次实例化不共享问题
        if(!Db.instance){
            Db.instance = new Db();
        }
        return Db.instance;
    }

    constructor(){
        this.dbClient=''; //提高性能 第一次连接数据库 第二次就不需要连接了
        // this.connect();//初始化的时候连接数据库
    }

    connect(){ //连接数据库 
        /* 异步变同步 */
        return new Promise((resolve,reject)=>{ //=>可以解决this指向问题            
            if(!this.dbClient){
                console.log('this.dbClient == true')
                MongoClient.connect(Config.dbUrl,{useNewUrlParser:true},(err,client)=>{
                    if(err){
                        reject(err);
                    }else{
                        var db = client.db(Config.dbName);
                        this.dbClient = db;
                        resolve(this.dbClient);
                    }
                })
            }else{
                console.log('this.dbClient == false')
                resolve(this.dbClient);
            }
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

var myDb1 = Db.getInstance();
var myDb2 = Db.getInstance();
var myDb3 = Db.getInstance();

setTimeout(function(){
    console.time('start0')
    myDb1.find('user',{}).then((data)=>{
        console.log(data)
        console.timeEnd('start0')
    })
},1000);

setTimeout(function(){
    console.time('start1')
    myDb2.find('user',{}).then((data)=>{
        console.log(data)
        console.timeEnd('start1')
    })
},2000);

setTimeout(function(){
    console.time('start1')
    myDb3.find('user',{}).then((data)=>{
        console.log(data)
        console.timeEnd('start1')
    })
},3000);

setTimeout(function(){
    console.time('start1')
    myDb3.find('user',{}).then((data)=>{
        console.log(data)
        console.timeEnd('start1')
    })
},4000);