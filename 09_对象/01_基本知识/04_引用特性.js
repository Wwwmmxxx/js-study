// 对象和函数, 数组一样是引用类型,即复制只会复制引用地址
let obj1 = { name: 'xuyifei' };
let obj2 = obj1;
console.log(obj2.name);
obj2.name = 'shenjunguang'
console.log(obj1.name)

// 因为是引用类型 , 所以使用 "==" 或 "===" 都是一样的 , 都是比较它们的内存地址