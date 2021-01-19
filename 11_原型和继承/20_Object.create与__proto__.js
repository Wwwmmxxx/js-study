// 为单个对象 , 定义它的原型
let user = {
  show() {
    return this.name;
  }
}

// 定义对象的原型, 不能获取
let hd1 = Object.create(user);
hd1.name = '后盾人';
let hd2 = Object.create(user, {
  name: {
    value: '后盾人'
  }
});
console.log(hd1.show());
console.log(hd2.show());

// 浏览其渠道 , 获取
let hd3 = { name: '后盾人' }
hd3.__proto__ == user; // __proto__ , 有值的时候是获取 , 没有值的时候是设置
console.log(hd3);