// 两个同名interface可以叠加在一起

interface ObjInterface{
    a: number;
}

interface ObjInterface{
    b: string
}

let obj123: ObjInterface = {
    a: 1,
    b: '2'
};

// 不行，同名type冲突
type ObjType = {
    a: number
}
type ObjType = {
    b: string
}

