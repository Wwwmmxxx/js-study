// 原型在属性中一般为__proto__
let arr = ['徐逸飞'];
console.log(arr.concat('xuyifei'));

let hd = {};
console.log(hd);
let hd2 = {};
// 使用getPrototypeof方法获取属性的父类
console.log(Object.getPrototypeOf(hd) === Object.getPrototypeOf(hd2));