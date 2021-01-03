// 1.添加属性
let obj = { username: '徐 逸飞' };
obj.age = 18;
console.log(obj)

// 2.删除属性
delete obj.age;

// 3.检测属性
// 3.1 使用hasOwnProperty方法检测
console.log(obj.hasOwnProperty('username'));
// 3.2 使用in方法 => in方法会在原型对象上检测
console.log('username' in obj);

// 4. 获取属性名
// 4.1 使用Object.getOwnPropertyNames获取对象的属性名集合
console.log(Object.getOwnPropertyNames(obj));

// 4.2 使用Object.assign方法设置属性
Object.assign(obj, { school: 'sdju' }, { dinner: 'chicken' });
console.log(obj);