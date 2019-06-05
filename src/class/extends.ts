class Animal {
    public run() {
        console.log("I am running....");
    }
}

// tslint:disable-next-line:max-classes-per-file
class Horse extends Animal {
    public run() {
        super.run();
        console.log("咩。。");
    }
}

let horse: Horse = new Horse();

horse.run();
// I am running....
// 咩。。
