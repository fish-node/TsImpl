// 基本类型
let num: number = 123
let str: string = 'hello world'
let bool: boolean = false


// 对象类型
let prettySure: Object = 4;
// prettySure.toFixed();
// Error: Property 'toFixed' doesn't exist on type 'Object'.



// object 类型
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

