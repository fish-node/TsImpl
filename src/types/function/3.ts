type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function describableFunction(num: number): boolean{
    return num < 2;
}

// Property 'description' is missing in type '(num: number) => boolean' but required in type 'DescribableFunction'.
doSomething(describableFunction)

