interface logName {
  (a:number): void;
}
// 接口确定了一个类必须有哪些属性和方法
interface PersonInterface{
  name: string;
  logName: logName;
}

// 对于接口中的属性和方法，类必须： 在类中声明，在构造函数中初始化
class Person implements PersonInterface {
  constructor (name: string) {
    this.name = name
  }
  // 这里还得声明一下name，使得语法上包接口或者java风格保持一致
  name: string;
  logName(){
    console.log(this.name)
  }
  static count = 0
}
class Chinese extends Person {

}
