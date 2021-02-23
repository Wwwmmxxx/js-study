let hd = `
https://www.houdunren.com
http://houdunwang.com
http://hdcms.com
后盾人
`
let reg = /https:\/\/\w+\.\w+\.(com|org|cn)/gi
console.log(hd.match(reg));

//想要获取域名,则将域名边为原子组,并且我不想(com|org|cn)出现在我的结果数组中,那么我可以使用?:
//一旦使用了?:,则现在下面的正则表达式只会有:
// 0 => https://www.houdunren.com => 匹配到的第一个字符串
// 1 => www.houdunren.com => 第一个原子组
// 2 => 原先时com|org|cn , 现在没有了 => 需要注意 , 后面就不能使用\1或者$1来获取这个原子组了
let reg2 = /https?:\/\/((?:\w+\.)?\w+\.(?:com|org|cn))/gi
let urls = [];
while(res = reg2.exec(hd)){
  urls.push(res[1]);
}
console.log(urls);
