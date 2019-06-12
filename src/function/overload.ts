/**
 * 函数重载
 *   - 先做类型声明
 *   - 然后实现它，实现的时候通过if + typeof 来做类型判断
 *
 * 服了，怎么会有这么拗口的语法？？
 */

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
}

console.log(add(1, 2));
console.log(add("a", "b"));
