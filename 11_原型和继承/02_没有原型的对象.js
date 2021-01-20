let xj = { name: '向军' };
console.log(xj.hasOwnProperty('name'));
// 第一个参数指定它的父亲
// 完全数据字典对象 , 没有原型的关系存在
let hd = Object.create(null, {
  name: {
    value: '后盾人'
  }
});
console.log(hd);
// 直接报错 , 因为原型中是没有hasOwnProperty方法
console.log(hd.hasOwnProperty('name'));
console.log(Object.keys(hd));