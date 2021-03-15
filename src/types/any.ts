// any 即 任意数据类型， JavaScript 可以理解为 TypeScript的 any type 版本

let obj: any = { x: 0 };
// None of these lines of code are errors
// obj可以假设成为任意数据类型来使用
obj.foo();
obj();
obj.bar = 100;
obj = "hello";

let obj2 = {x : 0};
// error, obj2没有这些属性
obj2.a = 20;
