let hd = 'houdunren789hdcms666';
const reg = /(?<=houdunren)\d+/;
console.log(hd.match(reg));

let main = `
<a href="https://baidu.com">百度</a>
<a href="https://yahoo.com">雅虎</a>
`
const reg2 = /(?<=href=(['"])).+(?=\1)/ig
main = main.replace(reg2,'https://www.houdunren.com')
console.log(main);
