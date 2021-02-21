let price = 23.34;

// .除外行外任何字符 .普通点 , 需要使用转义
// d , \d => 表示数字 0~9
console.log(/\d+\.\d+/.test(price));

// 此时下面的语句是错误的 , 因为表达式为一个字符串 , \d在字符串中表示d
// let reg = new RegExp("\d+\.\d+");
// 在字符串里面 "\d" == "d"
let reg = new RegExp("\\d+\\.\\d+");
console.log(reg.test(price))

let url = 'http://www.houdunren.com';
// \w表示任何的字母
console.log(/https?:\/\/\w+\.\w+\.\w+/.test(url))