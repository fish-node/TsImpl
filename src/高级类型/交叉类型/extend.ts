function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U;

    for(let key in first){
        // 类型转化为any，不会出现编译错误了
        result[key] = first[key] as any;
    }

    for(let key in second){
        result[key] = second[key] as any;
    }

    return result
}

interface Duck{
    swim(): void
}
interface Dog{
    run(): void
}

let duck: Duck = {
    swim(){
        console.log('swimming')
    }
}

let dog: Dog = {
    run(){
        console.log('run')
    }
}

// animal 同时有Duck和Dog两种类型，即 Duck & Dog
let animal = extend(duck, dog);

// 可以准确的进行类型推断。。。
animal.run();
animal.swim();

