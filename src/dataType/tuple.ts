// tuple 类型

let tup: [string, number] = ['Jon Snow', 343]

// Error: 类型不能变
// tup[1] = "2";

// 可以越界访问，不理解为什么设计成可以越界访问的。。。

tup[3] = "world";
// OK, 'string' can be assigned to 'string | number'

console.log(tup[5].toString());
// OK, 'string' and 'number' both have 'toString'


// tup[6] = true;
// Error, 'boolean' isn't 'string | number'
