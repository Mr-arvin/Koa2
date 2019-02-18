//es6里面的静态方法
class Person {
    constructor(name) {
        this._name = name; //属性
    }
    run() { //实例方法
        console.log(this._name)
    }
    static work(){//这是es6里面的静态方法
        console.log("这是es6里面的静态方法");
    }
}

Person.prototype.say = function() {
    console.log(this._name+'这是一个实例方法');
}

Person.instance='这是一个静态的属性';
Person.speak = function() {
    console.log('这是一个静态的方法');
}

var p = new Person("章三 ");
p.run();

Person.work();//这是es6里面的静态方法执行
console.log(Person.instance);
Person.speak();
p.say();