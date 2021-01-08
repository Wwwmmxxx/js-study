'use strict'
// 请注意 , 这个地方一定要使用严格模式 , 才能进行检测
const user1 = {
  name: '徐逸飞',
}

// 1. 通过Object.defineProperty方法修改属性特征
Object.defineProperty(user1, 'name', {
  value: 'Sam',
  configurable: false,
  enumerable: false,
  writable: false
})

console.log(user1.name); // 返回Sam

// user.name = 'Xxx'; // 报错 => writable 设置为false

// console.log(Object.keys(user)); // 遍历不到name => enumerable 设置为false

// delete user.name; // 报错 => configurable 设置为false

// 报错 => configurable 设置为false
// Object.defineProperty(user, 'name', {
//   value: 'Sam',
//   configurable: true,
//   enumerable: true,
//   writable: true
// })

// 2. 使用Object.defineProperties可以一次设置多个属性
let user2 = {};
Object.defineProperties(user2, {
  name: { value: "向军", writable: false },
  age: { value: 18 }
});
console.log(user);
user.name = "后盾人"; //TypeError