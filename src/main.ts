import Sex from './enum'
import cPerson from './class'
import logInfo from './func'
import {numAdd, genCom} from './func' 
import Person from './interface'

let person:Person
person = new cPerson('lishuai', 'China', Sex.Man)
// person.sex = Sex.Woman // 报错 read only

let person2 = new cPerson('lishuai', 'China', Sex.Man)
person2.sex = Sex.Woman // 不报错

// logInfo(person)

let b: number
// console.log(b)

console.log(numAdd(2, 4))
// console.log(numAdd('2', 4))  // error

console.log(genCom<string>('sdf', 'sdfs'))

