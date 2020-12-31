let m1 = new Map([
  ['houdunren', '后盾人'],
  ['hdcms', '开源系统']
]);

// 1.使用keys()/values()/entries()进行遍历
// 1.1 keys()获取键
console.log(m1.keys());
// 1.2 values()获取值
console.log(m1.values())
// 1.3 entries()获取所有的
console.log(m1.entries());

// 2.使用forof遍历keys(),values(),entries()
for (const key of m1.keys()) {
  console.log(key);
}
for (const value of m1.values()) {
  console.log(value);
}
for (const [key, value] of m1.entries()) {
  // 使用了对象的结构
  console.log(`${key}=>${value}`)
}