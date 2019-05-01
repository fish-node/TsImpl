class Panda{
    // 全局可见
    public name: string;

    // 可以被子类访问，可以被外界访问
    protected age: number;

    // 只有当前实例可以使用
    private weight: number;
}

class PandaChild extends Panda{
    constructor(){
        super();
        this.age = super.age - 20;
    }
}
