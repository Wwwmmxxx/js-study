// 使用...可以展开对象的结构,下面是实现对象合并的实例
let obj1 = { name: 'xuyifei' };
let obj2 = { age: 23 };

let obj3 = { ...obj1, ...obj2 };
console.log(JSON.stringify(obj3));