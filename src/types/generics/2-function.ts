/**
 * 函数泛型
 *   类型也可以理解为一个参数
 */

// 这个函数可以处理很多不同的数据类型
function add<T>(a: T, b: T): T {
  return a;
}
// 其实也就是在这个时候，觉得JS比较灵活，TS比较麻烦

console.log( add<number>(1, 2))

// 编译器报错，类型不匹配
console.log( add<string>("a", 3))
