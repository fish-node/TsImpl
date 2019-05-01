class Animal{
    run(){
        console.log("I am running....");
    }
}

class Horse extends Animal{
    run(){
        super.run();
        console.log("咩。。")
    }
}

let horse: Horse = new Horse();

horse.run();
