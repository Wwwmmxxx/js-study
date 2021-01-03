let arr = [1, 9, 5, 2, 2, 1];
arr = arr.sort(function (a, b) {
  // 如果a-b为负数 , 从小到大
  // 如果a-b为整数 , 从大到小
  return a - b
});
console.log(arr);

let cart = [
  { name: 'iphone', price: 12000 },
  { name: 'imac', price: 18000 },
  { name: 'ipad', price: 3200 }
]

// 返回-1从小到大排列
cart = cart.sort((a, b) => a.price - b.price)
console.log(cart)