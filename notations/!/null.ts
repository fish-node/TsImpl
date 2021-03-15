function add1(a: number, b?: number) {
    // 不行，b可能是undefined
    return a + b
}

function add2(a: number, b?: number){
    // 手动断言b不是undefined
    return a + b!
}

type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
    // Object is possibly 'undefined'.(2532)
    // Cannot invoke an object which is possibly 'undefined'.(2722)
    const num1 = numGenerator(); // Error
    const num2 = numGenerator!(); //OK
}
