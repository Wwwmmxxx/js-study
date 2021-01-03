let arr = [1, 2, 3];
let keys = arr.keys();
let values = arr.values();

// 注意这里必须对第一个表达式添加() , 否则done变量会成为未定义变量
while (({ value, done } = values.next()) && done === false) {
  console.log(value);
}

for (const iterator of values) {
  console.log(iterator);
}

// entries方法相当于.keys()和.values()方法之间的合体
let entries = arr.entries();
console.log(entries.next());