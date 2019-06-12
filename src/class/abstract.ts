/**
 * 使用抽象类: 面对抽象编程
 */

abstract class God {
    public abstract createWorld(): void;
}

// tslint:disable-next-line:max-classes-per-file
class MieGod extends God {
    public createWorld(): void {
        console.log("world is created");
    }
}
