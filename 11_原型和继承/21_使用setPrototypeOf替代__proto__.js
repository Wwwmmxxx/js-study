// 为单个对象 , 定义它的原型
let user = {
  show() {
    return this.name;
  }
}

let hd = Object.create(user);

console.log(Object.setPrototypeOf(hd,user));
console.log(Object.getPrototypeOf(hd,user));

