function f(x: number, y?: number){
    // 不行，y可能为null
    // return x + y

    return x + (y || 0)
}

f(2, 3)
f(2)

// 不行，y是 number | undefined
f(2, null)
