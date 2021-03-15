let x: number;
initialize();

// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
    x = 10;
}

// 这个符号是 ! 还是 !: ?
let y!: number;
initialize2();
console.log(2 * y); // Ok

function initialize2() {
    y = 10;
}
