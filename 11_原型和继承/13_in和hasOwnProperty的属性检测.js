let a = { url: 'houdunren' };
let b = { name: '徐逸飞' };
// Object.prototype.web = 'hdcms';
// console.log('web' in a); // true , in不止会检测对象也会检测对象的原型链
Object.setPrototypeOf(a, b);
console.log('name' in a);

// hasOwnProperty用于检测当前对象是否含有属性
// 不会检测原型链
console.log(a.hasOwnProperty('url')); // true
console.log(a.hasOwnProperty('name')); // false

for (const key in a) {
  if (a.hasOwnProperty(key)) {
    console.log(a[key]);
  }
}