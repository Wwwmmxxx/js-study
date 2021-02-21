let hd = "houdunren.com";
let a = "u";

// 这里的u不是变量,而是一个字面量,但是可以通过eval
console.log(/u/.test(hd));

// 一般来说正则表达式中是没办法使用变量的 , 但是可以通过eval函数改变这一情况
// 但是大部分的时候,我们不会使用变量
console.log(eval(`/${a}/`).test(hd));