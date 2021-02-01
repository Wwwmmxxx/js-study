// 只是简化的写法
class User {
  constructor(name) {
    this.name = name;
  }
  // 此时会自动把该方法放到原型中
  // 好处:实例化对象时 , 共用原型的方法
  show() {

  }
}
console.dir(User);
console.log(User === User.prototype.constructor); //true
function Hd(name) {
  // 与constructor方法相同
  this.name = name;
}
Hd.prototype.show = function () {
  //实际上这个结构和User的show()方法是一样的
}
console.dir(Hd);
console.log(Hd === Hd.prototype.constructor); //true


let hd = new Hd();
let u = new User('后盾人'); // 结果与上一种相同
console.log(Object.getOwnPropertyNames(u)) // ['name']
console.log(Object.getOwnPropertyNames(User.prototype)) // ['constructor','show']