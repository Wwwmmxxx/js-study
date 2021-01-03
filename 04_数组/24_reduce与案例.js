let arr = [1, 2, 3, 4, 5];

// 如果函数有第一个参数 , 则第一次的pre为数组的第一项
// 如果函数有第二个参数 , 则第一次的pre为第二参数
arr.reduce((pre, value, index, arr) => {
  console.warn(pre, value);
  return 99;
}, 0)

// -------------------案例1-----------------------

let cart = [
  { name: 'iphone', price: 20000 },
  { name: 'imac', price: 25000 },
  { name: 'ipad', price: 19000 }
]

function sum(goods) {
  return goods.reduce((total, cur) => {
    return (total + cur['price']);
  }, 0)
}

console.log(sum(cart));

// -------------------案例1-----------------------
