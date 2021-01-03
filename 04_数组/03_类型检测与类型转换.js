// 用来检测是否是数组
Array.isArray();

// 转换成字符串的方法
// 1.使用数组的toString()方法
console.log([1,2,3,4,5].toString());
// 2.使用String的构造函数
console.log(String([1,2,3,4,5]));
// 3.使用join方法
console.log([1,2,3,4,5].join(","));

// 把其他类型转换为数组
let str = "hdcms";
// 1.使用split方法
console.log(str.split(","));
// 2.使用Array.from方法 , 会将string字符串拆分为一个个字母
// Array.from具有第二个参数,传递一个function,表示对每一个元素做二次处理
console.log(Array.from(str));

// 将对象转为属性 , 前提 => 将属性变为数值并增加一个length属性即可转换
let obj = {
  0:'hdcms',
  1:'houdunren',
  length:2
}

console.log(Array.from(obj));


