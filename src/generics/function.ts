/**
 * 函数泛型
 */

function addT<T>(a: T, b: T): T {
  // 必须把参数当做任意类型，
  //    .length 未必存在
  //    + 未必合法

  // return a + b
  // Operator '+' cannot be applied to types 'T' and 'T'

  return a;
}

let n1 = addT<number>(1, 2);

let s1 = addT("hello ", "world");

function getLength<T>(args: T[]): number {
  return args.length;
}

let l1 = getLength<number>([1, 2, 3]);
