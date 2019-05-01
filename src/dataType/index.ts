// 基本类型
let num: number = 123
let str: string = 'hello world'
let bool: boolean = false

// tuple 类型
let tup: [string, number] = ['Jon Snow', 343]

// 枚举类型
enum Color {Red, Green, Blue}
let c: Color = Color.Green

// 数组类型
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// 任意类型
let notSure: any = 4;
notSure.ifItExists();
// okay, ifItExists might exist at runtime
notSure.toFixed();
// okay, toFixed exists (but the compiler doesn't check)

// 对象类型
let prettySure: Object = 4;
// prettySure.toFixed();
// Error: Property 'toFixed' doesn't exist on type 'Object'.

// 没有返回值
function warnUser(): void {
  console.log("This is my warning message");
}
let u1: any = warnUser();
// 👇的不行
// let u2: null = warnUser();

let u: undefined = undefined;
let n: null = null;

// 说明函数会抛出异常或者永远不会结束
function error(message: string): never {
    throw new Error(message);
}


// object 类型
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

