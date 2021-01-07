// 对象赋值时复制的内存地址 , 所以一个对象的改变影响另一个对象
let obj1 = {
  name: '后盾人',
  user: {
    name: 'hdcms'
  }
}
let a = obj1;
let b = obj1;
a.name = 'lisi';
console.log(b.name); //lisi
console.log('-------------------------------')

// 浅拷贝: 只能拷贝第一层别的值 , 但是当对象中依然存在对象时 , 浅拷贝就会失效
// 1. 使用forin
let obj2 = { name: "后盾人" };
let hd2 = {};
for (const key in obj2) {
  hd2[key] = obj2[key];
}

hd2.name = "hdcms";
console.log(hd2);
console.log(obj2);
console.log('-------------------------------')

// 2. 使用Object.assign方法
let obj3 = { name: '后盾人' };
let hd3 = {
  stu: Object.assign({}, obj3)
}

console.log(hd3.stu.name); // 后盾人
obj3.name = 'hdcms';
console.log(hd3.stu.name); // 后盾人
console.log('-------------------------------')

// 3. 使用展开语法完成
let obj4 = { name: '后盾人' };
let hd4 = { ...obj4 };
obj4.name = 'houdunren';
console.log(obj4.name);
console.log(hd4.name);