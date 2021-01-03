// 背后的语法
const boolean = new Boolean(true);
console.log(typeof boolean);
// 使用valueOf , 能够获取它的值
console.log(boolean.valueOf());

// 简便方法
const boolean2 = true;

// 对于Boolean值和数值型的转换 , 0 => false , 1 => true
// 所以 99 === true 会返回 false;
// 实际上bool值是进行了一个转换
let number = 99;
if (number) {
  console.log(number)
}

// 字符串 "0" => false , "1" => true
let hd = "0";

// 数组 length为0 => false , length不为1 => true
// 但是数组是一个引用类型 , 所以始终是有值的 , 只不过里面是一个存放了空的引用地址
let array = ['123'];
if(array){
  console.log('123')
}
