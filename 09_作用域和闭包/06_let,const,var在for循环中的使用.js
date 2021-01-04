for (var i = 0; i < 4; i++) {
  console.log(i);
}
console.log(i);

for (let a = 0; a < 4; a++) {
  console.log(a);
}
// 此时无法访问a
console.log(a);

// 使用了setTimeout
// 但是由于i使用var关键字定义 , 所以异步循环的4次后 , var被变更为4 , 最终执行结果都为4
for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 如果使用了let关键字 , 由于块级作用域的关系 , 能够正常访问到每一个i
for (let i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}