// 对函数 参数 返回值 的 类型进行校验
function sum(arr: Array<number>): number{
  let sum = 0;
  arr.forEach(element => {
    sum += element
  });
  return sum
}
sum([1,2,3,4]);
