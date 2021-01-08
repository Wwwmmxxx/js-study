'use strict'
const user = {
  name: '徐逸飞'
}

// 1. 使用Object.freeze()冻结对象后 , 不允许添加 , 删除 , 修改属性
// defineProperty{writable:false,configurable:false};

Object.freeze(user);

// 2. 使用Object.isForzen()判断对象是否被冻结
console.log(Object.isFrozen(user));