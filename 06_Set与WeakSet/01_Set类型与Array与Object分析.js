// Set的声明方式
let set = new Set();
// 1.使用add进行添加
set.add(1);
set.add(1);
set.add(2);
set.add('1');
// Set是具有类型区分的
console.log(set);

// 2.在构造函数中使用
let set2 = new Set([1, 2, 3, 4, 5]);

// 3.补充
// 在对象中这么写只能保留一个元素,因为对象中的属性会被转换为String形态
let obj = {
  1: 'hdcms',
  "1": "houdunren"
}
let hd = {
  [obj]:"后盾人"
}

// 实际上在hd对象中会将obj转换为obj.toString() => [object Object]
console.log(hd["[object Object]"]); // 取出来为后盾人
console.log(hd[obj.toString()]);




