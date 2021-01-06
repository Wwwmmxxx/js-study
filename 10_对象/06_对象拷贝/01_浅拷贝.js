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

// 1. 浅拷贝
let obj2 = {name: "后盾人"};
let hd2 = {};
for (const key in obj2) {
  hd2[key] = obj2[key];
}

hd2.name = "hdcms";
console.log(hd2);
console.log(obj2);