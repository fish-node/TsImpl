interface HumanInterface{
    name: string;
}

interface ChineseInterface extends HumanInterface{
    age: number;
}

let p1: ChineseInterface = {
    name: "Jon",
    age: 22
}

interface ManInterface{
    sex: string;
}


// 接口的多继承, 多继承的时候父接口不能冲突
interface ChineseManInterface extends ChineseInterface, ManInterface{

}

let p2: ChineseManInterface = {
    name: "Bob",
    age: 33,
    sex: "man"
}



// 没太大意义，暂时不管

class Monkey{
    public name: string;
    private age: number;
}

interface MonkeyInterface extends  Monkey{

}

// 接口继承类的时候回继承它的私有成员变量，
//   这导致了不能够通过对象字面量的写法来申明一个对象了
// let m1: MonkeyInterface = {
//     name: "Sun",
//     //age: 523
// }
