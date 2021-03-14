/**
 * 函数泛型
 *   类型也可以理解为一个参数
 */

function add<T>(a: T, b: T): T {
  return a;
}

console.log( add<number>(1, 2))

// 编译器报错，类型不匹配
console.log( add<string>("a", 3))
