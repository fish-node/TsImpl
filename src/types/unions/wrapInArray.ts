function wrapInArray(obj: string | string[]): string[] {
    return typeof obj === "string" ? [obj] : obj;
}

function logStringArray(strArray: string[]) {
    for (let str of strArray) {
        console.log(str)
    }
}

console.log(wrapInArray("Jon"))

console.log(wrapInArray(["Jon", "Bob"]))

// 没有问题的。。。
logStringArray(wrapInArray("Jon"))
