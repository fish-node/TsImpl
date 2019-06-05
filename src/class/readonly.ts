/**
 * readonly属性只能在构造函数中初始化
 *
 * 其他地方不能修改
 */

class Fish {
    public readonly size: number;
    constructor(size: number) {
        this.size = size;
    }
}

let fish: Fish = new Fish(4);

// fish.size = 3;
