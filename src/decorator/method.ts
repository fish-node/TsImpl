// 修饰类方法的装饰器
//   类十余AOP编程哦

// target: 当前实例的对象
// propertyKey: 当前调用方法的
// descriptor:  当前方法的属性描述符
function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("logger some message");

    console.log(target["name"] + ": 吃东西了")
    console.log(target)

    console.log(propertyKey)

    console.log(descriptor)
}

class Rabbit {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    @logger
    eat() {
        console.log(this.name + ": 真好吃")
    }
}

let rabbit = new Rabbit("Jon");
rabbit.eat();
