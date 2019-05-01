// 任意类型
let notSure: any = 4;
notSure.ifItExists();
// okay, ifItExists might exist at runtime
notSure.toFixed();
// okay, toFixed exists (but the compiler doesn't check)


let u: undefined = undefined;
let n: null = null;

// 没有返回值
function warnUser(): void {
    console.log("This is my warning message");
}
let u1: any = warnUser();
// 👇的不行
// let u2: null = warnUser();



// 说明函数会抛出异常或者永远不会结束
function error(message: string): never {
    throw new Error(message);
}
