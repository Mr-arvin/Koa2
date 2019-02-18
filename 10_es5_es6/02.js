//继承
/**
 * 
 * 原型链继承：可以继承构造函数里面以及原型链上的属性和方法，实例化子类的时候没法给父类传参
 * 对象冒充实现继承：没法继承原型链上的属性和方法
 * 一般这两个结合使用
 */
function Person(name,age){
    //构造函数里面的方法和属性，不被多个类共享
    this.name = name;
    this.age = age;
    this.run = function(){
        console.log(this.name+'---'+this.age)
    }
}

Person.prototype.work = function(){
   console.log('prototype work')
}

function Web(name,age){
    Person.call(this,name,age);//1:对象冒充实现继承
}

Web.prototype = new Person(); //2:原型链继承 Web.prototype = Person.prototype

var w = new Web("李四",20);

w.run();
w.work();
