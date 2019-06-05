/**
 * any: 任意类型
 */
let notSure: any = 4;
notSure.ifItExists();
// okay, ifItExists might exist at runtime
notSure.toFixed();
// okay, toFixed exists (but the compiler doesn't check)

/**
 * null 和 undefined
 * 单独的话没什么卵用，不过可以参与联合类型声明
 */
let u: undefined;
let n: null = null;

/**
 * void: "不存在"的类型
 */
function warnUser(): void {
    console.log("This is my warning message");
}
let u1: any = warnUser();

// 👇的不行
// let u2: null = warnUser();

/**
 * never: 说明函数会抛出异常或者永远不会结束
 */
function error(message: string): never {
    throw new Error(message);
}
