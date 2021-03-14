function extendError(first, second) {
    var result = {};
    for (var key in first) {
        // 编译报错：Type 'T' is not assignable to type 'T & U'.
        result[key] = first[key];
    }
    for (var key in second) {
        result[key] = second[key];
    }
    return result;
}
