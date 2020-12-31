let m1 = new Map([
  ['houdunren', '后盾人'],
  ['hdcms', '开源系统']
]);

// 1.获取数量
console.log(m1.size);

// 2.检测元素是否存在
console.log(m1.has('houdunren'));

// 3.读取元素
console.log(m1.get('houdunren'));

// 4.删除元素
console.log(m1.delete('houdunren'));
console.log(m1);

// 5.clear清除所有方法
m1.clear();
console.log(m1);