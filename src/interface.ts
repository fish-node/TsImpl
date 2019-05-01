import Sex from './enum'

interface Person{
  name: string;
  country?: string;
  readonly sex: Sex;
  run(): void;
}

export default Person