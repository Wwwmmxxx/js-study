let hd1 = 'houdunren.com';
// search方法
console.log(hd1.search("h"));
console.log(hd1.search(/u/));

// match方法,及案例
console.log(hd1.match(/u/i));

let hd2 = `
https://hdcms.com
https://www.sina.com.cn
https://www.houdunren.com
`
let reg = /https?:\/\/(\w+\.)?(\w+\.)+(com|cn.org|cc)/ig;
console.log(hd2.match(reg));

// matchAll方法
for(const iterator of hd2.matchAll(reg)){
  console.log(iterator);
}

// split方法
// 可能有些是-,有些是/
let hd = '2020-09-12';
console.log(hd.split("-"));
console.log(hd.split(/[-\/]/));