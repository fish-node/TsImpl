/**
 * 用来约束一个对象的结构
 *   - 有哪些必有的属性，以及它们的类型？
 *   - 有哪些可选属性？
 *   - 有哪些方法？
 *   - 是否可读的？
 */

/**
 * name不能为空
 * age可以为空
 * 不能有其他属性
 */
interface IUser {
    name: string;
    age?: number;
}

let Jon: IUser = {
    name: "Jon Snow",
};

/**
 * []: 属性签名
 *
 * [propName: string]: string;
 * 表明这个对象的key是string，值是string
 *
 * 这样这个对象就可以有任意多个属性
 */
interface IConfig {
    [propName: string]: string;
    color: string;
}

let conf: IConfig = {
    color: "red",
    name: "name",
    s: "sdf",
};

/**
 * readonly: 自读属性
 */
interface ICat {
    // 自读属性
    readonly name: string;
    readonly age: number;
}

let cat: ICat = {
    name: "Tom",
    age: 73,
};

// 不能修改
// cat.name = 3
