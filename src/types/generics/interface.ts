/**
 * 对接口做泛型
 */

interface ITypes<T, U> {
    a: T;
    b: U;
}

let type1: ITypes<string, number> = {
    a: "a",
    b: 2,
};
