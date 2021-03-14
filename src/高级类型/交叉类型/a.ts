function log(value: string & number){
    console.log(value)
}

// 报错，参数必须即是string，又是number。
log('111')
