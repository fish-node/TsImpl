// 类也是对象
//   可以有ES6规定的访问属性

// 类似于Java的setter getter方法
class BlackWalker{
    firstName: string;
    lastName: string;
    get fullName(): string{
        return this.firstName + " " + this.lastName;
    }
    set fullName(fullName: string){
        let names = fullName.split(" ");
        if (names.length != 2){
            throw new Error("姓名不合法");
        }
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
let walker: BlackWalker = new BlackWalker();

walker.fullName = "Jon Snow";

console.log(walker.firstName);

walker.lastName = "Targaryen";

console.log(walker.fullName)
