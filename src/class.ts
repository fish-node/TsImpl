import Sex from './enum'
import Person from './interface'

class cPerson implements Person{
  constructor(name: string, 
    country: string, sex: Sex){
    this.name = name
    this.country = country
    this.sex = sex
  }
  name: string;
  sex: Sex;
  country: string;
  run () {
    console.log(this.name + ' is running!')
  }
}

export default cPerson