/**
 * 使用接口来约束一个函数的表现形式
 */

interface IAdd {
    (arg1: number, arg2: number): number;
}
let NumsAdd: IAdd = (arg1, arg2) => {
    return arg1 + arg2;
};

console.log(NumsAdd(1, 2));
