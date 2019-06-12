/**
 * 类的静态属性编译后会直接放在类对象上
 */

class Sheep {
    public static count: number;
}

let sheep: Sheep = new Sheep();
Sheep.count = 3;
