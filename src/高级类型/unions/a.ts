// 只能使用联合类型的共同接口

interface Bird{
    eat(): void
    fly(): void
}

interface Dog{
    eat(): void
    run(): void
}

function eat(animal: Bird | Dog){
    animal.eat()

    // 不可以，因为animal未必会有run这个属性
    // animal.run()
}

function run(animal: Bird | Dog) {
    // 类型断言 之后就可以使用
    (animal as Bird).eat()
}
