// 对函数的 参数和返回值 的类型进行校验

function sum(arr: Array<number>): number{
  let sum = 0;
  arr.forEach(element => {
    sum += element
  });
  return sum
}
sum([1,2,3,4]);


let add: (a: number, b: number) => number;

