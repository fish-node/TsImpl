/**
 * 接口支持继承
 */

interface IHuman {
    name: string;
}

interface IChinese extends IHuman {
    age: number;
}

let p1: IChinese = {
    name: "Jon",
    age: 22,
};

/**
 * 接口的多继承, 多继承的时候父接口不能冲突
 */
interface IMan {
    sex: string;
}

interface IChineseMan extends IChinese, IMan {
}

let p2: IChineseMan = {
    name: "Bob",
    age: 33,
    sex: "man",
};
