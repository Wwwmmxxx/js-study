// .表示除了换行符的所有字符
let hd = 'houdunren';
console.log(hd.match(/.+/));

// 如果单纯要匹配点的话 , 需要进行转义
let url = "https://www.baidu.com";
console.log(url.match(/https?:\/\/w+\.\w+\.\w+/));

let hd2 = `
houdunren.com
xuyifei.com
`;
// s模式,视为单行模式
console.log(hd.match(/.+/s));

let tel = '070 - 99999999';
// 直接使用空格与\s效果一样
console.log(tel.match(/\d+ - \d{8}/));


