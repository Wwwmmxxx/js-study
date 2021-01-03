// Array和 Object 都属于Object数据类型
let arr = [1, 23, 3];
let obj = {};

console.log(typeof arr);

// 可以通过typeof 来判定变量是否定义
// 当变量没有定义时, 此时其数据类型为Object
let houdunren;
console.log(typeof houdunren)

// Array 和 Object 可以使用instanceof来区分
// 这个地方使用了原型链的方法
// 是否是由某一个构造函数创建出来的 => Array.prototype
console.log(houdunren instanceof Object);
