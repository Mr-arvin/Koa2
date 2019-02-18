//单例 mongodb只连接一次(多次实例化只执行一次静态方法)
class Db {
    static getInstance() {//单例 构造函数只实例化一次
        if(!Db.instance){
            Db.instance = new Db();
        }
        return Db.instance;
    }
    constructor() {
        console.log('实例化会出发构造函数');
        this.connect();
    }
    connect(){
        console.log('连接数据库');
    }
    find(){
        console.log('查询数据库');
    }

}

//这样调用两次构造函数实例也只会执行一次 
var myDb1 = Db.getInstance();
var myDb2 = Db.getInstance();

myDb1.find();
myDb2.find();