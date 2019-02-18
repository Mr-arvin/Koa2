//es5种的类和静态方法
function Person(name,age){
    //构造函数里面的方法和属性，不被多个类共享
    this.name = name;
    this.age = age;
    this.run = function(){
        console.log(`${this.name}---${this.age}`)
    }
}

//构造函数中的原型链上的属性和方法,可以被多个实例共享 var p1 = new Person('zhangsan','102'); var p2 = new Person('wangwu','103');
Person.prototype.sex = '男';
Person.prototype.work = function(){
    console.log(`${this.name}---${this.age}---${this.sex}`);
}

//静态方法
Person.setName = function(){
    console.log('静态方法');
}

var p = new Person('zhangsan','20'); //实例方法是通过实例化来调用的，静态是通过类名直接调用
p.run();
p.work();

//执行静态方法
Person.setName();