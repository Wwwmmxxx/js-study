// 1.Symbol的基本使用

let hd = Symbol();
let edu = Symbol();
console.log(hd); //symbol
console.log(hd == edu); //false

// 2.Symbol是不能添加属性的
hd.name = "后盾人";
console.log(hd.name); // 读取出来以后是undefined

// 3.Symbol的描述参数
// 需要注意,即使描述相同的Symbol,但它们也绝不相等,除非是用Symbol.for方法
let hd2 = Symbol("this is hd2");
let edu2 = Symbol("this is edu2");
console.log(hd2); // 输出Symbol(this is hd2)
console.log(edu2); // 输出Symbol(this is edu2)
// 也可以通过描述属性获得
console.log(hd2.description); // 输出this is hd2

// 4.Symbol.for , 根据描述获取一个Symbol , 若不存在则创建
let hd3 = Symbol.for("this is my house");
let edu3 = Symbol.for("this is my house");
console.log(hd3 === edu3); // 返回true

// 5.使用Symbol保证对象的唯一性
// 需要注意: Symbol声明或使用必须使用[] , 不能使用.
let hd4 = Symbol("my");
let obj = {
  [hd4]:"this is mymy house"
  // hd4:"this is mymy house" , 这种写法是不行的 , 因为JS中会默认把属性值转换为字符串
}
console.log(obj.hd4);  // 错误 , 此时会返回undefined
console.log(obj[hd4]); 





