// 接受一个string类型的参数，然后做出处理
type HandleString = (str: string) => void;

function strArrayMap(strArr: string[], handle: HandleString) {
    for (const str of strArr) {
        handle(str);
    }
}

let stringArray = ["1", "a", "2"];

strArrayMap(stringArray, (str) => console.log(str))
