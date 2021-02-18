let a = {}

let b = {
  __proto__: a
}

let c = {
  __proto__: b
}
console.log(a.isPrototypeOf(b)); // b对象是否由a对象实现
console.log(a.isPrototypeOf(c));

//-----------------------------------------------------
class User{}
class Admin extends User{}
let hd = new Admin();
console.log(Admin.prototype.isPrototypeOf(hd));