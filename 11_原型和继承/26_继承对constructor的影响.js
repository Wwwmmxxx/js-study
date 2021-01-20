function Hd() { }
let obj = new Hd();
console.dir(Hd);// 其中会有一个原型
console.log(obj.__proto__.constructor == Hd); // true

let obj2 = obj.__proto__.constructor;
