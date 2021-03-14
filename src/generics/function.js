/**
 * 函数泛型
 *   类型也可以理解为一个参数
 */
function add(a, b) {
    return a;
}
console.log(add(1, 2));
// 编译器报错，类型不匹配
console.log(add("a", 3));
