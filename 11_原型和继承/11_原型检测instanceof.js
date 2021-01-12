function A(){}
function B(){}
function C(){}

let c = new C();
B.prototype = c;

let b = new B();
A.prototype = b; // 此时A的prototype不再为A的prototype , 而是B的prototype

let a = new A();

// 检测A的原型链上是否有A.prototype
console.log(a instanceof A);  // 此时一定为True , 因为A的prototype被变更为B , new出来的a使用的是A的prototype
console.log(a instanceof B); // true
console.log(a instanceof C); // true
console.log(b instanceof A); // false
console.log(a instanceof Object); // true
