/**
 * 类的静态属性编译后会直接放在类对象上
 */

class Sheep {
    public static count: number = 0;
    constructor() {
        Sheep.count++
    }
}

let sheep = new Sheep();

console.log(Sheep.count)
