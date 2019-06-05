// 用来约束一个对象的结构
//   有哪些必有的属性，以及它们的类型？
//   有哪些可选的属性？
//   有哪些方法？
//   是否可读的？

// 可选属性
// tslint:disable-next-line:interface-name
interface Config1 {
    color?: string;
    width?: number;
}

let conf1: Config1 = {
    color: "white",

    // 除了上面两个属性，不能有其他额外属性
    // color2: "red"
}

// [] 标注的是特殊的
// [propName: string]: string;
//    表明这个对象的key是string， value是string

//  为了避免冲突，它不能有   color?: string; width?: number;
//      因为 color是 string\ undefined,  width是 number|undefined类型
interface Config2{
    [propName: string]: string;
    color: string;
}

let conf2: Config2 = {
    color: "red",
    name: "name"
}


interface CatInterface {
    // 自读属性
    readonly name: string;
    readonly age: number;
    readonly run: () => void;

    // 方法格式
    getName?: (name: string) => void;
}

function run(cat: CatInterface): void{
    cat.run()
}
let cat = {
    name: 'Bob',
    age: 22,
    run: function(): void{
        console.log(this.name + ' running.')
    }
}
// cat不是被接口约束的，所以可以修改
cat.name = 'Jon';
run(cat)
