// 使用defineProperty可以模拟定义私有属性,从而使用面向对象的抽象特性
'use strict'
function User(name, age) {
  let data = { name, age };
  Object.defineProperties(this, {
    name: {
      get() {
        return data.name;
      },
      set(value) {
        if (value.trim() == "") throw new Error('无效用户名');
        data.name = value
      }
    },
    age: {
      get() {
        return data.age;
      },
      set(value) {
        if (value.trim() == "") throw new Error('无效年龄')
      }
    }
  });
}

let hd = new User('后盾人', 33);
console.log(hd.name);
hd.name = '徐逸飞';
console.log(hd.name);