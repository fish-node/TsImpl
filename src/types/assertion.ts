let strAssert = '123';

let x: number;

// error
x = strAssert

// error
x = strAssert as number

// ok
x = (strAssert as any) as number
