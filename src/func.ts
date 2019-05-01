import Person from './interface'

function logInfo(person: Person): void{
  console.log(person.name)
}

export default logInfo

export function numAdd(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

export function genCom<T>(arg1: T, arg2: T): boolean {
  return arg1 > arg2;
}