// __proto__ => getter/setter
let hd = { name: '后盾人' };
hd.__proto__ = {
  show: function () {
    console.log(this.name);
  }
}

// 这里虽然赋值了99 , 但是依然能够执行
// 简单的赋值 , 如数字 , 字母串 , 字母
// 实际上是存在一个__proto__的setter与getter
hd.__proto__ = 99;

console.log(hd.__proto__)

// 类似如下
let hd2 = {
  action: {},
  get proto() {
    return this.action
  },
  set proto(obj) {
    if (obj instanceof Object) {
      this.action = obj;
    }
  }
}

// 如果一定需要赋值__proto__呢? 只需要设置它的原型为null , 就不会触发setter了
let hd3 = Object.create(null);
hd3.__proto__ = '后盾人';
console.log(hd3.__proto__);