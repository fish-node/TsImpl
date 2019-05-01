# interface
用来约束对象、函数的参数或返回值、类的实例必须有某些属性或方法

## 接口的类型
Java的接口都是约束类的，但是TS的接口用途非常广泛，而且它是分类型的。
不同的接口可以约束不同的对象

### 通用接口
```typescript
interface CatInterface {
    name: string;
    age: number;
    run(s: string): void;
}
```
这样的接口可以用来约束对象、类、函数的参数和返回值。

### 对象接口
```typescript
interface Config{
    [propName: string]: string;
    color: string;
}
```
`[propName: string]: string;` 说明上面接口约束的对象的键必须是string
值必须是string类型
所以上面的接口不能约束类和函数

同时下面的写法是不行的
```typescript
interface Config{
    [propName: string]: string;
    color?: string;
    num: number
}
```
后面两个属性和第一个冲突了

### 列表接口
```typescript
interface StringArray {
    [index: number]: string;
}
```
只能用来约束列表

### 函数接口
```typescript
interface AddFunctionInterface{
    (arg1: number, arg2: number): number;
}
```
只能用来约束函数

### 构造函数接口
约束一个类的构造函数
```typescript
interface ClockConstructor {
    new (hour: number, minute: number): string;
}
```

## 接口的继承
接口可以继承自接口
