// 用来约束一个列表的表现形式


// 要求是为数字索引，string类型的元素
interface StringArray2 {
    [index: number]: string;
}

let myArray: StringArray2;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
