// 间接的组织了对this的使用
function f(this: void, num: number) {
  // console.log(this.a)
  console.log(num)
}
f(2)