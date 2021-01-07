const hd = {
  username:'xuyifei',
  age:21
}

// // 使用forof时不能直接遍历对象
// for(const key of hd){
//   // 此时会报错
//   console.log(key)
// }

// 1. 但是可以用forof来遍历keys() , values() , entries()
for(const key of Object.keys(hd)){
  console.log(key);
}
console.log('--------------------')
for(const key of Object.values(hd)){
  console.log(key);
}
console.log('--------------------')
for(const key of Object.entries(hd)){
  console.log(key);
}
console.log('--------------------')

// 2.可以使用解构语法同时获取键 和 值
for(const [key,value] of Object.entries(hd)){
  console.log(key,value)
}

// 3.练习 , 向往网页中添加DOM元素
let lessons = [
  { name: "js", click: 23 },
  { name: "node", click: 192 }
];

const ul = document.createElement('ul');
for(const lesson of lessons){
  let li = document.createElement('ul');
  li.innerHTML = `课程:${lesson.name},点击数:${lesson.click}`;
  ul.appendChild(li);
}
document.body.appendChild(ul);