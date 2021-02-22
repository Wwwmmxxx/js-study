let hd = 'houdunren2010.不断发布教程,加油';

// \p{}需要配合u模式使用

// 匹配到字母
console.log(hd.match(/\p{L}/gu));
// 匹配符号
console.log(hd.match(/\p{P}/gu));
// 找到中文 , 具体sc=? , 可以通过官网查找
console.log(hd.match(/\p{sc=Han}/gu));

// 如果要匹配宽字节来进行匹配的 , 需要使用u字节
let str = "ｘｙ";
console.log(str.match(/[ｘｙ]/));



