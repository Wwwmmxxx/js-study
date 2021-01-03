let number = 0;
console.log(typeof number);
// 一个感叹号 => 表示取反以后变为真 , 
// 两个感叹号 => 转换为bool类型
number = !!number;
console.log(typeof number);

// 使用技巧,可以使用!!来代替判断非空条件
// 可以使用于 => 字符串(String) , 数组(Array) , 对象(Object) , 时间(Date)
let a;
if(!!a){
  // 非Null,undefined,""时执行
  console.log('123');
}

// 显示转换
// 可以使用于 => 字符串(String) , 数组(Array) , 对象(Object) , 时间(Date)
console.log(Boolean(number));