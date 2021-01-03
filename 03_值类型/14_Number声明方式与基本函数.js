// 引用类型
let number1 = new Number(99);
console.log(number1.valueOf() + 1);

// 值类型 , 两者其实是没有差别的
let number2 = 99;
console.log(number2.toString()); // 此时值为string型
console.log(number2.valueOf()); // 此时值为number类型

// 判断是否是一个整数
let number3 = 99;
console.log(Number.isInteger(number3));

// 四舍五入
let number4 = 99.556;
console.log(number4.toFixed(2));


