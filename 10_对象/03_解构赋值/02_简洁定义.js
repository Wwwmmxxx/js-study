

// 1.简洁定义
// 解构时 , 需要将解构的名称与对象中的名称一样
let info1 = { username1: 'xuyifei', age1: 1 };
let { username1, age1 } = info1;
console.log(username1, age1);

// 2. 只赋值部分变量
let info2 = { username2: 'xuyifei', age2: 1 };
let { age2 } = info2;
console.log(age2);

// 注意与数组解构的区别 , 数组结构中允许使用,
let [, url] = ['houdunren', 'hdcms'];
console.log(url);

// 3.使用变量赋值对象属性
let username3 = 'wanghuizhao';
let age3 = 28;
// 如果属性值和变量同名可以写成简写的形式
let info3 = {
  username3,
  age3
};
console.log(info3.username3, info3.age3);