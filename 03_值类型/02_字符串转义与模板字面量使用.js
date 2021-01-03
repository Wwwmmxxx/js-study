// 两行的作用是相同
let hd1 = new String("houdunren.com");
let hd2 = "houdunren.com";

// 在字符串中输出"
let hd3 = "houdu\"n\\re\tn.com"
console.log(hd3)

// 但是在html中是不一样的,需要使用&nbsp;
let year = '2020';
let site = '后盾人';
console.log(year + site);
//可以使用字面量的写法 , 推荐使用这种写法
console.log(`${year}${site}`)