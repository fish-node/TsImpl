class Panda {
    // 全局可见, 默认的修饰符就是public
    public firstName?: string;
    public lastName?: string;

    // 可以被子类访问，不可以被外界访问
    protected age?: number;

    // 只有当前实例内部可以使用
    private weight?: number;
}

// tslint:disable-next-line:max-classes-per-file
class ChildPanda extends Panda {
    constructor() {
        super();
        this.age = super.age && super.age - 20;
    }
}

let panda: Panda = new Panda();
console.log(panda.firstName);
console.log(panda.lastName);
