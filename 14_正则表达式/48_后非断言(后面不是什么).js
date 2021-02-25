//?! ,后面不是什么

let hd = 'houdunren2010hdcms';

// 如果这样使用,会读出来houdunre,因为n开始后面有数字
let reg = /[a-z]+(?!\d+)/i;
// 所以需要增加条件$
// 表示以字母结尾,并且不是数字
let reg2 = /[a-z]+(?!\d+)$/i;
console.log(hd.match(reg2));
