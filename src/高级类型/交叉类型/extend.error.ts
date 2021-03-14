function extendError<T, U>(first: T, second: U): T & U {
    let result = {} as T & U;

    for(let key in first){
        // 编译报错：Type 'T' is not assignable to type 'T & U'.
        result[key] = first[key]
    }

    for(let key in second){
        result[key] = second[key]
    }

    return result
}
