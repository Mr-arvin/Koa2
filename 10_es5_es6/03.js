//定义Person类

class Person {
    constructor(name,age){ //类的构造函数，实例化的时候执行，new的时候执行
        this._name = name;
        this._age = age;
    }
    //定义方法 注意：在es6里面方法之间没有逗号（,）
    getName() {
        console.log(this._name);
    }
    setName(name){
        this._name = name;
    }
}

var p = new Person('章三1','20');
p.getName();
p.setName('哈哈');
p.getName();

//es6 继承 
class Web extends Person{ //继承了Person 
    constructor(name,age,sex){
        super(name,age); //实例化子类的时候把子类的数据传给父类
        this.sex = sex;
    }
    print(){
        console.log(this.sex);
    }
}
var w = new Web('章三','30','男');
w.print();