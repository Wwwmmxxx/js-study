const user = {
  name: '徐逸飞',
  age: 18
}
// 使用Object.getOwnPropertyDescriptor可以查看对象中某个属性的描述
let desc = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(desc));
// {"value":"徐逸飞","writable":true,"enumerable":true,"configurable":true}

// 使用Object.getOwnPropertyDescriptors可以查看对象中所有属性的描述
let descs = Object.getOwnPropertyDescriptors(user);
console.log(JSON.stringify(descs));
// {"name":{"value":"徐逸飞","writable":true,"enumerable":true,"configurable":true},"age":{"value":18,"writable":true,"enumerable":true,"configurable":true}}

// 可以看到一个属性下面有四个值:
// 1.value:对象属性的值 , 默认为undefined
// 2.writable:对象属性是否可以变更 , 默认为true
// 3.enumerable:对象属性是否可以通过forin/Object.keys()读取 , 默认为true
// 4.configurable:是否使用delete,能否修改属性特性或能否修改访问器属性 , 默认为true