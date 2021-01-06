// 对象直接参与计算时,系统会根据使用场景在number/string/default中进行转换

let obj = new Number(1);

// 如果场景需要使用数值类型,调用顺序:valueOf() > toString()
console.log(obj + 1);

// 如果使用场景需要使用字符串类型,调用顺序:toString() > valueOf()
console.log(obj + '1');

// 如果使用场景不确定, 则使用default , 大部分的default会作为数值使用
console.log(obj == '1');