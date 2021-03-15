// npx tsc nullable.ts --strict

let s = "foo";

s = null;
// error, 'null' is not assignable to 'string'



let sn: string | null = "bar";
sn = null; // ok
