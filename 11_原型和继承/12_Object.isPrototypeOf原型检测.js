// 检测某一个对象是否是另一个对象的长辈
let a = {};
let b = {};
let c = {};

// Object.prototype = b.__proto__
console.log(b.__proto__.isPrototypeOf(a));
console.log(Object.prototype.isPrototypeOf(a));

Object.setPrototypeOf(a, b);// 设置b是a的父亲
console.log(b.isPrototypeOf(a));

Object.setPrototypeOf(b, c); // 设置c是b的父亲
console.log(c.isPrototypeOf(b));
console.log(c.isPrototypeOf(a));