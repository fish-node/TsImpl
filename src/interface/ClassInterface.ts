
// 约束一个类的特性，这里有点像Java了
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface{

    currentTime: Date;

    setTime(d: Date): void {
    }
}

function test(obj: ClockInterface): void{};

let clock: Clock = new Clock();

test(clock); // ok

let clock2: ClockInterface = {
    currentTime: new Date(),
    setTime(d: Date){}
}

test(clock2); // ok


