let hd = [1, 2, 3];
// 数组的解构 => 放
let [a, b, c] = [...hd];
console.log(a, b, c)
// 放
let [...edu] = [1, 2, 3, 4];
console.log(typeof edu, edu);

// 展开语法在函数的应用
function sum(...args) {
  return args;
}
console.log(sum(1, 2, 3, 4, 5));

// 计算购物车内的商品价格
// 展开语法必须放到后面
// 默认值与展开语法同时存在时 , 普通参数 > 默认值参数 > 展开语法 
function total(discount=0,...price){
  console.log(price);
}

console.log(sum(0,199,299,8777))



