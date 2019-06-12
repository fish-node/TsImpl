/**
 * 对于联合类型，我们每次使用typeof就相当于一次类型断言
 *   自动的词法分析帮我们精准追踪变量的类型
 *
 * if + typeof 可以对类型系统进行分支判断
 * instanceof 也可以的
 */

function add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else {
        throw new Error("参数类型需要保持一致");
    }
}
