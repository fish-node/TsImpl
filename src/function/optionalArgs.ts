// 可选参数

function addNumber(baseValue: number, inc?: number): number{
    inc = inc == undefined ? 0 : inc;
    return baseValue + inc;
}

let numb = addNumber(1, 2);
numb = addNumber(numb);

// 使用默认值来达到可选的效果

function addNumber2(baseValue: number, inc= 0): number{
    return baseValue + inc;
}
numb = addNumber2(numb);


function asssertNotNull(isExist: boolean, optional?: string, ){
    // Error: 这个可能是为null
    // optional.length;

    if (isExist){
        // 非空断言
        optional!.length;
    }
}
