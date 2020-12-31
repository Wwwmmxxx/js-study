let m1 = new Map([
  ['houdunren', '后盾人'],
  ['hdcms', '开源系统']
]);

// 1.使用展开语法
console.log(...m1);
console.log(...m1.keys());
console.log(...m1.values());
console.log(...m1.entries());

// 案例:检索包含'后盾人'的Map,并组成新的Map
let newArr = [...m1].filter((item) => item.includes("后盾人"));

console.log(newArr)