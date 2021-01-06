const hd = {
  username:'xuyifei',
  age:21
}

// 使用forIn循环对象时 , 每一次返回对象的键名
for(const key in hd){
  // 此处不能使用hd.key
  // 因为key实际上是一个变量
  console.log(key,hd[key]);
}

let a = {};
// 实际上a.b的意义是 , 在a中新建一个属性名为'b'的变量
a.b = 1;
console.log(a['b'])