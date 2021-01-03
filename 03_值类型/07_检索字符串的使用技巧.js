const hd = "houdunren.com";

// 当返回值为-1的时候,表明没有找到
// 提供第二个参数表示查找的起始位置
console.log(hd.indexOf("h"));

// 直接返回bool类型 , 提供第二个参数表示查找的起始位置
console.log(hd.includes("h"));

// indexOf默认从左边开始查找 , 也可以从右边开始查找
// 提供第二个参数
console.log(hd.lastIndexOf("h"));

// 开始
console.log(hd.startsWith("h"));

// 结束
console.log(hd.endsWith("h"));

const word = ['a', 'b'];
const str = 'abcdefg';
// some函数,当有一个为真时,返回真
const status = word.some((word) => {
  return str.includes(word);
});
if (status) {
  console.log('找到了关键字');
}