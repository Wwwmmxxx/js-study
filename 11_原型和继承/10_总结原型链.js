let arr = [];
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);// null

let a = { name: 'a' };
let c = { name: 'c' };
let b = {
  name: 'b',
  show() {
    console.log(this.name);
  }
}
Object.setPrototypeOf(a, b); // 设置a的父亲为b
Object.setPrototypeOf(c, b); // 设置c的父亲为b
a.show();
c.show();