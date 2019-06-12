// 展开运算符来传递数组

function sumArray(...numbers: number[]) {
    let sum = 0;
    numbers.forEach( (ele) => {
        sum += ele;
    });
    return sum;
}

let sumNumber = sumArray(1, 2, 3, 4);
console.log(sumNumber);
