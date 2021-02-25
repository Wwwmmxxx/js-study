let hd = '后盾人不断分享视频,后盾人教程的网址是'

let reg = /后盾人(?=教程)/g
// 给后盾人后面是教程的加上
// 是断言语句中的if语句
console.log(hd.replace(reg,'<a href="houdunren.com">$&</a>'));
  
