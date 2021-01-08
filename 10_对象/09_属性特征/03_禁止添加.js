'use strict'
const user = {
  name: '徐逸飞'
}
// 1. 使用Object.preventExtensions禁止向属性添加值
Object.preventExtensions(user);
// user.age = 18; // Cannot add property age, object is not extensible

// 2. 使用Object.isExtensible判断是否能够向对象中添加属性
console.log(Object.isExtensible(user)); // 返回false => 表示不能够向user中添加属性值