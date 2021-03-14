function getSelf(s: string | null): string{
    // 不行，s可能是null
    // return s

    // 可以， !是类型断言，这个s被断言为非null
    return s!
}
