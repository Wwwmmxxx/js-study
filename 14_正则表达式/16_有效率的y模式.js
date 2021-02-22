let hd = 'uuuudunren';

// g模式下,会一直往后找
// y模式下,需要一直连续满足条件
let reg = /u/y;

console.log(reg.exec(hd));
console.log(reg.lastIndex);
console.log(reg.exec(hd));
console.log(reg.lastIndex);
console.log(reg.exec(hd));
console.log(reg.lastIndex);

// 使用y模式可以提升效率
let hd2 = `后盾人QQ群:11111111,99999999,888888888后盾人不断分享视频教程`;
let reg2 = /(\d+),?/y;
reg2.lastIndex = 7;
console.log(reg2.exec(hd2));// 111111111
console.log(reg2.exec(hd2));// 999999999
console.log(reg2.exec(hd2));// 888888888