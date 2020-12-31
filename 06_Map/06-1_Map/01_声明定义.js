// Map是一组键值对的结构
// 能够解决 => 1.具有几块的查找速度,2.函数,对象,基本类型都可以作为键或值

// 1.可以接受一个数组作为参数,该数组的成员是表示键值对的数组
let m1 = new Map([
  ['houdunren', '后盾人'],
  ['hdcms', '开源系统']
])

console.log(m1.get('houdunren'));

// 2.可以使用set方法添加元素,支持链式操作
let m2 = new Map();
m2.set('name', '徐逸飞').set('age', 25);
console.log(m2);

// 3. Map构造函数的原理
const m3 = new Map();
const arr = [['houdunren', '后盾人'], ['hdcms', '开源系统']];
arr.forEach(([key, value]) => {
  m3.set(key, value);
})
console.log(m3);