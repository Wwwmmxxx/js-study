// 去除英文字母
let hd = "houdunren20200126";

// 以前的方法
console.log([...hd].filter(a => !Number.isNaN(parseInt(a))).join(""))

// 使用正则表达式
console.log(hd.match(/\d/g).join(""))