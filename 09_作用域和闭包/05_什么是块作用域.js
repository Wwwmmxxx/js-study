{
  let a = 1;
  console.log(a);
}

{
  // 此a与上一个块级作用域的a不相同
  let a = 1;
}

{
  // 如果使用了var , 那么块级作用域将会无效
  var a = 1;
}

// 此时无法使用, 会报错
console.log(a);
console.log(window.a);