function xhr(method, url) {
    console.log(`${method}: ${url}`);
}
// 编辑器或者tsc自动监测出参数类型错误
//  error TS2345: Argument of type '"Get"' is not assignable to parameter of type 'HttpMethod'.
xhr("Get", "https://typescriptlang.org");
// 这也太爽了吧。以前使用JavaScript的API就是被各种可能的参数搞晕了
// 没有异常
xhr("POST", "https://github.com");
