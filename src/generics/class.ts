/**
 * 泛型约束
 */

interface IUser {
    name: string;
}

class Clazz<T extends IUser> {
    public field?: T;
}
