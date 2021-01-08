'use strict'
const user = {
  name: '徐逸飞',
  age: 18
}

// 1. 使用Object.seal(),阻止添加新属性并将所有的属性标记为{configurable:false}
Object.seal(user);
console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user)));

// 2. 使用Object.isSealed()判断对象是封闭
console.log(Object.isSealed(user)); // true => 表示封闭
