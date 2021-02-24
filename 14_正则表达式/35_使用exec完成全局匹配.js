let hd = 'houdunren';
// 需要注意对于没有使用g模式的正则表达式
// 那么是没有lastIndex这个属性的
let reg = /u/ig;
console.log(reg.exec(hd));
console.log(reg.exec(hd));

let result = [];
while(res = reg.exec(hd)){
  result.push(res);
}
console.log(result);