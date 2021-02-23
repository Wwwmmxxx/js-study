// \d 数字
// \w 数字,字母,下划线
// . 除了换行符的所有字符
let hd = `
  houdunren
  hdcms
`

console.log(hd.match(/.+/g));
console.log(hd.match(/[\s\S]+/g)); // 匹配到了所有内容

console.log(hd.match(/.+/g))