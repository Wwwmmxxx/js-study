//NaN => not a number
console.log(Number("houdunren"));
// NaN是不能进行比较的
// 所以需要使用Number中的isNaN函数判断
// 或者Object中的is方法 , 进行比较
console.log(NaN == NaN) // 此时返回False
console.log(Number.isNaN(2 / "后盾人"));
console.log(Object.is(2 / "houdunren", NaN));

// 数组转换为数值
// 当数组中有0个值时,数值为0
// 当数组中有1个值时,数值为1
// 当数组中有多个值时,数值为NaN
let array = [];
console.log(Number(array)); // 此时为0
array.push('1','2');
console.log(Number(array)); // 此时为0

// 对象转数组
// 此时为NaN,但是可以通过重写valueOf()方法,返回数值取得返回值
console.log(Number({}));