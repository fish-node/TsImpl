用了TS之后，我们再也无法修改通过字面量声明的对象了。
真好！！！

JS对象字面量非常灵活好用，但是滥加使用简直是噩梦。有接口约束真好。

接口约束了一个对象该有哪些属性，就这样的，typed，真好

https://www.typescriptlang.org/docs/handbook/type-compatibility.html

类型可以向下扩展的
``` ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```