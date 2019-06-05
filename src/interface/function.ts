// 用来约束一个函数的表现形式


interface AddFunctionInterface{
    (arg1: number, arg2: number): number;
}

let AddNumbers: AddFunctionInterface = function (arg1: number, arg2: number): number {
    return arg1 + arg2;
}

let res: number = AddNumbers(1, 3);
