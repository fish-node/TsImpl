function padLeft(value: string, padding: string | number) {
    // 这其实也是一种类型保护
    if (typeof padding === 'string'){
        return padding + value
    }
    if (typeof padding === "number") {
        return Array(padding + 1).join(' ') + value
    }
}

console.log( padLeft('a', 2))
console.log( padLeft('world', 'hello '))
