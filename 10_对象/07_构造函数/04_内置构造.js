// JS中大部分数据类型都是通过构造函数创建的.
// 比如
const num = new Number(99);
const string = new String('后盾人');
const boolean = new Boolean(true);
const date = new Date();
const regexp = new RegExp('\\d+');
let hd1 = new Object();

// 正常的使用字面量创建对象
const hd2 = {
  name: '后盾人'
}
console.log(hd2.constructor); // 返回一个函数类型

// 如果使用构造函数创建
const hd3 = new Object();
hd3.name = '开源内容管理系统';
console.log(hd3);