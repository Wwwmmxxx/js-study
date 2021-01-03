let hd = "houdunren.com";
let a = "u";
// 一般来说正则表达式中是没办法使用变量的 , 但是可以通过eval函数改变这一情况
console.log(eval(`/${a}/`).test(hd));