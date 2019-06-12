/**
 * type: 可以让约束一个变量自能是有限的值
 *   这个类型用起来很很舒服
 */
type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

let method: HttpMethod = "GET";

// 不合法
// method = "Get";

/**
 * 也可以用来定义个函数约束
 */
type AddSchema = (arg1: number, arg2: number) => number;

let Add: AddSchema = (arg1, arg2) => {
    return arg1 + arg2;
};

Add(1, 2);
