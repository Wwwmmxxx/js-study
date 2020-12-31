// 1. 基本声明
let obj = {
  name: 'xuyifei',
  get: function () {
    return this.name;
  }
}

console.log(obj.get())

// 2. 简写
let obj1 = {
  name: 'xuyifei',
  get() {
    return this.name;
  }
}

console.log(obj1.get())

// 3. 字面量形式新建对象在JS内部也是使用new Object()创建的
let obj2 = {};
let obj3 = new Object();
console.log(obj2, obj3);
console.log(obj2.constructor);
console.log(obj3.constructor);