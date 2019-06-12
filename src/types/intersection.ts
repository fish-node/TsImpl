/**
 * 合并类型，T & U 拥有 T 和 U的所有特征
 */

const merge = <T, U>(arg1: T, arg2: U): T & U => {
    let res = {} as T & U;
    res = Object.assign(arg1, arg2);
    return res;
};
